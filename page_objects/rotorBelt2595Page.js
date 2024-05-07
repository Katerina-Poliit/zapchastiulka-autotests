import HomePage from "./homePage";

class RotorBelt2595Page {
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

export default RotorBelt2595Page;