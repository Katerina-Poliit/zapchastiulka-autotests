
class HomePage {
    constructor(page) {
        this.page = page;
    }


    locators = {
        getLogo: () => this.page.locator('div').filter({ hasText: /^КаталогВведіть пошукове слово$/ }).getByRole('img').first(),
        getCatalogbutton: () => this.page.getByRole('button', { name: 'Каталог' }),
        getdropdownMenu: () => this.page.getByRole('banner').getByRole('list'),
        getFilterСhapter: () => this.page.getByRole('button', { name: 'Фільтри' })
    };

  locators = {
    getLogo: () => this.page.locator('div').filter({ hasText: /^КаталогВведіть пошукове слово$/ }).getByRole('img').first(),
	 getCatalogbutton: () => this.page.getByRole('button', { name: 'Каталог' }),
	 getdropdownMenu: () => this.page.getByRole('banner').getByRole('list'),
    getFilterСhapter: () => this.page.getByRole('button', { name: 'Фільтри' }),
	 getSparePartsForAgriculturalMachinery: () => this.page.getByRole('button', { name: 'Запчастини до сільгосптехніки' }),
	 getSparePartsForAgriculturalMachineryVector: () => this.page.locator('.w-full .stroke-iconPrimary').nth(2)
  };


    async open() {
        await this.page.goto("/");
    }

    async clickCatalogbutton() {
        await this.locators.getCatalogbutton().click();
        return this;
    }

}

export default HomePage;

