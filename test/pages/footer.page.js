import Base from './base.page'
import sel from "../selectors/footer.sel"
import exp from "../expected/footer.exp"

class Footer extends Base {

    checkPage() {
        expect($(sel.footer)).toBeDisplayed()
    }

    links() {
        expect($(sel.footerLinks)).toBeDisplayed()
    }

    copyright() {
        expect($(sel.copyTxt)).toBeDisplayed()
    }

    version() {
        expect($(sel.version)).toBeDisplayed()
    }

    copyrightText() {
        this.checkText(sel.copyTxt, exp.copyText)
    }

    versionText() {
        this.checkText(sel.version, exp.versionTxt)
    }

    developer() {
        this.checkText(sel.version, exp.devTxt)
    }

}

export default new Footer;
