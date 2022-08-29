
let user = {
    firstName: 'Pavlo',
    lastName: 'Nakonechnyi',
    password: 'Test1234%',
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

Scenario('test something', ({ I, homepagePage, authPage, createAccountPage, myAccountPage }) => {
    I.openStore();
    homepagePage.clickSingIn();
    authPage.fillEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.registerNewUser(user);
    myAccountPage.verifyPage();
})
