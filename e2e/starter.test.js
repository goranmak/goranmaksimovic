describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('which describes you screen', async () => {
    await expect(element(by.label('Which describes you?'))).toBeVisible();
  });
  

  it('should start on Landlord signup flow', async () => {
    await element(by.label("Landlord Log In")).tap();

  });

  // it('should go to regular signup flow', async () => {
  //   await element(by.label("Sign Up with Email")).tap();
  // });

  it('should fill email and password', async () => {    
    await element(by.id('email-input')).typeText('test@example.com');
    await element(by.id('email-input')).tapReturnKey();
    await element(by.id('password-input')).tap();
    await element(by.id('password-input')).typeText('password');
    await element(by.id('password-input')).tapReturnKey();
    await element(by.label("Continue")).tap();
  });

});