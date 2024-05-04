
class HomePage {
  constructor(page) {
    this.page = page;
  }

  locators = {
    getLogo: () => this.page.locator('div').filter({ hasText: /^КаталогВведіть пошукове слово$/ }).getByRole('img').first(),
	 getCatalogbutton: () => this.page.getByRole('button', { name: 'Каталог' })
  };

  async open() {
    await this.page.goto("/");
  }

}

export default HomePage;
