class DoYouWantSomethingSpecialDialogBoxPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getDoYouWantSomethingSpecialDialogBoxPageHeader: () => this.page.getByRole('heading', { name: 'Бажаєте щось особливе?' }),
		  getCloseButton: () => this.page.locator('#modal-root').getByRole('button').first(),
		  getWrenchIcon: () => this.page.locator('.modal-body > div > div'),
		  getDescription: () => this.page.getByText('Розкажіть нам про ваші побажання. А про інше потурбується менеджер')
 };

 async clickCloseButton() {
	await this.locators.getCloseButton().click()
}

}

export default DoYouWantSomethingSpecialDialogBoxPage;