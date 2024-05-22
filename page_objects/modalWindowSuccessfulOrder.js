import HomePage from "./homePage";

class ModalWindowSuccessfulOrder {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getModalWindow: () => this.page.getByText('Замовлення успішне!Очікуйте дзвінка нашого менеджера протягом 5'),
		getIcon: () => this.page.locator('.modal-body > div > div > .flex'),
		getHeader: () => this.page.getByText('Замовлення успішне!'),
		getDescription: () => this.page.getByText('Очікуйте дзвінка нашого менеджера протягом 5 хвилин'),
		getGoToTheCatalogButton: () => this.page.getByRole('button', { name: 'Перейти до каталогу' })

 };

		async clickGoToTheCatalogButton() {
			await this.locators.getGoToTheCatalogButton().click();
			return new HomePage(this.page);
		}



}

export default ModalWindowSuccessfulOrder;