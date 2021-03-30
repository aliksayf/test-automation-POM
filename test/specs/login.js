import sel from "../selectors/login.sel"
import exp from "../expected/login.exp"
import login from "../pages/login.page"

describe('Login', () => {

    describe('App-data', () => {

        it('Page-title-is-correct', () => {
            browser.url('/');
            expect(browser).toHaveTitle(exp.pageTitle)
        })

        it('Page-URL-is-correct', () => {
            const URL = browser.getUrl();
            expect(browser).toHaveUrl(exp.pageUrl)
        })

    })

    describe('Elements-displayed', () => {

        it('Logo', () => {
            expect($(sel.logo)).toBeDisplayed()
        })

        it('Email-field', () => {
            expect($(sel.emailField)).toBeDisplayed()
        })

        it('Password-field', () => {
            expect($(sel.passField)).toBeDisplayed()
        })

        it('Login-button', () => {
            expect($(sel.btnLogin)).toBeDisplayed()
        })

        it('Forgot-button', () => {
            expect($(sel.btnForgot)).toBeDisplayed()
        })

    })

    describe('Elements-values', () => {

        it('Email-placeholder', () => {
            expect($(sel.emailField)).toHaveAttribute('placeholder', exp.emailPlHolder)
        })

        it('Password-placeholder', () => {
            expect($(sel.passField)).toHaveAttribute('placeholder', exp.passPlHolder)
        })

        it('Login-button', () => {
            expect($(sel.btnLogin)).toHaveText(exp.loginBtnText)
        })

        it('Forgot-button', () => {
            expect($(sel.btnForgot)).toHaveText(exp.forgotBtnText)
        })

    })

    describe('Login-page-functionality', () => {

        it('Login-page-is-displayed', () => {
            expect($(sel.loginPage)).toBeDisplayed();
        })

        it('Error-message-appears-if-both-fields-are-empty-and-click-Login', () => {
            login.bothFieldsEmptyError();
        })

        it('Verify-error-message-value', () => {
            expect($(sel.errorMsg)).toHaveText(exp.loginErrorMsg);
        })

        it('Error-message-disapears-on-input-in-Email-field', () => {
            $(sel.emailField).setValue('c')
            $(sel.errorMsg).waitForDisplayed({reverse: true});
        })

        it('Error-message-appears-if-only-Password-field-is-empty-and-click-Login', () => {
            $(sel.emailField).setValue('test@')
            $(sel.passField).setValue('')
            $(sel.btnLogin).click()
            expect($(sel.errorMsg)).toBeDisplayed();
        })

        it('verify-Error-message-text', () => {
            expect($(sel.errorMsg)).toHaveText(exp.loginErrorMsg);
        })

        it('Error-message-disapears-on-input-in-Password-field', () => {
            $(sel.passField).setValue('pass')
            $(sel.errorMsg).waitForDisplayed({reverse: true});
        })

        it('Error-message-appears-if-only-Email-field-is-empty-and-click-Login', () => {
            browser.url('/');
            $(sel.passField).setValue('password')
            // $('#username').clearValue()
            $(sel.btnLogin).click()
            expect($(sel.errorMsg)).toBeDisplayed();
        })

        it('verify-Error-message-text', () => {
            expect($(sel.errorMsg)).toHaveText(exp.loginErrorMsg);
        })

        it('Error-message-appears-if-only-Email-is-incorrect', () => {
            $(sel.emailField).setValue('fake@test.com')
            $(sel.passField).setValue('password')
            $(sel.btnLogin).click()
            expect($(sel.errorMsg)).toBeDisplayed();
        })

        it('verify-Error-message-text', () => {
            expect($(sel.errorMsg)).toHaveText(exp.userErrorMsg);
        })

        it('Error-message-appears-if-only-Email-is-correct-but-Pasword-is-not', () => {
            $(sel.emailField).setValue('info@techstart.dev')
            $(sel.passField).setValue('fake-password')
            $(sel.btnLogin).click()
            expect($(sel.errorMsg)).toBeDisplayed();
        })

        it('verify-Error-message-text', () => {
            expect($(sel.errorMsg)).toHaveText(exp.passErrorMsg);
        })

    })

})
