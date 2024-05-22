import OilsAndAutomotiveChemicalsPage from "./oilsAndAutomotiveChemicalsPage";

class HydraulicPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
	getBreadCrumbsHydraulic: () => this.page.getByRole('link', { name: 'Гідравлічні' }),
	getBreadCrumbsOilsAndAutomotiveChemicals: () => this.page.getByRole('link', { name: 'Масла та автохімія' })
 };

		async clickBreadCrumbsOilsAndAutomotiveChemicals() {
			await this.locators.getBreadCrumbsOilsAndAutomotiveChemicals().click();
			return new OilsAndAutomotiveChemicalsPage(this.page);
		}



}

export default HydraulicPage;