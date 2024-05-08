import HomePage from "./homePage";

class TelescopicLoaderAGRISTARPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getLogo: () => this.page.locator('div').filter({ hasText: /^КаталогВведіть пошукове слово$/ }).getByRole('img').first()		  
 };


 async clickLogo() {
	await this.locators.getLogo().click();
	return new HomePage(this.page);
}

}

export default TelescopicLoaderAGRISTARPage;