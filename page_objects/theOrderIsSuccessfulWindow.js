class TheOrderIsSuccessfulWindowPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getSuccessfulWindowHeader: () => this.page.getByText('Замовлення успішне!')


};

}

export default TheOrderIsSuccessfulWindowPage;