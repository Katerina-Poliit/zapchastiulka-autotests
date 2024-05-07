import OilsAndAutomotiveChemicalsPage from "./oilsAndAutomotiveChemicalsPage";
import RotorBelt2595Page from "./rotorBelt2595Page";

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
		getBearingCategory: () => this.page.getByRole('button', { name: 'Підшипники' }),
		getOtherProductsCategory: () => this.page.getByRole('button', { name: 'Інші товари' }),
		getOilsAndAutomotiveChemicals: () => this.page.getByRole('button', { name: 'Масла та автохімія' }),
		getOilsAndAutomotiveChemicalsVector: () => this.page.locator('.w-full .stroke-iconPrimary').first(),
		getOilsAndAutomotiveChemicalsSubcategory: () => this.page.getByText('МоторніТрансмісійніГідравлічніЗмазкиАвтохімія')

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
    await this.locators.getSearchField().fill('мо');
    return this;
  }


async oilsAndAutomotiveChemicalsHover() {
	const filterChapter = await this.locators.getOilsAndAutomotiveChemicals();
	await filterChapter.hover();
}

async clickOilsAndAutomotiveChemicalsCategory() {
	await this.locators.getOilsAndAutomotiveChemicals().click();
	return new OilsAndAutomotiveChemicalsPage(this.page);
}


}

export default HomePage;

