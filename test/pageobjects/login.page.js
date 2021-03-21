import Page from './page';

class LoginPage extends Page {
    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.login-form-button'); }
    get errorToast () { return $('.ant-notification-notice-message');}

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

    invalidEmail() {
        expect($('.ant-form-item-explain').isDisplayed());
    }

    errorToastAppeared() {
       expect(this.errorToast).toBeDisplayed();
    }
}

export default new LoginPage();
