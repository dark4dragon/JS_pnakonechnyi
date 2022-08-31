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

xScenario('registration', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
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
    I.openProductPage();
    let productPrice = await productPage.getProductPrice();
    console.log(+productPrice.slice(1) + 3.30);
    productPage.addToCart();
    let totalPrice = await cartPage.getTotalPrice();
    console.log(+totalPrice.slice(1));
    I.assertEqual(+productPrice.slice(1) + 3.30, +totalPrice.slice(1));
    cartPage.proceedingCheckout();
    let referenceCode = await cartPage.getReferenceCode();
    console.log(String(referenceCode));
    let stringCode = referenceCode.toString();    
    console.log(stringCode[216]);
}).tag('buy');
