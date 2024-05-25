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
		  getMakePreorderButton: () => this.page.getByRole('button', { name: 'Зробити передзамовлення' }),
		  getOutOfStockModalWindow: () => this.page.getByText('Немає в наявностіВведіть адресу своєї пошти, і, як тільки товар з’явиться, Вам п'),
		  getFhoneNumberField: () => this.page.getByLabel('Номер телефону+'),
		  getOutOfStockModalWindowButton: () => this.page.getByRole('button', { name: 'Відправити' }),
		  getOrderSiccessfulModalWindow: () => this.page.getByText('Замовлення успішне!Очікуйте дзвінка нашого менеджера протягом 5'),
		  getModalWindowCloseButton: () => this.page.locator('#modal-root').getByRole('button').first(),

 };


 async clickLogo() {
	await this.locators.getLogo().click();
	return new HomePage(this.page);
}

async clickMagnifyingGlassIcon() {
	await this.locators.getMagnifyingGlassIcon().click();
}

async clickMakePreorderButton() {
	await this.locators.getMakePreorderButton().click();
}
 async fillFhoneNumberField() {
	await this.locators.getFhoneNumberField().fill('099 999 89 89');
 }

 async clickOutOfStockModalWindowButton() {
	await this.locators.getOutOfStockModalWindowButton().click();
 }

}

export default TelescopicLoaderAGRISTARPage;