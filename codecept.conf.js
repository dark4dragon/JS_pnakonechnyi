const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'testpn/*_store.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      timeout: 20000,
      waitForTimeout: 10000,
      waitForNavigation: 'networkidle',
    }
  },
  include: {
    I: './steps_file.js',
    homepagePage: './pages/homepage.js',
    authPage: './pages/auth.js',
    createAccountPage: './pages/createAccount.js',
  },
  name: 'JS_pnakonechnyi'
}