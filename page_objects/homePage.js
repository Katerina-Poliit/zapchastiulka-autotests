
class HomePage {
  constructor(page) {
    this.page = page;
  }

  locators = {
    getLogo: () => this.page.locator('div').filter({ hasText: /^КаталогВведіть пошукове слово$/ }).getByRole('img').first(),
	 getCatalogbutton: () => this.page.getByRole('button', { name: 'Каталог' }),
   getFilterСhapter: () => this.page.getByRole('button', { name: 'Фільтри' })
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
