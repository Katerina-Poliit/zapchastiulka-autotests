class ModalWindowQuickOrdering {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getModalWindow: () => this.page.getByText('Швидке замовленняЗалиште заявку і наш менеджер зв’яжеться з вами!Номер телефону+'),
		getPhoneField: () => this.page.getByLabel('Номер телефону+'),
		getPhoneFieldHeader: () => this.page.getByText('Номер телефону'),
		getPhoneFieldPlaceholder: () => this.page.getByText('+38', { exact: true }),
		getSendButton: () => this.page.getByRole('button', { name: 'Відправити' })

 };

		async clickPhoneField() {
			await this.locators.getPhoneField().click();
		}

		async typePhoneFieldValidData() {
			await this.locators.getPhoneField().type('0662161612');
		}

		async typePhoneFieldInvalidData() {
			await this.locators.getPhoneField().type('0000000000');
		}

		async clickSendButton() {
			await this.locators.getSendButton().click();
		}

}

export default ModalWindowQuickOrdering;