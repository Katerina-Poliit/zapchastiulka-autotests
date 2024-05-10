class TiresAndTubesPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getTiresAndTubesHeader: () => this.page.getByRole('main').locator('p').filter({ hasText: 'Шини та камери' }),
		  getTiresAndTubesBreadcrambs: () => this.page.getByRole('link', { name: 'Шини та камери' })
 };

}

export default TiresAndTubesPage;