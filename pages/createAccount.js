const { I } = inject();

module.exports = {
  firstNameInput: { css: "#customer_firstname" },
  lastNameInput: { css: "#customer_lastname" },
  passwordInput: { css: "#passwd" },
  addressFirstNameInput: { css: "#firstname" },
  addressLastNameInput: { css: "#lastname" },
  copmanyInput: { css: "#company" },
  addresLineInput: { css: "#address1" },
  cityInput: { css: "#city" },
  stateDropDown: { css: "#id_state" },
  zipCodeInput: { css: "#postcode" },
  additionalInfoInput: { css: "#other" },
  mobilePhoneInput: { css: "#phone_mobile" },
  aliasAddressInput: { css: "#alias" },
  registerButtonClick: { css: "#submitAccount" },

  registerNewUser(user) {
    I.waitForVisible(this.firstNameInput);
    I.fillField(this.firstNameInput, user.firstName);
    I.fillField(this.lastNameInput, user.lastName);
    I.fillField(this.passwordInput, user.passwordRegister);
    I.fillField(this.addressFirstNameInput, user.addressFirstName);
    I.fillField(this.addressLastNameInput, user.addressLastName);
    I.fillField(this.copmanyInput, user.company);
    I.fillField(this.addresLineInput, user.addressLine1);
    I.fillField(this.cityInput, user.city);
    I.click(this.stateDropDown);
    I.selectOption(this.stateDropDown, user.state);
    I.fillField(this.zipCodeInput, user.zipCode);
    I.fillField(this.additionalInfoInput, user.additionalInfo);
    I.fillField(this.mobilePhoneInput, user.mobilePhone);
    I.fillField(this.aliasAddressInput, user.aliasAddress);
    I.click(this.registerButtonClick);

  }

}
