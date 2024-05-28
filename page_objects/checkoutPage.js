import ModalWindowCartWithProducts from "./modalWindowCartWithProducts";

class CheckoutPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
	getHeader: () => this.page.getByRole('heading', { name: 'Оформлення замовлення' }),
	getBreadcrumbs: () => this.page.getByRole('button', { name: 'Назад до кошика' })
 };

		async clickBreadcrumbs() {
			await this.locators.getBreadcrumbs().click();
			return new ModalWindowCartWithProducts(this.page);
		}



}

export default CheckoutPage;