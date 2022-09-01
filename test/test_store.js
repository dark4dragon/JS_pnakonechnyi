let user = {
    firstName: 'Pavlo',
    lastName: 'Nakonechnyi',
    passwordRegister: 'Test1234%',
    addressFirstName: 'Pavlo',
    addressLastName: 'Nakonechnyi',
    company: 'GFL',
    addressLine1: 'Arizona st. 123',
    city: 'Phoenix',
    state: "Arizona",
    zipCode: '85001',
    additionalInfo: 'Hello World!',
    mobilePhone: "+1234567890",
    aliasAddress: 'QA test',
};

Feature('store');

Before(({ I }) => {
    I.openStore();
});

Scenario('registration', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    homePage.clickSingIn();
    authPage.fillRegistrationEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.registerNewUser(user);
    myAccountPage.verifyPage();
}).tag('reg');

Scenario('buy product', async ({ I, homePage, authPage, myAccountPage, productPage, cartPage }) => {
    homePage.clickSingIn();
    authPage.login('test12345@test.ua', 'Test1234%');
    myAccountPage.verifyPage();
    I.amOnPage('http://automationpractice.com/index.php?id_product=6&controller=product');
    productPage.addToCart();
    let productPrice = await cartPage.getProductPrice();    
    let shippingPrice = await cartPage.getShippingPrice();
    let taxPrice = await cartPage.getTaxPrice();
    let totalPrice = await cartPage.getTotalPrice();
    I.assertEqual((productPrice + shippingPrice + taxPrice), totalPrice);
    cartPage.proceedingCheckout();
    let referenceCode = await cartPage.getReferenceCode();
    console.log(referenceCode);
}).tag('buy');
