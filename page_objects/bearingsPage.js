class BearingsPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getBearingsHeader: () => this.page.getByRole('main').locator('p').filter({ hasText: 'Підшипники' }),
		  getBearingsBreadcrambs: () => this.page.getByRole('link', { name: 'Підшипники' })
 };

}

export default BearingsPage;