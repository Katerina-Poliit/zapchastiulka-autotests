class DoYouWantSomethingSpecialDialogBoxPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getDoYouWantSomethingSpecialDialogBoxPageHeader: () => this.page.getByRole('heading', { name: 'Бажаєте щось особливе?' }),
		  getCloseButton: () => this.page.locator('#modal-root').getByRole('button').first()
 };

 async clickCloseButton() {
	await this.locators.getCloseButton().click()
}

}

export default DoYouWantSomethingSpecialDialogBoxPage;