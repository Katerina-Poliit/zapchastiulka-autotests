import HomePage from "./homePage";
import ModalWindowClearTheCart from "./modalWindowClearTheCart";

class ModalWindowCartWithProducts {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getModalWindow: () => this.page.getByText('КошикОчистити кошикМоторна олива Mobil Super 3000 X1 Formula FE 5W-30Артикул:'),
		getModalWindowHeader: () => this.page.getByRole('heading', { name: 'Кошик' }),
		getClearTheCartButton: () => this.page.getByRole('button', { name: 'Очистити кошик' })
		// getGoToCatalogButton: () => this.page.getByRole('button', { name: 'Перейти до каталогу' }),
		// getCloseXButton: () => this.page.locator('#modal-cart').getByRole('button').nth(1),
		// getIcon: () => this.page.locator('div').filter({ hasText: /^Кошик порожнійПочніть додавати товари прямо зараз!Перейти до каталогу$/ }).locator('div').first(),
		// getEmptyCartName: () => this.page.getByText('Кошик порожній'),
		// getModalWindowEmptyCartText: () => this.page.getByText('Почніть додавати товари прямо зараз!')
 };

		async clickClearTheCartButton() {
			await this.locators.getClearTheCartButton().click();
			return new ModalWindowClearTheCart(this.page);
		}

}

export default ModalWindowCartWithProducts;