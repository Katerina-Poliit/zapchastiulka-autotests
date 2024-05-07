import RotorBelt2595Page from "./rotorBelt2595Page";
import SearchResultsPage from "./searchResults";

class HomePage {
  constructor(page) {
    this.page = page;
  }

  locators = {
    getLogo: () => this.page.locator('div').filter({ hasText: /^КаталогВведіть пошукове слово$/ }).getByRole('img').first(),
    getCatalogbutton: () => this.page.getByRole('button', { name: 'Каталог' }),
    getdropdownMenu: () => this.page.getByRole('banner').getByRole('list'),
    getFilterСhapter: () => this.page.getByRole('button', { name: 'Фільтри' }),
    getSparePartsForAgriculturalMachinery: () => this.page.getByRole('button', { name: 'Запчастини до сільгосптехніки' }),
    getSparePartsForAgriculturalMachineryVector: () => this.page.locator('.w-full .stroke-iconPrimary').nth(2),
    getFilterSubcategory: () => this.page.getByText('МасляніПаливніПовітряніІнші'),
    getSparePartsForAgriculturalMachinerySubcategory: () => this.page.getByText('John DeereCase та New'),
    getSparePartsForTrucks: () => this.page.getByRole('button', { name: 'Запчастини до вантажних автомобілів' }),
    getSparePartsForTrucksVector: () => this.page.locator('.w-full .stroke-iconPrimary').nth(3),
    getSearchField: () => this.page.getByRole('textbox', { name: 'Я шукаю' }),
    getButtonSearch: () => this.page.getByRole('banner').getByRole('button').nth(1),
    getRotorBelt2595Page: () => this.page.getByRole('link', { name: 'Артикул: 667248.0 Пас ротора' }),
    getSparePartsForTrucksSubcategory: () => this.page.getByText('DAFMANMersedes-'),
    getDropdownSearch: () => this.page.locator('#__next > div:nth-child(1) > header > nav > div.tablet1024\:flex.tablet1024\:items-center.tablet1024\:justify-between.hidden > div.flex.items-center > form > ul')

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

  async sparePartsForAgriculturalMachineryHover() {
    const filterChapter = await this.locators.getSparePartsForAgriculturalMachinery();
    await filterChapter.hover();
  }

  async clickRotorBelt2595Page() {
    await this.locators.getRotorBelt2595Page().click();
    return new RotorBelt2595Page(this.page);
  }

  async sparePartsForTrucksHover() {
    const filterChapter = await this.locators.getSparePartsForTrucks();
    await filterChapter.hover();
  }
  async enterValidValueSearchField() {
    await this.locators.getSearchField().fill('мото');
    return this;
  }

  async searchField() {
    await this.locators.getSearchField().hover();
    return this;
  }
  async enterNotValidValueSearchField() {
    await this.locators.getSearchField().fill('dgdg');
    return this;
  }

  async clickButtonSearch() {
    await this.locators.getButtonSearch().click();
    return new SearchResultsPage(this.page);
  }
}

export default HomePage;

