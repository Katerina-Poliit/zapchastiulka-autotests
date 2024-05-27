import HomePage from "./homePage";

class ModalWindowEmptyCart {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getModalWindow: () => this.page.getByText('КошикОчистити кошикКошик порожнійПочніть додавати товари прямо зараз!Перейти до '),
		getModalWindowHeader: () => this.page.getByRole('heading', { name: 'Кошик' }),
		getGoToCatalogButton: () => this.page.getByRole('button', { name: 'Перейти до каталогу' }),
		getCloseXButton: () => this.page.locator('#modal-cart').getByRole('button').nth(1),
		getIcon: () => this.page.locator('div').filter({ hasText: /^Кошик порожнійПочніть додавати товари прямо зараз!Перейти до каталогу$/ }).locator('div').first(),
		getEmptyCartName: () => this.page.getByText('Кошик порожній'),
		getClearTheCartButton: () => this.page.getByRole('button', { name: 'Очистити кошик' }),
		getModalWindowEmptyCartText: () => this.page.getByText('Почніть додавати товари прямо зараз!')
 };

		async clickCloseXButton() {
			await this.locators.getCloseXButton().click();
			return new HomePage(this.page);
		}

}

export default ModalWindowEmptyCart;