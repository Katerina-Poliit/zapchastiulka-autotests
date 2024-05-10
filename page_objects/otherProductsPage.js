class OtherProductsPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getOtherProductsHeader: () => this.page.getByRole('main').locator('p').filter({ hasText: 'Інші товари' }),
		  getOtherProductsBreadcrambs: () => this.page.getByRole('link', { name: 'Інші товари' })
 };

}

export default OtherProductsPage;