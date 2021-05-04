import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/portal/profile.portal.page';

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    it('user logs in with valid data', async () => {
        await LoginPage.setLogin(process.env.LOGIN);
        await LoginPage.setPassword(process.env.PASSWORD);
        await LoginPage.clickSubmitButton();
        await ProfilePage.isOpen();
    });

     it('Button Submit is disabled when entering nothing', async () => {
       await LoginPage.submitButtonIsDisabled();
     });

    it('error message Required for email', async () => {
        await LoginPage.setLogin('agjgvf');
        await LoginPage.clearingEmail();
        await LoginPage.errorMessageEmailAppeared();
    });

    it('error message Required for password', async () => {
        await LoginPage.setPassword('qwe');
        await LoginPage.clearingPassword();
        await LoginPage.errorMessagePasswordAppeared();
    });

    it('error message for invalid email', async () => {
        await LoginPage.setLogin('afff');
        await  LoginPage.errorInvalidEmailAppeared();
    });

    it('error Auth message with invalid email and password', async () => {
        await LoginPage.setLogin('aaa@example.com');
        await LoginPage.setPassword('123zx');
        await LoginPage.clickSubmitButton();
        await LoginPage.errorToastAppeared();
    });
});
