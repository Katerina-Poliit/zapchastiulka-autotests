import HomePage from "./homePage";

class ModalWindowEmptyCart {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getModalWindow: () => this.page.getByText('КошикОчистити кошикКошик порожнійПочніть додавати товари прямо зараз!Перейти до '),
		getModalWindowHeader: () => this.page.getByRole('heading', { name: 'Кошик' })
 };

		// async clickGoToTheCatalogButton() {
		// 	await this.locators.getGoToTheCatalogButton().click();
		// 	return new HomePage(this.page);
		// }

}

export default ModalWindowEmptyCart;