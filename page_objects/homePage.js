import OilsAndAutomotiveChemicalsPage from "./oilsAndAutomotiveChemicalsPage";
import TelescopicLoaderAGRISTARPage from "./telescopicLoaderAGRISTARPage";
import SearchResultsPage from "./searchResults";
import FiltersPage from "./filtersPage";
import SparePartsForAgriculturalMachineryPage from "./sparePartsForAgriculturalMachineryPage";
import SparePartsForTrucksPage from "./sparePartsForTrucksPage";
import BearingsPage from "./bearingsPage";
import OtherProductsPage from "./otherProductsPage";
import TiresAndTubesPage from "./tiresAndTubesPage";

class HomePage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getLogo: () => this.page.locator('div').filter({ hasText: /^КаталогВведіть пошукове слово$/ }).getByRole('img').first(),
		getLogoFooter: () => this.page.getByRole('contentinfo').getByRole('img'),
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
		getTiresAndTubesCategory: () => this.page.getByRole('button', { name: 'Шини та камери' }),
		getOilsAndAutomotiveChemicals: () => this.page.getByRole('button', { name: 'Масла та автохімія' }),
		getOilsAndAutomotiveChemicalsVector: () => this.page.locator('.w-full .stroke-iconPrimary').first(),
		getOilsAndAutomotiveChemicalsSubcategory: () => this.page.getByText('МоторніТрансмісійніГідравлічніЗмазкиАвтохімія'),
		getDropdownSearch: () => this.page.locator('#__next > div:nth-child(1) > header > nav > div.tablet1024\:flex.tablet1024\:items-center.tablet1024\:justify-between.hidden > div.flex.items-center > form > ul'),
		getPhoneNumber: () => this.page.locator('div').filter({ hasText: /^\+38 \(096\) 361 83 98$/ }).nth(1),
		getPhoneNumberDropdown: () => this.page.locator('div').filter({ hasText: /^\+38 \(096\) 361 83 98Кошик$/ }).getByRole('img').nth(1),
		getfirstNumberPhone: () => this.page.getByRole('banner').locator('li').filter({ hasText: '+38 (096) 361 83' }),
		getSecondNumberPhone: () => this.page.getByRole('banner').locator('li').filter({ hasText: '+38 (063) 507 12' }),
		getCatalogMenuButton: (pageName) => this.page.getByText(pageName, { exact: true }),
		getCatalogMenuButton2: (pageName) => this.page.getByRole('button', { name: pageName, exact: true }),
		getCartButton: () => this.page.getByRole('button', { name: 'Кошик', exact: true }),
		getCartPopUp: () => this.page.getByText('КошикОчистити кошикКошик порожнійПочніть додавати товари прямо зараз!Перейти до '),
		getToTheBuyer: () => this.page.getByRole('heading', { name: 'Покупцеві' }),
		getOnlineHelp: () => this.page.getByRole('contentinfo').getByText('Онлайн допомога'),
		getPrivacyPolicy: () => this.page.getByText('Політика конфіденційності'),
		getPublicOfferAgreementLink: () => this.page.locator('li').filter({ hasText: 'Договір публічної оферти' }),
		getCatalogSection: () => this.page.getByRole('heading', { name: 'Каталог' }),
		getSparePartsForAgriculturalMachineryFooterLink: () => this.page.getByRole('contentinfo').getByText('Запчастини до сільгосптехніки'),
		getSparePartsForTrucksFooterLink: () => this.page.getByRole('contentinfo').getByText('Запчастини до вантажних автомобілів'),
		getOilsAndAutomotiveChemicalsFooterLink: () => this.page.getByRole('contentinfo').getByText('Масла та автохімія'),
		getTiresAndTubesFooterLink: () => this.page.getByRole('contentinfo').getByText('Шини та камери'),
		getPhoneNumbers: () => this.page.locator('#__next > div:nth-child(1) > footer > div > div.footer-lists > div:nth-child(4) > ul'),
		getSectionContacts: () => this.page.getByRole('heading', { name: 'Контакти' }),
		getWorkScheduleSection: () => this.page.getByRole('heading', { name: 'Графік роботи' }),
		getWorkScheduleList: () => this.page.locator('#__next > div:nth-child(1) > footer > div > div.footer-lists > div:nth-child(5) > ul')

	};

	async open() {
		await this.page.goto("/");
	}

	async clickCatalogbutton() {
		await this.locators.getCatalogbutton().click();
		return this;
	}

	async clickCatalogMenuButton(pageName) {
		await this.locators.getCatalogMenuButton(pageName).click();
	}

	async clickCatalogMenuButton2(pageName) {
		await this.locators.getCatalogMenuButton2(pageName).click();
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

	async clickFiltersCategoryHover() {
		const filterChapter = await this.locators.getFilterСhapter();
		await filterChapter.hover();
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

	async clickOtherProducts() {
		await this.locators.getOtherProductsCategory().click();
		return new OtherProductsPage(this.page);
	}

	async clickTiresAndTubes() {
		await this.locators.getTiresAndTubesCategory().click();
		return new TiresAndTubesPage(this.page);
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

	async clickPhoneNumberDropdown() {
		await this.locators.getPhoneNumberDropdown().click();
		return this;
	}

	async clickCartButton() {
		await this.locators.getCartButton().click();
		return this;
	}

	async clickOnlineHelp() {
		await this.locators.getOnlineHelp().click();
		return this;
	}

}
export default HomePage;
