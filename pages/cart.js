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
  shippingPrice: { css: "#total_shipping" },
  taxPrice: { css: "#total_tax" },
  productPrice: { css: "#total_product" },

  async getProductPrice() {
    let productPrice = await I.grabTextFrom(this.productPrice)
    let stringProductPrice = productPrice.slice(1);
    return Number(stringProductPrice);

  },

  async getShippingPrice() {
    let shippingPrice = await I.grabTextFrom(this.shippingPrice)
    let stringShippingPrice = shippingPrice.slice(1);
    return Number(stringShippingPrice);

  },

  async getTaxPrice() {
    let taxPrice = await I.grabTextFrom(this.taxPrice)
    let stringTaxPrice = taxPrice.slice(1);
    return Number(stringTaxPrice);

  },

  async getTotalPrice() {
    let totalPrice = await I.grabTextFrom(this.totalPrice)
    let stringTotalPrice = totalPrice.slice(1);
    return Number(stringTotalPrice);

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
    let orderReference = await I.grabTextFromAll(this.orderComplete);
    let orderReferenceString = orderReference.join();
    let referenceCodeSearch = orderReferenceString.search("reference");
    let referenceCode = orderReferenceString.slice(referenceCodeSearch + 10, referenceCodeSearch +20);
    return referenceCode;
  },

}
