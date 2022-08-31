
module.exports = function () {
  return actor({
    openStore() {
      this.amOnPage('http://automationpractice.com/index.php');
    },
    openProductPage() {
      this.amOnPage('http://automationpractice.com/index.php?id_product=6&controller=product');
    }

  });
}
