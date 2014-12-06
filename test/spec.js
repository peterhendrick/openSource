describe('user', function (){
  beforeEach(function() {
    browser.get('http://localhost:3000')
  });

  it('should be able to sign up and recieve a message', function () {
    element(by.id('signUp')).click();
    element(by.id('firstName')).sendKeys('Peter');
    element(by.id('lastName')).sendKeys('Hendrick');
    element(by.id('email')).sendKeys('jowdaddsafda@la.com');
    element(by.id('username')).sendKeys('chdifdfaenveseman');
    element(by.id('password')).sendKeys('pass');

    element(by.id('submitButton')).click();

    expect(element(by.binding('error')).isPresent()).toBeTruthy();

    element(by.id('password')).sendKeys('goFuckYourMotherTwice!!!');
    element(by.id('submitButton')).click();

    expect(element(by.id('congratsMessage')).isPresent()).toBeTruthy()

  });
});
