import LoginPage from  '../pageobjects/login.page';
import ProfilePage from  '../pageobjects/profile.page';

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    it('user logs in with valid data', () => {
        LoginPage.setLogin('anna.krupnovaa@gmail.com');
        LoginPage.setPassword('123zxc!!');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

     it('Button Submit is disabled when entering nothing', () => {
        LoginPage.submitButtonIsDisabled();
     });

    it('error message with invalid email', () => {
        LoginPage.setLogin('aaa@example.com');
        LoginPage.invalidEmail();
    });

    it('error message with invalid email and password', () => {
        LoginPage.setLogin('aaa@example.com');
        LoginPage.setPassword('123zx');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });


});


