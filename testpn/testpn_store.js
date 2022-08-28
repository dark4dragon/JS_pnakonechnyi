const auth = require("../pages/auth");

let user = {
    firstName: 'Pavlo',
    state: "Arizona",
};

Feature('store');

Scenario('test something', ({ I, homepagePage, authPage, createAccountPage }) => {
    I.openStore();
    homepagePage.clickSingIn();
    authPage.fillEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccuontFields(user);
    pause();
})
