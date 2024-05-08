import OilsAndAutomotiveChemicalsPage from "./oilsAndAutomotiveChemicalsPage";
import TelescopicLoaderAGRISTARPage from "./telescopicLoaderAGRISTARPage";
import SearchResultsPage from "./searchResults";
import FiltersPage from "./filtersPage";
import SparePartsForAgriculturalMachineryPage from "./sparePartsForAgriculturalMachineryPage";
import SparePartsForTrucksPage from "./sparePartsForTrucksPage";
import BearingsPage from "./bearingsPage";

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
      getButtonSearch: () => this.page.getByRole('banner').getByRole('button').nth(2),
	   getTelescopicLoaderAGRISTARPage: () => this.page.getByRole('link', { name: 'Навантажувач телескопічний' }),
		getSparePartsForTrucksSubcategory: () => this.page.getByText('DAFMANMersedes-'),
		getBearingCategory: () => this.page.getByRole('button', { name: 'Підшипники' }),
		getOtherProductsCategory: () => this.page.getByRole('button', { name: 'Інші товари' }),
		getOilsAndAutomotiveChemicals: () => this.page.getByRole('button', { name: 'Масла та автохімія' }),
		getOilsAndAutomotiveChemicalsVector: () => this.page.locator('.w-full .stroke-iconPrimary').first(),
		getOilsAndAutomotiveChemicalsSubcategory: () => this.page.getByText('МоторніТрансмісійніГідравлічніЗмазкиАвтохімія'),
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

	 async clickTelescopicLoaderAGRISTARPage() {
			await this.locators.getTelescopicLoaderAGRISTARPage().click();
			return new TelescopicLoaderAGRISTARPage(this.page);
  }

  async sparePartsForTrucksHover() {
	const filterChapter = await this.locators.getSparePartsForTrucks();
	await filterChapter.hover();
}

async oilsAndAutomotiveChemicalsHover() {
	const filterChapter = await this.locators.getOilsAndAutomotiveChemicals();
	await filterChapter.hover();
}

async clickOilsAndAutomotiveChemicalsCategory() {
	await this.locators.getOilsAndAutomotiveChemicals().click();
	return new OilsAndAutomotiveChemicalsPage(this.page);
}

async clickFiltersCategory() {
	await this.locators.getFilterСhapter().click();
	return new FiltersPage(this.page);
}

async clickSparePartsForAgriculturalMachinery() {
	await this.locators.getSparePartsForAgriculturalMachinery().click();
	return new SparePartsForAgriculturalMachineryPage(this.page);
}

async clickSparePartsForTrucks() {
	await this.locators.getSparePartsForTrucks().click();
	return new SparePartsForTrucksPage(this.page);
}

async clickBearings() {
	await this.locators.getBearingCategory().click();
	return new BearingsPage(this.page);
}

async enterValidValueSearchField() {
  await this.locators.getSearchField().fill('мото');
  return this;
}

async searchField() {
  await this.locators.getSearchField().hover();
  // return this;
}
async enterNotValidValueSearchField() {
  await this.locators.getSearchField().fill('dgdg');
  // return this;
}

async clickButtonSearch() {
  await this.locators.getButtonSearch().click();
  return new SearchResultsPage(this.page);
}


}

export default HomePage;

