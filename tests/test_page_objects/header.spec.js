import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { BASE_URL, HEADER_CATALOG_BUTTON_TEXT, EXPECTED_ITEMS, FILTER_SUBCATEGORY } from "../../helpers/testData.js";

test.describe('header.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();
  });

	test('Verify that website has store logo', async ({ page }) => {
	  const homePage = new HomePage(page);

	  await expect(page).toHaveURL(BASE_URL);
	  await expect(homePage.locators.getLogo()).toBeVisible();
	  expect(homePage.locators.getLogo()).toBeTruthy();

	});

	test('Verify that website has the "Каталог" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCatalogbutton()).toBeVisible();
		expect(homePage.locators.getCatalogbutton()).toBeTruthy();
		await expect(homePage.locators.getCatalogbutton()).toContainText(HEADER_CATALOG_BUTTON_TEXT);

	 });

	 test('Verify that the "Каталог" dropdown menu is opened after clicking the "Каталог" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();

		await expect(homePage.locators.getdropdownMenu()).toBeVisible();
		expect(homePage.locators.getdropdownMenu()).toBeTruthy();

		for (const item of EXPECTED_ITEMS) {
			await expect(homePage.locators.getdropdownMenu()).toContainText(item);
	 	}

	 });

 	 test('verify "Каталог" button should  be contain the "Фiльтра" chapter', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		await expect(homePage.locators.getFilterСhapter()).toBeVisible();

	 });

	 test('Verify that the "Каталог" button is colored blue', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCatalogbutton()).toHaveCSS('color', 'rgb(255, 255, 255)'); //додатково перевірили, що текст на кнопці білий
		await expect(homePage.locators.getCatalogbutton()).toHaveCSS('background-color', 'rgb(21, 112, 239)');

	 });

	 test('Verify that the "Каталог" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCatalogbutton()).toHaveCSS('cursor', 'pointer');

	 });


	 test('"Фiльтра" category should be contains the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		await expect(homePage.locators.getFilterСhapter()).toHaveCSS('cursor', 'pointer');
	 });

	 test('Verify that the "Каталог" menu contains the "Запчастини до сільгосптехніки" button and the vector', async ({ page }) => {
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

	})
})
