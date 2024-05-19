class MiniTransporterHECHT2636Page {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getHECHT2636Header: () => this.page.locator('p').filter({ hasText: 'Міні транспортер HECHT' }),
		  getHECHT2636Breadcrambs: () => this.page.locator('span').filter({ hasText: 'Міні транспортер HECHT' }),
		  getHECHT2636ImageBlock: () => this.page.getByRole('tabpanel', { name: 'of 1' }).getByRole('img'),
		  getHECHT2636ImageBlockMini: () => this.page.getByRole('button', { name: 'product thumbnail' }),
		  getHECHT2636ImageBlocmagnifier: () => this.page.locator('div').filter({ hasText: /^Міні транспортер HECHT 2636Артикул: testProduct28$/ }).getByRole('button').first()

 };

}

export default MiniTransporterHECHT2636Page;