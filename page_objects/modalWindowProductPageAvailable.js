class ModalWindowProductPageAvailable {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getModalWindow: () => this.page.locator('#modal-root div').filter({ hasText: 'Моторна олива Mobil Super' }).nth(4)
 };



}

export default ModalWindowProductPageAvailable;