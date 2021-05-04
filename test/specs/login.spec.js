import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/portal/profile.portal.page';

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    it('user logs in with valid data', () => {
        LoginPage.setLogin(process.env.LOGIN);
        LoginPage.setPassword(process.env.PASSWORD);
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

     it('Button Submit is disabled when entering nothing', () => {
        LoginPage.submitButtonIsDisabled();
     });

    it('error message Required for email', () => {
        LoginPage.setLogin('agjgvf');
        LoginPage.clearingEmail();
//        browser.pause(2000);
        LoginPage.errorMessageEmailAppeared();
    });

    it('error message Required for password', () => {
        LoginPage.setPassword('qwe');
        LoginPage.clearingPassword();
        browser.pause(1500);
        LoginPage.errorMessagePasswordAppeared();
    });

    it('error message for invalid email', () => {
        LoginPage.setLogin('afff');
        browser.pause(2000);
        LoginPage.errorInvalidEmailAppeared();
    });

    it('error Auth message with invalid email and password', () => {
        LoginPage.setLogin('aaa@example.com');
        LoginPage.setPassword('123zx');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });
});
