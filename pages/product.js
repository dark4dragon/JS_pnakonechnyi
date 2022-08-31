const { I } = inject();

module.exports = {
  productPrice: { css: "#our_price_display" },
  addToCartButton: { css: "#add_to_cart" },
  proceedToCheckoutButton: ({ xpath: '//a[@title="Proceed to checkout"]' }),

  async getProductPrice() {
    return pin = await I.grabTextFrom(this.productPrice);
  },

  addToCart() {
    I.click(this.addToCartButton);
    I.click(this.proceedToCheckoutButton);
  }

}
