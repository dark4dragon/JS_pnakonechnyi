const { I } = inject();

module.exports = {
  firstNameInput: {css: "#customer_firstname"},
  stateDropDown: { css: '#id_state'},

  fillNewAccuontFields(user) {
    I.waitForVisible(this.firstNameInput);
    I.fillField(this.firstNameInput, user.firstName);
    I.click(this.stateDropDown);
    I.selectOption(this.stateDropDown, user.state);
  }
  // insert your locators and methods here
}
