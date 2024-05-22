import HomePage from "./homePage";

class OilsAndAutomotiveChemicalsPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getOilsAndAutomotiveChemicalsHeader: () => this.page.getByRole('main').locator('p').filter({ hasText: 'Масла та автохімія' }),
		  getOilsAndAutomotiveChemicalsBreadcrambs: () => this.page.getByRole('link', { name: 'Масла та автохімія' }),
		  getCatalogBreadcrambs: () => this.page.getByRole('link', { name: 'Каталог' })
 };

 async clickCatalogBreadcrambs() {
	await this.locators.getCatalogBreadcrambs().click();
	return new HomePage(this.page);
}

}

export default OilsAndAutomotiveChemicalsPage;