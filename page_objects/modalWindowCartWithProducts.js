import ModalWindowClearTheCart from "./modalWindowClearTheCart";

class ModalWindowCartWithProducts {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getModalWindow: () => this.page.getByText('КошикОчистити кошикМоторна олива Mobil Super 3000 X1 Formula FE 5W-30Артикул:'),
		getModalWindowHeader: () => this.page.getByRole('heading', { name: 'Кошик' }),
		getClearTheCartButton: () => this.page.getByRole('button', { name: 'Очистити кошик' }),
		getPlaceAnOrderButton: () => this.page.getByRole('button', { name: 'Офомити замовлення' }),
		getCloseXButton: () => this.page.locator('div').filter({ hasText: /^КошикОчистити кошик$/ }).getByRole('button').nth(1),
		getAllInformation: () => this.page.getByText('Всього: 1233 ₴'),
		getCheckoutButton: () => this.page.getByRole('button', { name: 'Офомити замовлення' })
 };

		async clickClearTheCartButton() {
			await this.locators.getClearTheCartButton().click();
			return new ModalWindowClearTheCart(this.page);
		}

		async clickPlaceAnOrderButton() {
			await this.locators.getPlaceAnOrderButton().click();
		}

		async clickCloseXButton() {
			await this.locators.getCloseXButton().click();
		}


}

export default ModalWindowCartWithProducts;