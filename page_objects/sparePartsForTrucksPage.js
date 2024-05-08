class SparePartsForTrucksPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getSparePartsForTrucksHeader: () => this.page.getByRole('main').locator('p').filter({ hasText: 'Запчастини до вантажних автомобілів' }),
		  getSparePartsForTrucksBreadcrambs: () => this.page.getByRole('link', { name: 'Запчастини до вантажних автомобілів' })
 };

}

export default SparePartsForTrucksPage;