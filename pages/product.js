const { I } = inject();

module.exports = {  
  addToCartButton: { css: "#add_to_cart" },
  proceedToCheckoutButton: ({ xpath: '//a[@title="Proceed to checkout"]' }),
  

  addToCart() {
    I.click(this.addToCartButton);    
  },

  proceedToCheckOut() {
    I.click(this.proceedToCheckoutButton);
  }

}
