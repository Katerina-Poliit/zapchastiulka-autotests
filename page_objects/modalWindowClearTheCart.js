import ModalWindowEmptyCart from "./modalWindowEmptyCart";

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
		getModalWindowText: () => this.page.getByText('Ви впевнені, що хочете видалити товари? Відмінити цю дію неможливо'),
		getModalWindowRemoveProduct: () => this.page.getByText('Видалити товарВи впевнені, що хочете видалити товар? Відмініти цю дію неможливо.')
 };

		async clickRemoveTheProductsButton() {
			await this.locators.getRemoveTheProductsButton().click();
			return new ModalWindowEmptyCart(this.page);
		}

}

export default ModalWindowClearTheCart;