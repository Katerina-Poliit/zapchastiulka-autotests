import ModalWindowSuccessfulOrder from "./modalWindowSuccessfulOrder";

class ModalWindowPreOrdering {
	constructor(page) {
		 this.page = page;
	}

 locators = {
	getPhoneField: () => this.page.getByLabel('Номер телефону+'),
	getSendButton: () => this.page.getByRole('button', { name: 'Відправити' }),
	getButtonNextSlide: () => this.page.getByLabel('Next slide').first(),
	getButtonPreviousSlide: () => this.page.getByLabel('Previous slide').first(),
	getCloseButton: () => this.page.locator('div:nth-child(4) > .modal-wrapper > .modal > .modal-header > .hover\\:bg-borderDisabled'),
	getModalWindow: () => this.page.locator('div:nth-child(4) > .modal-wrapper > .modal > .modal-body > .wrapper-modal-content')
	
 };

	async clickPhoneField() {
		await this.locators.getPhoneField().click();
	}

	async typePhoneFieldValidData() {
		await this.locators.getPhoneField().type('0662161612');
	}

	async clickSendButton() {
		await this.locators.getSendButton().click();
		return new ModalWindowSuccessfulOrder(this.page);
	}

	async clickCloseButton() {
		await this.locators.getCloseButton().click();
	}



}

export default ModalWindowPreOrdering;