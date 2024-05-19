class ModalWindowProductPageAvailable {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getModalWindow: () => this.page.locator('#modal-root div').filter({ hasText: 'Моторна олива Mobil Super' }).nth(4),
		geProductName: () => this.page.locator('#modal-root').getByText('Моторна олива Mobil Super'),
		geProductImage: () => this.page.locator('img[alt="Моторна олива Mobil Super 3000 X1 Formula FE 5W-30"]').last()
 };



}

export default ModalWindowProductPageAvailable;