import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { BASE_URL, HEADER_CATALOG_BUTTON_TEXT, CATALOG_MENU_CATEGORIES, FILTER_SUBCATEGORY, SPARE_PARTS_FOR_AGRICULTURAL_MACHINERY_SUBCATEGORY, TELESCOPIC_LOADER_AGRISTAR_PAGE_URL, AFTER_LOGO_CLICK_URL, SPARE_PARTS_FOR_TRUCKS_SUBCATEGORY, HEADER_BEARING_CATEGORY, OTHER_PRODUCTS_CATEGORY, OILS_AND_AUTOMOTIVE_CHEMICAL_PRODUCTS_CATEGORY, OILS_AND_AUTOMOTIVE_CHEMICAL_PRODUCTS_Y_SUBCATEGORY, OILS_URL, FILTERS_URL, HEADER_OILS_TEXT, BREADCRAMBS_OILS_TEXT, SEARCH_RESULTS_URL, BREADCRAMBS_FILTERS_TEXT, HEADER_FILTERS_OILS_TEXT, SPARE_PARTS_FOR_AGRICULTURAL_MACHINERY_URL, BREADCRAMBS_AGRICULTURAL_MACHINERY_TEXT, HEADER_AGRICULTURAL_MACHINERY_TEXT, SPARE_PARTS_FOR_TRUCKS_URL, HEADER_PARTS_FOR_TRUCKS_TEXT, BREADCRAMBS_PARTS_FOR_TRUCKS_TEXT, BEARINGS_URL, HEADER_BEARINGS_TEXT, BREADCRAMBS_BEARINGS_TEXT, CATALOG_PAGE, OTHER_PRODUCTS_URL, HEADER_OTHER_PRODUCTS_TEXT, BREADCRAMBS_OTHER_PRODUCTS_TEXT, TIRES_AND_CAMERAS_URL, HEADER_TIRES_AND_TUBES_TEXT, BREADCRAMBS_TIRES_AND_TUBES_TEXT, CATALOG_MENU_OILS_CATEGORIES, CATALOG_MENU_OILS_URLs_END_POINTS } from "../../helpers/testData.js";
import SearchResultsPage from "../../page_objects/searchResults.js";


test.describe('header.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	test('ТС.01.01.1.Verify that website has store logo', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(page).toHaveURL(BASE_URL);
		await expect(homePage.locators.getLogo()).toBeVisible();
		expect(homePage.locators.getLogo()).toBeTruthy();

	});

	test('TC 01.01.2.Verify that website has the "Каталог" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCatalogbutton()).toBeVisible();
		expect(homePage.locators.getCatalogbutton()).toBeTruthy();
		await expect(homePage.locators.getCatalogbutton()).toContainText(HEADER_CATALOG_BUTTON_TEXT);

	});

	test('TC 01.01.3. Verify that the "Каталог" dropdown menu is opened after clicking the "Каталог" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();

		await expect(homePage.locators.getdropdownMenu()).toBeVisible();
		expect(homePage.locators.getdropdownMenu()).toBeTruthy();

		for (const item of CATALOG_MENU_CATEGORIES) {
			await expect(homePage.locators.getdropdownMenu()).toContainText(item);
		}

	});

	test('verify "Каталог" button should  be contain the "Фiльтра" chapter', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		await expect(homePage.locators.getFilterСhapter()).toBeVisible();

	});

	test('TC 01.01.4. Verify that the "Каталог" button is colored blue', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCatalogbutton()).toHaveCSS('color', 'rgb(255, 255, 255)'); //додатково перевірили, що текст на кнопці білий
		await expect(homePage.locators.getCatalogbutton()).toHaveCSS('background-color', 'rgb(21, 112, 239)');

	});

	test('TC 01.01.5. Verify that the "Каталог" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCatalogbutton()).toHaveCSS('cursor', 'pointer');

	});

	test('"Фiльтра" category should be contains the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		await expect(homePage.locators.getFilterСhapter()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 01.01.6. Verify that the "Каталог" menu contains the "Запчастини до сільгосптехніки" button and the vector', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();

		await expect(homePage.locators.getSparePartsForAgriculturalMachinery()).toBeVisible();
		expect(homePage.locators.getSparePartsForAgriculturalMachinery()).toBeTruthy();
		await expect(homePage.locators.getSparePartsForAgriculturalMachineryVector()).toBeVisible();
		expect(homePage.locators.getSparePartsForAgriculturalMachineryVector()).toBeTruthy();

	});

	test('сategory "Фiльтра" , a subcategory should open', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		await homePage.filterHover();

		for (const item of FILTER_SUBCATEGORY) {
			await expect(homePage.locators.getFilterSubcategory()).toContainText(item);
		}

	});

	test('TC 01.01.7. Verify that the "Запчастини до сільгосптехніки" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();

		await expect(homePage.locators.getSparePartsForAgriculturalMachinery()).toBeVisible();
		expect(homePage.locators.getSparePartsForAgriculturalMachinery()).toBeTruthy();
		await expect(homePage.locators.getSparePartsForAgriculturalMachinery()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 01.01.8. Verify that the subcategory opens when hovering over the "Запчастини до сільгосптехніки" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		await homePage.sparePartsForAgriculturalMachineryHover();

		await expect(homePage.locators.getSparePartsForAgriculturalMachinerySubcategory()).toBeVisible();
		expect(homePage.locators.getSparePartsForAgriculturalMachinerySubcategory()).toBeTruthy();

		for (const item of SPARE_PARTS_FOR_AGRICULTURAL_MACHINERY_SUBCATEGORY) {
			await expect(homePage.locators.getSparePartsForAgriculturalMachinerySubcategory()).toContainText(item);
		}

	});

	test('TC 01.01.11. Verify that the "Каталог" menu contains the "Запчастини для вантажних автомобiлiв" button and the vector', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();

		await expect(homePage.locators.getSparePartsForTrucks()).toBeVisible();
		expect(homePage.locators.getSparePartsForTrucks()).toBeTruthy();
		await expect(homePage.locators.getSparePartsForTrucksVector()).toBeVisible();
		expect(homePage.locators.getSparePartsForTrucksVector()).toBeTruthy();

	});

	test('TC 01.01.12. Verify that the "Запчастини для вантажних автомобiлiв" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();

		await expect(homePage.locators.getSparePartsForTrucks()).toBeVisible();
		expect(homePage.locators.getSparePartsForTrucks()).toBeTruthy();
		await expect(homePage.locators.getSparePartsForTrucks()).toHaveCSS('cursor', 'pointer');

	});

	test('verify header contains the "Пошук" field', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getSearchField()).toBeTruthy();

	});

	test('verify "Пошук" field contains the "search icon" button, a magnifying glass', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getButtonSearch()).toBeTruthy();
		await expect(homePage.locators.getButtonSearch()).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
		await expect(homePage.locators.getButtonSearch()).toHaveCSS('cursor', 'pointer');
		const glassSearchIcon = await page.$('#__next > div:nth-child(1) > header > nav > div.tablet1024\\:flex.tablet1024\\:items-center.tablet1024\\:justify-between.hidden > div.flex.items-center > form > div.search.w-full > button > svg');
		const isGlassSearchIconVisible = await glassSearchIcon.isVisible();

	});

	test('TC 01.01.9. Verify that clicking on the store logo will take the user to the homepage', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(page).toHaveURL(BASE_URL);

		const rotorBelt2595Page = await homePage.clickTelescopicLoaderAGRISTARPage();
		await expect(page).toHaveURL(TELESCOPIC_LOADER_AGRISTAR_PAGE_URL);

		await rotorBelt2595Page.clickLogo()
		await expect(page).toHaveURL(AFTER_LOGO_CLICK_URL);

	});

	test('TC 01.01.10. Verify that the store logo has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getLogo()).toBeVisible();
		expect(homePage.locators.getLogo()).toBeTruthy();
		await expect(homePage.locators.getCatalogbutton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 01.01.13. Verify that the subcategory opens when hovering over the "Запчастини для вантажних автомобiлiв" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		await homePage.sparePartsForTrucksHover();

		await expect(homePage.locators.getSparePartsForTrucksSubcategory()).toBeVisible();
		expect(homePage.locators.getSparePartsForTrucksSubcategory()).toBeTruthy();

		for (const item of SPARE_PARTS_FOR_TRUCKS_SUBCATEGORY) {
			await expect(homePage.locators.getSparePartsForTrucksSubcategory()).toContainText(item);
		}

	});

	test('TC 01.01.33,01.01.36  verify dropdown opens with the product selection, the user has entered a valid value', async ({ page }) => {
		const homePage = new HomePage(page);

		await page.waitForTimeout(3000);
		await homePage.searchField();
		await homePage.enterValidValueSearchField();
		await expect(homePage.locators.getDropdownSearch()).toBeTruthy();

	})

	test('TC 01.01.14. Verify that the "Каталог" menu contains the "Підшипники" category', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();

		await expect(homePage.locators.getBearingCategory()).toBeVisible();
		expect(homePage.locators.getBearingCategory()).toBeTruthy();
		await expect(homePage.locators.getBearingCategory()).toContainText(HEADER_BEARING_CATEGORY);

	});

	test('TC 01.01.15. Verify that the "Каталог" menu contains the "Інші товари" category', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();

		await expect(homePage.locators.getOtherProductsCategory()).toBeVisible();
		expect(homePage.locators.getOtherProductsCategory()).toBeTruthy();
		await expect(homePage.locators.getOtherProductsCategory()).toContainText(OTHER_PRODUCTS_CATEGORY);

	});

	test('TC 01.01.16. Verify that the "Каталог" menu contains the "Масла i автохiмiя" button and the vector', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();

		await expect(homePage.locators.getOilsAndAutomotiveChemicals()).toBeVisible();
		expect(homePage.locators.getOilsAndAutomotiveChemicals()).toBeTruthy();
		await expect(homePage.locators.getOilsAndAutomotiveChemicals()).toContainText(OILS_AND_AUTOMOTIVE_CHEMICAL_PRODUCTS_CATEGORY);
		await expect(homePage.locators.getOilsAndAutomotiveChemicalsVector()).toBeVisible();
		expect(homePage.locators.getOilsAndAutomotiveChemicalsVector()).toBeTruthy();

	});

	test('TC 01.01.17. Verify that the subcategory opens when hovering over the "Масла та автохімія" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		await homePage.oilsAndAutomotiveChemicalsHover();

		await expect(homePage.locators.getOilsAndAutomotiveChemicalsSubcategory()).toBeVisible();
		expect(homePage.locators.getOilsAndAutomotiveChemicalsSubcategory()).toBeTruthy();

		for (const item of OILS_AND_AUTOMOTIVE_CHEMICAL_PRODUCTS_Y_SUBCATEGORY) {
			await expect(homePage.locators.getOilsAndAutomotiveChemicalsSubcategory()).toContainText(item);
		}

	});


	test('TC 01.01.18.1 Verify that the user can navigate to "Масла та автохімія" page by clicking on the appropriate buttons in the "Каталог" menu', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		const oilsAndAutomotiveChemicalsPage = await homePage.clickOilsAndAutomotiveChemicalsCategory();

		await expect(page).toHaveURL(OILS_URL);

		await expect(oilsAndAutomotiveChemicalsPage.locators.getOilsAndAutomotiveChemicalsHeader()).toBeVisible();
		expect(oilsAndAutomotiveChemicalsPage.locators.getOilsAndAutomotiveChemicalsHeader()).toBeTruthy();
		await expect(oilsAndAutomotiveChemicalsPage.locators.getOilsAndAutomotiveChemicalsHeader()).toContainText(HEADER_OILS_TEXT);

		await expect(oilsAndAutomotiveChemicalsPage.locators.getOilsAndAutomotiveChemicalsBreadcrambs()).toBeVisible();
		expect(oilsAndAutomotiveChemicalsPage.locators.getOilsAndAutomotiveChemicalsBreadcrambs()).toBeTruthy();
		await expect(oilsAndAutomotiveChemicalsPage.locators.getOilsAndAutomotiveChemicalsBreadcrambs()).toContainText(BREADCRAMBS_OILS_TEXT);

	});

	test('TC 01.01.38 verify entered an invalid product name, there should be a warning message "На жаль, за вашим "dgdg" запитом нічого не знайдено"', async ({ page }) => {

		const homePage = new HomePage(page);
		await page.waitForTimeout(3000);
		await homePage.searchField();
		await homePage.enterNotValidValueSearchField();
		await homePage.clickButtonSearch();
		await page.waitForTimeout(4000);
		await expect(page).toHaveURL(SEARCH_RESULTS_URL);
		const searchPage = new SearchResultsPage(page);
		await expect(searchPage.locators.getwarningMessage()).toBeVisible();

	})

	test('TC 01.01.18.2 Verify that the user can navigate to "Фільтри" page by clicking on the appropriate buttons in the "Каталог" menu', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		const filtersPage = await homePage.clickFiltersCategory();

		await expect(page).toHaveURL(FILTERS_URL);

		await expect(filtersPage.locators.getFiltersHeader()).toBeVisible();
		expect(filtersPage.locators.getFiltersHeader()).toBeTruthy();
		await expect(filtersPage.locators.getFiltersHeader()).toContainText(HEADER_FILTERS_OILS_TEXT);

		await expect(filtersPage.locators.getFiltersBreadcrambs()).toBeVisible();
		expect(filtersPage.locators.getFiltersBreadcrambs()).toBeTruthy();
		await expect(filtersPage.locators.getFiltersBreadcrambs()).toContainText(BREADCRAMBS_FILTERS_TEXT);

	});

	test('TC 01.01.18.3 Verify that the user can navigate to "Запчастини до сільгосптехніки" page by clicking on the appropriate buttons in the "Каталог" menu', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		const sparePartsForAgriculturalMachineryPage = await homePage.clickSparePartsForAgriculturalMachinery();

		await expect(page).toHaveURL(SPARE_PARTS_FOR_AGRICULTURAL_MACHINERY_URL);

		await expect(sparePartsForAgriculturalMachineryPage.locators.getSparePartsForAgriculturalMachineryHeader()).toBeVisible();
		expect(sparePartsForAgriculturalMachineryPage.locators.getSparePartsForAgriculturalMachineryHeader()).toBeTruthy();
		await expect(sparePartsForAgriculturalMachineryPage.locators.getSparePartsForAgriculturalMachineryHeader()).toContainText(HEADER_AGRICULTURAL_MACHINERY_TEXT);

		await expect(sparePartsForAgriculturalMachineryPage.locators.getSparePartsForAgriculturalMachineryPageBreadcrambs()).toBeVisible();
		expect(sparePartsForAgriculturalMachineryPage.locators.getSparePartsForAgriculturalMachineryPageBreadcrambs()).toBeTruthy();
		await expect(sparePartsForAgriculturalMachineryPage.locators.getSparePartsForAgriculturalMachineryPageBreadcrambs()).toContainText(BREADCRAMBS_AGRICULTURAL_MACHINERY_TEXT);

	});

	test('TC 01.01.18.4 Verify that the user can navigate to "Запчастини до вантажних автомобілів" page by clicking on the appropriate buttons in the "Каталог" menu', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		const sparePartsForTrucksPage = await homePage.clickSparePartsForTrucks();

		await expect(page).toHaveURL(SPARE_PARTS_FOR_TRUCKS_URL);

		await expect(sparePartsForTrucksPage.locators.getSparePartsForTrucksHeader()).toBeVisible();
		expect(sparePartsForTrucksPage.locators.getSparePartsForTrucksHeader()).toBeTruthy();
		await expect(sparePartsForTrucksPage.locators.getSparePartsForTrucksHeader()).toContainText(HEADER_PARTS_FOR_TRUCKS_TEXT);

		await expect(sparePartsForTrucksPage.locators.getSparePartsForTrucksBreadcrambs()).toBeVisible();
		expect(sparePartsForTrucksPage.locators.getSparePartsForTrucksBreadcrambs()).toBeTruthy();
		await expect(sparePartsForTrucksPage.locators.getSparePartsForTrucksBreadcrambs()).toContainText(BREADCRAMBS_PARTS_FOR_TRUCKS_TEXT);

	});

	test('TC 01.01.18.5 Verify that the user can navigate to "Підшипники" page by clicking on the appropriate buttons in the "Каталог" menu', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		const bearingsPage = await homePage.clickBearings();

		await expect(page).toHaveURL(BEARINGS_URL);

		await expect(bearingsPage.locators.getBearingsHeader()).toBeVisible();
		expect(bearingsPage.locators.getBearingsHeader()).toBeTruthy();
		await expect(bearingsPage.locators.getBearingsHeader()).toContainText(HEADER_BEARINGS_TEXT);

		await expect(bearingsPage.locators.getBearingsBreadcrambs()).toBeVisible();
		expect(bearingsPage.locators.getBearingsBreadcrambs()).toBeTruthy();
		await expect(bearingsPage.locators.getBearingsBreadcrambs()).toContainText(BREADCRAMBS_BEARINGS_TEXT);

	});

	test('TC 01.01.39,01.01.40  verify invalid product name, received the message " check and change the request or search for the product in the catalog.", "Перейти до каталогу" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await page.waitForTimeout(3000);
		await homePage.searchField();
		await homePage.enterNotValidValueSearchField();
		await homePage.clickButtonSearch();
		await page.waitForTimeout(4000);
		const messagePage = new SearchResultsPage(page);
		await expect(messagePage.locators.getGoCatalogButtonMessage()).toBeVisible();
		await messagePage.clickButtonCatalog();
		await expect(page).toHaveURL(CATALOG_PAGE);

	})

	test ('TC 01.01.41, 01.01.42 verify header contains a phone number button', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getPhoneNumber()).toBeVisible();
		await expect(homePage.locators.getPhoneNumber()).toHaveCSS('cursor','pointer');
	})

	test('TC 01.01.43 verify phone number button contains a drop down,opens', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getPhoneNumberDropdown()).toBeTruthy();
		await homePage.clickPhoneNumberDropdown();
		await expect(homePage.locators.getfirstNumberPhone()).toBeTruthy();
		await expect(homePage.locators.getfirstNumberPhone()).toHaveCSS('cursor','pointer');
		await expect(homePage.locators.getSecondNumberPhone()).toBeTruthy();
		await expect(homePage.locators.getSecondNumberPhone()).toHaveCSS('cursor','pointer');
	})

	test('TC 01.01.18.6 Verify that the user can navigate to "Інші товари" page by clicking on the appropriate buttons in the "Каталог" menu', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		const otherProductsPage = await homePage.clickOtherProducts();

		await expect(page).toHaveURL(OTHER_PRODUCTS_URL);

		await expect(otherProductsPage.locators.getOtherProductsHeader()).toBeVisible();
		expect(otherProductsPage.locators.getOtherProductsHeader()).toBeTruthy();
		await expect(otherProductsPage.locators.getOtherProductsHeader()).toContainText(HEADER_OTHER_PRODUCTS_TEXT);

		await expect(otherProductsPage.locators.getOtherProductsBreadcrambs()).toBeVisible();
		expect(otherProductsPage.locators.getOtherProductsBreadcrambs()).toBeTruthy();
		await expect(otherProductsPage.locators.getOtherProductsBreadcrambs()).toContainText(BREADCRAMBS_OTHER_PRODUCTS_TEXT);

	});

	test('TC 01.01.18.7 Verify that the user can navigate to "Шини та камери" page by clicking on the appropriate buttons in the "Каталог" menu', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		const tiresAndTubesPage = await homePage.clickTiresAndTubes();

		await expect(page).toHaveURL(TIRES_AND_CAMERAS_URL);

		await expect(tiresAndTubesPage.locators.getTiresAndTubesHeader()).toBeVisible();
		expect(tiresAndTubesPage.locators.getTiresAndTubesHeader()).toBeTruthy();
		await expect(tiresAndTubesPage.locators.getTiresAndTubesHeader()).toContainText(HEADER_TIRES_AND_TUBES_TEXT);

		await expect(tiresAndTubesPage.locators.getTiresAndTubesBreadcrambs()).toBeVisible();
		expect(tiresAndTubesPage.locators.getTiresAndTubesBreadcrambs()).toBeTruthy();
		await expect(tiresAndTubesPage.locators.getTiresAndTubesBreadcrambs()).toContainText(BREADCRAMBS_TIRES_AND_TUBES_TEXT);

	});

	test('TC 01.01.20. Verify that the "Масла i автохiмiя" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();

		await expect(homePage.locators.getOilsAndAutomotiveChemicals()).toBeVisible();
		expect(homePage.locators.getOilsAndAutomotiveChemicals()).toBeTruthy();
		await expect(homePage.locators.getOilsAndAutomotiveChemicals()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 01.01.21. Verify that the "Шини та камери" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();

		await expect(homePage.locators.getTiresAndTubesCategory()).toBeVisible();
		expect(homePage.locators.getTiresAndTubesCategory()).toBeTruthy();
		await expect(homePage.locators.getTiresAndTubesCategory()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 01.01.22. Verify that the buttons in the "Каталог" menu have the color rgb(24, 73, 169) after hovering over them', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		await homePage.oilsAndAutomotiveChemicalsHover();

		await expect(homePage.locators.getOilsAndAutomotiveChemicals()).toBeVisible();
		expect(homePage.locators.getOilsAndAutomotiveChemicals()).toBeTruthy();
		await expect(homePage.locators.getOilsAndAutomotiveChemicals()).toHaveCSS('color', 'rgb(24, 73, 169)');

	});

	CATALOG_MENU_OILS_CATEGORIES.forEach((namePage, indx) => {
		test(`TC 01.01.19.1 Verify that the user can navigate to ${namePage} page by clicking on the appropriate buttons in the "Масла та автохімія" menu`, async ({ page }) => {
			const homePage = new HomePage(page);
			await homePage.clickCatalogbutton();
			await homePage.oilsAndAutomotiveChemicalsHover();
			await homePage.clickCatalogMenuButton(namePage);

			await expect(page).toHaveURL(BASE_URL + CATALOG_MENU_OILS_URLs_END_POINTS[indx]);
			await expect(page.getByRole('link', { name: namePage, exact: true }).first()).toHaveText(namePage);
			await expect(page.locator('p.inline-block')).toHaveText(namePage);
		})

	});
	test('TC 01.01.29 header has a "Кошик" button, an icon', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getCartButton()).toBeVisible();
		await expect(homePage.locators.getCartButton()).toBeTruthy();
	})

	test('TC 01.01.30 "Кошик" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getCartButton()).toHaveCSS('cursor', 'pointer');
		await homePage.clickCartButton();
		expect(homePage.locators.getCartPopUp()).toBeTruthy();

	})


})

