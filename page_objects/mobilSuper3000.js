class MobilSuper3000Page {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getProductImageBlock: () => this.page.getByText('Моторна олива Mobil Super 3000 X1 Formula FE 5W-30Артикул: testProduct33', { exact: true }),
		getProductImageBig: () => this.page.getByRole('tabpanel', { name: 'of 1' }).getByRole('img'),
		getProductImageSmall: () => this.page.getByRole('button', { name: 'product thumbnail' }),
		getMagnifyingGlassIcon: () => this.page.locator('div').filter({ hasText: /^Моторна олива Mobil Super 3000 X1 Formula FE 5W-30Артикул: testProduct33$/ }).getByRole('button').first()
 };

}

export default MobilSuper3000Page;