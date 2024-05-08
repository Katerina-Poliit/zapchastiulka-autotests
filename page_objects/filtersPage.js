class FiltersPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getFiltersHeader: () => this.page.getByRole('main').locator('p').filter({ hasText: 'Фільтри' }),
		  getFiltersBreadcrambs: () => this.page.getByRole('link', { name: 'Фільтри' })
 };

}

export default FiltersPage;