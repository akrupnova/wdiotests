import Page from './page';

class LoginPage extends Page {
    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.login-form-button'); }
    get errorToast () { return $('.ant-notification-notice-message'); }
    get errorEmailRequired  () { return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]'); }
    get errorPasswordRequired  () { return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_password"]]//div[@role="alert"]');}

    async setLogin (email) {
        return (await this.inputUsername).setValue(email);
    }

    async setPassword (password) {
        return (await this.inputPassword).setValue(password);
    }

    async clickSubmitButton () {
        return (await this.buttonSubmit).click();
    }

    async open () {
        return super.open('/user/login');  //user.login instead of / could be
    }

    async submitButtonIsDisabled() {
        expect(this.buttonSubmit).toBeDisabled();
    }

    async errorMessageEmailAppeared() {
        await expect(this.errorEmailRequired).toBeDisplayed();
        await expect(this.errorEmailRequired).toHaveText('Required');
    }

    async errorMessagePasswordAppeared () {
        await expect(this.errorPasswordRequired).toBeDisplayed();
        await expect(this.errorPasswordRequired).toHaveText('Required');
    }

    async errorInvalidEmailAppeared() {
        await expect(this.errorEmailRequired).toBeDisplayed();
        await expect(this.errorEmailRequired).toHaveText('\'email\' is not a valid email');
    }

    async clearingEmail() {
        return this.clearInput(await this.inputUsername);
    }

    async clearingPassword() {
        return this.clearInput(await this.inputPassword);
    }

    async errorToastAppeared() {
       return expect(this.errorToast).toBeDisplayed();
    }
}

export default new LoginPage();
