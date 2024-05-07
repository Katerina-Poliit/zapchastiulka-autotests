import HomePage from "./homePage";

class OilsAndAutomotiveChemicalsPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getOilsAndAutomotiveChemicalsHeader: () => this.page.getByRole('main').locator('p').filter({ hasText: 'Масла та автохімія' }),
		  getOilsAndAutomotiveChemicalsBreadcrambs: () => this.page.getByRole('link', { name: 'Масла та автохімія' })	  
 };

}

export default OilsAndAutomotiveChemicalsPage;