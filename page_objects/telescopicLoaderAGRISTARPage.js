import HomePage from "./homePage";
import ModalWindowPreOrdering from "./modalWindowPreOrdering";
import ModalWindowSuccessfulOrder from "./modalWindowSuccessfulOrder";

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
		  getOutOfStockModalWindow: () => this.page.getByText('Передзамовлення товаруЗалиште заявку і наш менеджер зв’яжеться з вами та розпові'),
		  getFhoneNumberField: () => this.page.getByLabel('Номер телефону+'),
		  getOutOfStockModalWindowButton: () => this.page.getByRole('button', { name: 'Відправити' }),
		  getOrderSiccessfulModalWindow: () => this.page.getByText('Замовлення успішне!Очікуйте дзвінка нашого менеджера протягом 5'),
		  getModalWindowCloseButton: () => this.page.locator('#modal-root').getByRole('button').first(),
		  getMakePreOrderButton: () => this.page.getByRole('button', { name: 'Зробити передзамовлення' }),
		  getProductImageBlock: () => this.page.getByText('Навантажувач телескопічний AGRI STAR 37.7 DIECIАртикул: testProduct10', { exact: true }),
		  getProductImageBig: () => this.page.getByRole('tabpanel', { name: 'of 4' }).getByRole('img'),
		  getMagnifyingGlassIcon: () => this.page.locator('div').filter({ hasText: /^Навантажувач телескопічний AGRI STAR 37\.7 DIECIАртикул: testProduct10$/ }).getByRole('button').first(),
		  getProductImageSmall: () => this.page.locator('#splide02-list'),
		  getProductDescription: () => this.page.getByText('Основні характеристики:Вага (кг):12000Код:testProduct10Виробник:DIECI'),
		  getProductName: () => this.page.locator('p').filter({ hasText: /^Навантажувач телескопічний AGRI STAR 37\.7 DIECI$/ }),
		  getProductArticle: () => this.page.getByText('Артикул: testProduct10').nth(1),
		  getProductPrice: () => this.page.getByText('729000 ₴').first(),
		  getProductStatus: () => this.page.getByText('під замовлення', { exact: true })
 };


 async clickLogo() {
	await this.locators.getLogo().click();
	return new HomePage(this.page);
}

async clickMagnifyingGlassIcon() {
	await this.locators.getMagnifyingGlassIcon().click();
}

async clickMagnifyingGlassIconPreOrdering() {
	await this.locators.getMagnifyingGlassIcon().click();
	return new ModalWindowPreOrdering(this.page);
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

 async clickMakePreOrderButton() {
	await this.locators.getMakePreOrderButton().click();
	return new ModalWindowPreOrdering(this.page);
}

}

export default TelescopicLoaderAGRISTARPage;