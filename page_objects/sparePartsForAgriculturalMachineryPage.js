class SparePartsForAgriculturalMachineryPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getSparePartsForAgriculturalMachineryHeader: () => this.page.getByRole('main').locator('p').filter({ hasText: 'Запчастини до сільгосптехніки' }),
		  getSparePartsForAgriculturalMachineryPageBreadcrambs: () => this.page.getByRole('link', { name: 'Запчастини до сільгосптехніки' })
 };

}

export default SparePartsForAgriculturalMachineryPage;