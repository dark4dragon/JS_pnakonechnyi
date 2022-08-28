const { I } = inject();

module.exports = {
  myAccountPage: 'My account',

  verifyPage() {
    I.waitForText(this.myAccountPage);
    I.see(this.myAccountPage);
  }

}
