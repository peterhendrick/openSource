describe('user', function (){
  beforeEach(function() {
    browser.get('https://shrouded-gorge-4968.herokuapp.com/')
  });
  afterEach(function() {

  });

  it('should be able to sign up and recieve a message', function () {
    element(by.id('signUp')).click();
    element(by.id('firstName')).sendKeys('user');
    element(by.id('lastName')).sendKeys('name');
    element(by.id('email')).sendKeys('usera@name.com');
    element(by.id('username')).sendKeys('username');
    element(by.id('password')).sendKeys('pass');

    element(by.id('submitButton')).click();

    expect(element(by.binding('error')).isPresent()).toBeTruthy();

    element(by.id('password')).sendKeys('iamareallylongpassword*1A');
    // element(by.id('submitButton')).click();
    //
    // expect(element(by.id('congratsMessage')).isPresent()).toBeTruthy()

  });
});
