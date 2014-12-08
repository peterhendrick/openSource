exports.config = {

  onPrepare: function() {
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('protractoroutput', true, true));
    },

  seleniumServerJar: 'C:/Users/Peter/openSource/node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',
  //seleniumPort: '4444',
  //seleniumArgs: ['start'],

  //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  // sauceUser: 'peterjhendrick',
  // sauceKey: '472182a1-95b3-41e4-8068-e120321a1da9',
  //sauceSeleniumAddress: null,

  specs: [
    'spec.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },
  // multiCapablities: [{
  //    'browserName': 'chrome'
  //  }, {
  //    'browserName': 'safari'
  // }]
  baseUrl: 'http://localhost:3000'
};
