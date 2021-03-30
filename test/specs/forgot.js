import forgot from "../pages/forgot.page"
import login from "../pages/login.page"

describe('Forgot', () => {

    describe('App-data', () => {

        it('Page-URL-is-correct', () => {
            browser.url('/forgot');
            forgot.forgotUrl()
        })

    })

    describe('Elements-displayed', () => {

        it('Logo', () => {
            forgot.logo()
        })

        it('Email-field', () => {
            forgot.emailField()
        })

        it('Remind-button', () => {
            forgot.remindBtn()
        })

    })

    describe('Elements-values', () => {

        it('Email-placeholder', () => {
            forgot.emailPlaceholder()
        })

        it('Remind-button', () => {
            forgot.remindBtnText()
        })

    })

    describe('Functionality', () => {

        it('Remind-Password-redirects-to-forgot-page', () => {
            login.redirectToForgot()
        })

        it('Remind-Password-page-is-displayed', () => {
            forgot.checkPage();
        })

        it('Error-message-appears-if-Email-field-is-empty-and-click-Remind-Password', () => {
            forgot.emptyEmailError();
        })

        it('Verify-Error-message-text', () => {
            forgot.emptyEmailErrorMsg()
        })

        it('Error-message-appears-if-Email-is-incorrect', () => {
            forgot.incorrectEmailError()
        })

        it('Verify-Error-message-text', () => {
            forgot.incorrectEmailErrorMsg()
        })

        it('Success-message-appears-if-Email-is-correct', () => {
            forgot.successMsg()
        })

        it('User-is-redirected-to-home-page-in-3-sec-after-the-password-reminder-was-sent', () => {
            forgot.redirectToLogin()
        })

    })

})
