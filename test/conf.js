exports.config = {

  seleniumServerJar: '/home/peter/openSource/node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',

  //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  // sauceUser: 'peterjhendrick',
  // sauceKey: '472182a1-95b3-41e4-8068-e120321a1da9',
  // sauceSeleniumAddress: null,

  specs: [
    './**/*_spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
};
