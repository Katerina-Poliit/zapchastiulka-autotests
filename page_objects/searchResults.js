import HomePage from "./homePage";

class SearchResultsPage {
	constructor(page) {
		 this.page = page;
	}

    locators = {
		getwarningMessage: () => this.page.getByRole('heading', { name: 'На жаль, за вашим “dgdg' }),

    };



}
export default SearchResultsPage;
