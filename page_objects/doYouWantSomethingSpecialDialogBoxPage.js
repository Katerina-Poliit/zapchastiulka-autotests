class DoYouWantSomethingSpecialDialogBoxPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getDoYouWantSomethingSpecialDialogBoxPageHeader: () => this.page.getByRole('heading', { name: 'Бажаєте щось особливе?' }),
		  getCloseButton: () => this.page.locator('#modal-root').getByRole('button').first(),
		  getWrenchIcon: () => this.page.locator('.modal-body > div > div'),
		  getDescription: () => this.page.getByText('Розкажіть нам про ваші побажання. А про інше потурбується менеджер'),
		  getPhoneField: () => this.page.getByLabel('Номер телефону+'),
		  getPhoneFieldHeader: () => this.page.getByText('Номер телефону'),
		  getCommentField: () => this.page.getByLabel('Коментар'),
		  getCommentFieldHeader: () => this.page.getByText('Коментар'),
		  getSendButton: () => this.page.getByRole('button', { name: 'Відправити' })
 };

 async clickCloseButton() {
	await this.locators.getCloseButton().click()
}

async clickPhoneField() {
	await this.locators.getPhoneField().click();
}

async typePhoneField() {
	await this.locators.getPhoneField().type('0662161612');
}

}

export default DoYouWantSomethingSpecialDialogBoxPage;