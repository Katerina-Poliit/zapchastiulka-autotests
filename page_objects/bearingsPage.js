class BearingsPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getBearingsHeader: () => this.page.getByRole('main').locator('p').filter({ hasText: 'Підшипники' }),
		  getBearingsBreadcrambs: () => this.page.getByRole('link', { name: 'Підшипники' }),
		  getBearingsItems: () => this.page.$$('.relative.cards'),
		  getCountItems: () => this.page.getByText('товарів')
 };

}

export default BearingsPage;