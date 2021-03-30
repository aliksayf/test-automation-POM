import Base from './base.page'
import sel from "../selectors/header.sel"
import exp from "../expected/header.exp"

class Header extends Base {

    checkPage() {
        expect($(sel.header)).toBeDisplayed()
    }

    ratingBtn() {
        expect($(sel.btnUsers)).toBeDisplayed()
    }

    gameBtn() {
        expect($(sel.btnGame)).toBeDisplayed()
    }

    ratingUrl() {
        expect(browser).toHaveUrl(exp.usersPageUrl)
    }

    loginBtn() {
        expect($(sel.btnLogin)).toBeDisplayed();
    }

    loginBtnRedirects() {
        $(sel.btnLogin).click();
        expect(browser).toHaveUrl(exp.homePageUrl)
    }

    gameBtnRedirects() {
        $(sel.btnGame).click();
        expect(browser).toHaveUrl(exp.publicGameUrl)
    }

}

export default new Header;
