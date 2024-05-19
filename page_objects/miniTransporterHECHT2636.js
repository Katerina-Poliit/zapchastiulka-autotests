class MiniTransporterHECHT2636Page {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getHECHT2636Header: () => this.page.locator('p').filter({ hasText: 'Міні транспортер HECHT' }),
		  getHECHT2636Breadcrambs: () => this.page.locator('span').filter({ hasText: 'Міні транспортер HECHT' }),
		  getHECHT2636ImageBlock: () => this.page.getByRole('tabpanel', { name: 'of 1' }).getByRole('img')

 };

}

export default MiniTransporterHECHT2636Page;