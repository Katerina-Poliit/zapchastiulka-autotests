import HomePage from "./homePage";

class ModalWindowClearTheCart {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getModalWindow: () => this.page.getByText('Очистити кошикВи впевнені, що хочете видалити товари? Відмінити цю дію неможливо'),
		getRemoveTheProductsButton: () => this.page.getByRole('button', { name: 'Видалити товари' }),
		getCanselButton: () => this.page.getByRole('button', { name: 'Відмінити' }),
		getClearTheCartModalWindowHeader: () => this.page.getByRole('heading', { name: 'Очистити кошик' }),
		getIcon: () => this.page.locator('.z-12 > div').first(),
		getModalWindowText: () => this.page.getByText('Ви впевнені, що хочете видалити товари? Відмінити цю дію неможливо')
		// getGoToCatalogButton: () => this.page.getByRole('button', { name: 'Перейти до каталогу' }),
		// getCloseXButton: () => this.page.locator('#modal-cart').getByRole('button').nth(1),
		// getModalWindowEmptyCartText: () => this.page.getByText('Почніть додавати товари прямо зараз!')
 };

		// async clickCloseXButton() {
		// 	await this.locators.getCloseXButton().click();
		// 	return new HomePage(this.page);
		// }

}

export default ModalWindowClearTheCart;