import Page from './page';

class LoginPage extends Page {
    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.login-form-button'); }
    get errorToast () { return $('.ant-notification-notice-message'); }
    get errorEmailRequired  () { return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]'); }
    get errorPasswordRequired  () { return $('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_password"]]//div[@role="alert"]');}

    setLogin (email) {
        this.inputUsername.setValue(email);
    }

    setPassword (password) {
        this.inputPassword.setValue(password);
    }

    clickSubmitButton () {
        this.buttonSubmit.click();
    }

     open () {
        return super.open('/');  //user.login instead of / could be
    }

    submitButtonIsDisabled() {
        expect(this.buttonSubmit).toBeDisabled();
    }

    errorMessageEmailAppeared() {
        expect(this.errorEmailRequired).toBeDisplayed();
        expect(this.errorEmailRequired.getText()).toEqual('Required');
    }

    errorMessagePasswordAppeared () {
        expect(this.errorPasswordRequired).toBeDisplayed();
        expect(this.errorPasswordRequired.getText()).toEqual('Required');
    }

    errorInvalidEmailAppeared() {
        expect(this.errorEmailRequired).toBeDisplayed();
        expect(this.errorEmailRequired.getText()).toEqual('\'email\' is not a valid email');
    }

    clearingEmail() {
        this.clearInput(this.inputUsername);
    }

    clearingPassword() {
        this.clearInput(this.inputPassword);
    }

    errorToastAppeared() {
       expect(this.errorToast).toBeDisplayed();
    }
}

export default new LoginPage();
