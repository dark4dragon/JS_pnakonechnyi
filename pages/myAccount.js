const { I } = inject();

module.exports = {
  myAccountPage: ('My account'),

    verifyPage () {
    I.see(this.myAccountPage);
  }
  // insert your locators and methods here
}
