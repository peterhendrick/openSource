exports.config = {

  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',

  //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  chromeDriver: './node_modules/protractor/selenium/chromedriver',

  specs: [
    'test/**/*_spec.js',
  ],

  capabilities: {
    'browserName': 'chrome'
  }

  // multiCapabilities: [
  // {
  //   'browserName': 'chrome'
  // }, {
  //   'browserName': 'firefox'
  // }]
};
