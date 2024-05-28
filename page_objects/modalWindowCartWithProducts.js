import CheckoutPage from "./checkoutPage";
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
		getCheckoutButton: () => this.page.getByRole('button', { name: 'Офомити замовлення' }),
		getItemsOfTheOrderProducts: () => this.page.locator('li').filter({ hasText: 'Моторна олива Mobil Super 3000 X1 Formula FE 5W-30Артикул: testProduct3311233 ₴' }),
		getProductCounterButton: () => this.page.locator('div').filter({ hasText: /^Моторна олива Mobil Super 3000 X1 Formula FE 5W-30Артикул: testProduct3311233 ₴$/ }).locator('div').nth(3),
		getAddProductButton: () => this.page.locator('li').filter({ hasText: 'Моторна олива Mobil Super 3000 X1 Formula FE 5W-30Артикул: testProduct3311233 ₴' }).getByRole('button').nth(1),
		getProductsValue: () => this.page.locator('#d26143').nth(1),
		getPrice: () => this.page.locator('p.hidden'),
		getAllPrice: () => this.page.locator('p.font-medium>span'),
		getRemoveProductButton: () => this.page.locator('button.flex>svg').nth(11)
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

		async clickCheckoutButton() {
			await this.locators.getCheckoutButton().click();
			return new CheckoutPage(this.page);
		}

		async clickAddProductButton() {
			await this.locators.getAddProductButton().click();
		}

		async clickRemoveProductButton() {
			await this.locators.getRemoveProductButton().click();
		}


}

export default ModalWindowCartWithProducts;