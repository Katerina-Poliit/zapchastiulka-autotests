class ModalWindowProductPageAvailable {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getModalWindow: () => this.page.locator('#modal-root div').filter({ hasText: 'Моторна олива Mobil Super' }).nth(4),
		geProductName: () => this.page.locator('#modal-root').getByText('Моторна олива Mobil Super')
 };



}

export default ModalWindowProductPageAvailable;