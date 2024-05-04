
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
	 getSparePartsForAgriculturalMachineryVector: () => this.page.locator('.w-full .stroke-iconPrimary').nth(2),
     getFilterSubcategory: () => this.page.locator('//*[@id="__next"]/div[1]/header/nav/div[2]/div[1]/div[3]/section/div[2]/ul')
  };


    async open() {
        await this.page.goto("/");
    }

    async clickCatalogbutton() {
        await this.locators.getCatalogbutton().click();
        return this;
    }

    async filterHover() {
        const filterChapter = await this.locators.getFilterСhapter();
        await filterChapter.hover();
    }


}

export default HomePage;

