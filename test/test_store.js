
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

xScenario('registration', ({ I, homepagePage, authPage, createAccountPage, myAccountPage }) => {
    homepagePage.clickSingIn();
    authPage.fillRegistrationEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.registerNewUser(user);
    myAccountPage.verifyPage();
}).tag('reg');

Scenario('buy product', ({ I, homepagePage, authPage }) => {
    homepagePage.clickSingIn();
    authPage.login('test12345@test.ua', 'Test1234%');
    pause();
}).tag('buy');