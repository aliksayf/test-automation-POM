import footer from "../pages/footer.page"

describe('Footer', () => {

    describe('Elements-displayed', () => {

        it('Footer', () => {
            footer.checkPage()
        })

        it('Footer-links', () => {
            footer.links()
        })

        it('Copyright', () => {
            footer.copyright()
        })

        it('Version', () => {
            footer.version()
        })

    })

    describe('Elements-values', () => {

        it('Copyright', () => {
            footer.copyrightText()
        })

        it('Version', () => {
            footer.versionText()
        })

        it('Developer', () => {
            footer.developer()
        })

    })

})
