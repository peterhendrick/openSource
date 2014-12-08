exports.config = {

  seleniumServerJar: './node_modules/.bin/webdriver-manager',

  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  // sauceUser: 'peterjhendrick',
  // sauceKey: '472182a1-95b3-41e4-8068-e120321a1da9',
  //sauceSeleniumAddress: null,

  specs: [
    'spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
};
