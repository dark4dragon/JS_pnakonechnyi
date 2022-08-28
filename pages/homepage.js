const { I } = inject();

module.exports = {
  signInButton : {css: 'div.header_user_info'},

    clickSingIn () {
      I.click(this.signInButton);
    }

}
