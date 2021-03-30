import sel from '../selectors/header.sel'
import exp from '../expected/header.exp'
import header from "../pages/header.page"

describe('Header', () => {

    describe('Elements-displayed', () => {

        it('Header', () => {
            header.checkPage()
        })

        it('Rating-button', () => {
            header.ratingBtn()
        })

        it('Public-game', () => {
            header.gameBtn()
        })

    })

    describe('functionality', () => {

        it('Rating-button-redirects-to-Rating-url', () => {
            $(sel.btnUsers).click();
            header.ratingUrl()
        })

        it('Rating-page-is-displayed', () => {
            expect($(sel.btnRatings)).toBeDisplayed();
        })

        it('Back-to-login-button-is-displayed', () => {
            header.loginBtn()
        })

        it('Back-to-login-redirects-to-home-page', () => {
            header.loginBtnRedirects()
        })

        it('Clicking-Public-Game-redirects-to-public-game-page', () => {
            header.gameBtnRedirects()
        })

        it('Public-game-page-is-displayed', () => {
            expect($(sel.publicGamePage)).toBeDisplayed();
        })

    })

})
