class TheOrderIsSuccessfulWindowPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getSuccessfulWindowHeader: () => this.page.getByText('Замовлення успішне!'),
		getGoToCatalogButton: () => this.page.getByRole('button', { name: 'Перейти до каталогу' }),
		getSuccessfulWindowIcon: () => this.page.locator('.modal-body > div > div > .flex')


};

}

export default TheOrderIsSuccessfulWindowPage;