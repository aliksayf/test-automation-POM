import selectors from "../selectors/login.sel";

class Base {

    openPage() {
        browser.url(selectors.URL)
    }

    checkPlaceholder(sel, exp) {
        expect($(sel)).toHaveAttribute('placeholder', exp)
    }

    checkText(sel, exp) {
        expect($(sel)).toHaveText(exp)
    }

}

export default Base;
