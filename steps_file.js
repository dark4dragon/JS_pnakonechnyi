
module.exports = function () {
  return actor({
    openStore() {
      this.amOnPage('http://automationpractice.com/index.php');
    },
  });
}
