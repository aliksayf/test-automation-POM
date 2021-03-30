import Base from './base.page'
import sel from '../selectors/forgot.sel'
import exp from '../expected/forgot.exp'
import data from "../data/credentials"

class Forgot extends Base {

    checkPage() {
        expect($(sel.forgotPage)).toBeDisplayed()
        expect($(sel.btnRemind)).toBeDisplayed()
    }

    emptyEmailError() {
        $(sel.email).clearValue()
        $(sel.btnRemind).click()
        expect($(sel.errorMsg)).toBeDisplayed()
    }

    emptyEmailErrorMsg() {
        this.checkText(sel.errorMsg, exp.emailErrorMsg)
    }

    incorrectEmailError() {
        $(sel.email).clearValue()
        $(sel.email).setValue('incorrect@email.test')
        $(sel.btnRemind).click()
        expect($(sel.errorMsg)).toBeDisplayed()
    }

    incorrectEmailErrorMsg() {
        this.checkText(sel.errorMsg, exp.incorrectEmailError)
    }

    successMsg() {
        $(sel.email).clearValue()
        $(sel.email).setValue(data.email)
        $(sel.btnRemind).click()
        expect($(sel.errorMsg)).toBeDisplayed()
    }

    redirectToLogin() {
        expect(browser).toHaveUrl(exp.loginURL, { wait: exp.redirectTime + 100 })
    }

    remindBtnText() {
        this.checkText(sel.btnRemind, exp.remindBtnTxt)
    }

    emailPlaceholder() {
        this.checkPlaceholder(sel.email, exp.emailPlHolder)
    }

    logo() {
        expect($(sel.loginLogo)).toBeDisplayed()
    }

    emailField() {
        expect($(sel.email)).toBeDisplayed()
    }

    remindBtn() {
        expect($(sel.btnRemind)).toBeDisplayed()
    }

    forgotUrl() {
        expect(browser).toHaveUrl(exp.forgotUrl)
    }
}

export default new Forgot;
