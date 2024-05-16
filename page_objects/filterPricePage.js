

class FilterPricePage {
	constructor(page) {
		 this.page = page;
	}

    locators = {
		getFilteredProducts: () => this.page.locator('.cards-container'),
		getSharova: () => this.page.locator('fon//*[@id="__next"]/div[1]/main/div/div[2]/div[4]/div/div/ul/li[2]/a/div/div[2]/p[2]t-medium')

    }

 } export default FilterPricePage;