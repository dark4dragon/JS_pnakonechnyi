const { I } = inject();

module.exports = {
  registerEmailInput: { css: '#email_create' },
  createAccountButton: { css: '#SubmitCreate' },
  emailInput: { css: "#email" },
  passwordInput: { css: "#passwd" },
  signInButton: { css: "#SubmitLogin" },

  fillRegistrationEmail(email) {
    this._waitForPageLoad();
    I.fillField(this.registerEmailInput, email);
  },

  _waitForPageLoad() {
    I.waitForVisible(this.registerEmailInput);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },

  login(email, password) {
    this._waitForPageLoad();
    this._fillEmail(email);
    this._fillPassword(password);
    this._clickSingIn();

  },

  _fillEmail(email) {
    I.fillField(this.emailInput, email);

  },

  _fillPassword(password) {
    I.fillField(this.passwordInput, password);
  },

  _clickSingIn() {
    I.click(this.signInButton);
  },


}
