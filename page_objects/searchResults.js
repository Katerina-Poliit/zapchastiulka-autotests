import HomePage from "./homePage";

class SearchResultsPage {
	constructor(page) {
		 this.page = page;
	}

    locators = {
		getwarningMessage: () => this.page.getByRole('heading', { name: 'На жаль, за вашим “dgdg' }),
		getGoCatalogButtonMessage: () => this.page. getByText('Перевірте та змініть запит або пошукайте товар в каталозі'),
		getButtonCatalog: () => this.page.getByRole('button', { name: 'Перейти до каталогу' })
    };

    async clickButtonCatalog() {
		await this.locators.getButtonCatalog().click();
		return new HomePage(this.page);
	}

}
export default SearchResultsPage;
