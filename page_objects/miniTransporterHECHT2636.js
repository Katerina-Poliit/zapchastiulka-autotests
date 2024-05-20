class MiniTransporterHECHT2636Page {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getHECHT2636Header: () => this.page.locator('p').filter({ hasText: 'Міні транспортер HECHT' }),
		  getHECHT2636Breadcrambs: () => this.page.locator('span').filter({ hasText: 'Міні транспортер HECHT' }),
		  getHECHT2636ImageBlock: () => this.page.getByRole('tabpanel', { name: 'of 1' }).getByRole('img'),
		  getHECHT2636ImageBlockMini: () => this.page.getByRole('button', { name: 'product thumbnail' }),
		  getHECHT2636ImageBlocmagnifier: () => this.page.locator('div').filter({ hasText: /^Міні транспортер HECHT 2636Артикул: testProduct28$/ }).getByRole('button').first(),
		  getHECHT2636ImageBlocmagnifierModalWindow: () => this.page.locator('#modal-root div').filter({ hasText: 'Міні транспортер HECHT' }).nth(4),
		getHECHT2636ImageBlocmagnifierModalWindowName: () => this.page.locator('#modal-root').getByText('Міні транспортер HECHT'),
		 getFotoMdalWindow: () => this.page.locator('#splide03-slide01').getByRole('img', { name: 'Міні транспортер HECHT' }),
		 getScrollModalWindowRight: () => this.page.getByLabel('Next slide')

 };

 async clickHECHT2636ImageBlocmagnifier() {
	await this.locators.getHECHT2636ImageBlocmagnifier().click();
 }

}

export default MiniTransporterHECHT2636Page;