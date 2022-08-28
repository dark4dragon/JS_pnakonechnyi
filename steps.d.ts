/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homepagePage = typeof import('./pages/homepage.js');
type authPage = typeof import('./pages/auth.js');
type createAccountPage = typeof import('./pages/createAccount.js');
type myAccountPage = typeof import('./pages/myAccount.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homepagePage: homepagePage, authPage: authPage, createAccountPage: createAccountPage, myAccountPage: myAccountPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
