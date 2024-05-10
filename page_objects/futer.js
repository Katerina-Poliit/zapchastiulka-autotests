

class FuterPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getFuterBuyer: () => this.page.getByRole('heading', { name: 'Покупцеві' }),
        getOnlineHelp: () => this.page.getByRole('contentinfo').getByText('Онлайн допомога'),
        getPrivacyPolicy: () => this.page.getByText('Політика конфіденційності')




    }

    async clickOnlineHelp() {
        await this.locators.getOnlineHelp().click();
        return this;
    }
}
    export default FuterPage;