import ModalWindowSuccessfulOrder from "./modalWindowSuccessfulOrder";

class ModalWindowQuickOrdering {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getModalWindow: () => this.page.getByText('Швидке замовленняЗалиште заявку і наш менеджер зв’яжеться з вами!Номер телефону+'),
		getPhoneField: () => this.page.getByLabel('Номер телефону+'),
		getPhoneFieldHeader: () => this.page.getByText('Номер телефону'),
		getPhoneFieldPlaceholder: () => this.page.getByText('+38', { exact: true }),
		getSendButton: () => this.page.getByRole('button', { name: 'Відправити' }),
		getCloseButton: () => this.page.locator('#modal-root').getByRole('button').first(),
		getIcon: () => this.page.locator('.modal-body > div > div'),
		getHeaderName: () => this.page.getByRole('heading', { name: 'Швидке замовлення' }),
		getDescription: () => this.page.getByText('Залиште заявку і наш менеджер зв’яжеться з вами!')

 };

		async clickPhoneField() {
			await this.locators.getPhoneField().click();
		}

		async typePhoneFieldValidData() {
			await this.locators.getPhoneField().type('0662161612');
		}

		async pressPhoneField() {
			await this.locators.getPhoneField().press('Enter');
			return new ModalWindowSuccessfulOrder(this.page);
		}

		async typePhoneFieldInvalidData() {
			await this.locators.getPhoneField().type('0000000000');
		}

		async clickSendButton() {
			await this.locators.getSendButton().click();
			return new ModalWindowSuccessfulOrder(this.page);
		}

		async typePhoneFieldInvalidDataLess10() {
			await this.locators.getPhoneField().type('066216161');
		}

		async typePhoneFieldInvalidDataLetterA() {
			await this.locators.getPhoneField().type('a');
		}

		async typePhoneFieldInvalidDataSpecialCharacters() {
			await this.locators.getPhoneField().type('#');
		}

		async typePhoneFieldInvalidDataNumber1() {
			await this.locators.getPhoneField().type('1');
		}

}

export default ModalWindowQuickOrdering;