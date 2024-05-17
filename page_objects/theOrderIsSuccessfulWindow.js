class TheOrderIsSuccessfulWindowPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getSuccessfulWindowHeader: () => this.page.getByText('Замовлення успішне!'),
		getGoToCatalogButton: () => this.page.getByRole('button', { name: 'Перейти до каталогу' })


};

}

export default TheOrderIsSuccessfulWindowPage;