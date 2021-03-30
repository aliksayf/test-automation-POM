import selectors from "../selectors/login.sel"
import expected from "../expected/login.exp"
import creds from "../data/credentials"
import Base from './base.page';
import sel from "../selectors/forgot.sel";
import exp from "../expected/forgot.exp";

class Login extends Base {

    emptyPasswordError() {
        this.openPage();
        $(selectors.emailField).setValue(creds.player.email); //Enter valid email into email field
        $(selectors.btnLogin).click();
        expect($(selectors.error)).toBeDisplayed();
        expect($(selectors.error)).toHaveText(expected.errorEmpty);
    }

    emptyEmailError() {
        this.openPage();
        $(selectors.passField).setValue(creds.player.password); //Enter valid pass into password field
        $(selectors.btnLogin).click();
        expect($(selectors.error)).toBeDisplayed();
        expect($(selectors.error)).toHaveText(expected.errorEmpty);
    }

    bothFieldsEmptyError() {
        this.openPage();
        $(selectors.btnLogin).click();
        expect($(selectors.error)).toBeDisplayed();
        expect($(selectors.error)).toHaveText(expected.errorEmpty);
    }

    incorrectEmailError() {
        this.openPage();
        $(selectors.emailField).setValue(creds.player.email + 'a'); //Enter invalid email into email field
        $(selectors.passField).setValue(creds.player.password); //Enter valid pass into password field
        $(selectors.btnLogin).click();
        expect($(selectors.error)).toBeDisplayed();
        expect($(selectors.error)).toHaveText(expected.errorEmail);
    }

    incorrectPasswordError() {
        this.openPage();
        $(selectors.emailField).setValue(creds.player.email); //Enter valid email into email field
        $(selectors.passField).setValue(creds.player.password + 'a'); //Enter invalid pass into password field
        $(selectors.btnLogin).click();
        expect($(selectors.error)).toBeDisplayed();
        expect($(selectors.error)).toHaveText(expected.errorPassword);
    }

    redirectToForgot() {
        browser.url('/');
        $(sel.btnRemind).click()
        expect(browser).toHaveUrl(exp.forgotUrl)
    }
}

export default new Login;
