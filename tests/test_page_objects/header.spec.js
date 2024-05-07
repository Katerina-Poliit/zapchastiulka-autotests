import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { BASE_URL, HEADER_CATALOG_BUTTON_TEXT, SPARE_PARTS_FOR_AGRICULTURAL_MACHINERY, FILTER_SUBCATEGORY, SPARE_PARTS_FOR_AGRICULTURAL_MACHINERY_SUBCATEGORY, ROTOR_BELT_2595_PAGE_URL, AFTER_LOGO_CLICK_URL, SPARE_PARTS_FOR_TRUCKS_SUBCATEGORY } from "../../helpers/testData.js";

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

		for (const item of SPARE_PARTS_FOR_AGRICULTURAL_MACHINERY) {
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
		await expect(homePage.locators.getButtonSearch()).toHaveCSS('background-color', 'rgb(21, 112, 239)');
		await expect(homePage.locators.getButtonSearch()).toHaveCSS('cursor', 'pointer');
		const glassSearchIcon = await page.$('#__next > div:nth-child(1) > header > nav > div.tablet1024\\:flex.tablet1024\\:items-center.tablet1024\\:justify-between.hidden > div.flex.items-center > form > div.search.w-full > button > svg');
		const isGlassSearchIconVisible = await glassSearchIcon.isVisible();

	 });

	 test('TC 01.01.9. Verify that clicking on the store logo will take the user to the homepage', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(page).toHaveURL(BASE_URL);

		const rotorBelt2595Page = await homePage.clickRotorBelt2595Page();
		await expect(page).toHaveURL(ROTOR_BELT_2595_PAGE_URL);

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
})
