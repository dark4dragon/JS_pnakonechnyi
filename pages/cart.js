const { I } = inject();

module.exports = {
  processSummary: { xpath: '//a[@class="button btn btn-default standard-checkout button-medium"]' },
  processAddress: { xpath: '//button[@name="processAddress"]' },
  termsCheckbox: { css: "#cgv" },
  processCarrier: { xpath: '//button[@name="processCarrier"]' },
  payByBankButton: { xpath: '//a[@title="Pay by bank wire"]' },
  confirmOrderButton: { xpath: '//button[@type="submit"]/span/i' },
  orderConfirmation: { css: "#center_column" },
  totalPrice: { css: "#total_price" },
  orderComplete: { xpath: '//div[@class="box"]' },


  async getTotalPrice() {
    return pin = await I.grabTextFrom(this.totalPrice);
  },

  proceedingCheckout() {
    I.waitForVisible(this.processSummary);
    I.click(this.processSummary);
    I.waitForVisible(this.processAddress);
    I.click(this.processAddress);
    I.waitForVisible(this.termsCheckbox);
    I.click(this.termsCheckbox);
    I.click(this.processCarrier);
    I.waitForVisible(this.payByBankButton);
    I.click(this.payByBankButton);
    I.waitForVisible(this.confirmOrderButton);
    I.click(this.confirmOrderButton);
    I.waitForVisible(this.orderConfirmation);
  },

  async getReferenceCode() {
    return pin = await I.grabTextFromAll(this.orderComplete);
  },

  

}
