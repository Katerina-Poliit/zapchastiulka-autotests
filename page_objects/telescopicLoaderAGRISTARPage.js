import HomePage from "./homePage";

class TelescopicLoaderAGRISTARPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getLogo: () => this.page.locator('div').filter({ hasText: /^КаталогВведіть пошукове слово$/ }).getByRole('img').first(),
		  getMagnifyingGlassIcon: () => this.page.locator('.custom-class-slide > .absolute'),
		  getModalWindowOpenFoto: () => this.page.locator('div:nth-child(4) > .modal-wrapper > .modal > .modal-body > .wrapper-modal-content'),
		  getNameProductModalWindow: () => this.page.locator('#modal-root').getByText('Навантажувач телескопічний').nth(3),
		  getFotoProductModalWindow: () => this.page.locator('#splide10-slide01').getByRole('img', { name: 'Навантажувач телескопічний' }),
 };


 async clickLogo() {
	await this.locators.getLogo().click();
	return new HomePage(this.page);
}

async clickMagnifyingGlassIcon() {
	await this.locators.getMagnifyingGlassIcon().click();
}

}

export default TelescopicLoaderAGRISTARPage;