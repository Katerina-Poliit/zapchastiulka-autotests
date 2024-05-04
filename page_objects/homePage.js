
class HomePage {
  constructor(page) {
    this.page = page;
  }

  locators = {
    getLogo: () => this.page.locator('div').filter({ hasText: /^КаталогВведіть пошукове слово$/ }).getByRole('img').first()
  };

  async open() {
    await this.page.goto("/");
  }

}

export default HomePage;
