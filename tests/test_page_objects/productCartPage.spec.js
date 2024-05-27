import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { EMPTY_CART_HEADER_TEXT, GO_TO_CATALOG_BUTTON_TEXT, EMPTY_CART_NAME_TEXT, CLEAR_THE_CART_BUTTON_NAME_TEXT, MODAL_WINDOW_EMPTY_CART_TEXT } from "../../helpers/testDataProductCartPage.js";


test.describe('productListPage.spec.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	test('TC 05.01.1 Verify that the user can go to the "Cart" page by clicking on the "Cart" icon in the header of the site', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getModalWindow()).toBeVisible();
		await expect(emptyCartPage.locators.getModalWindowHeader()).toBeVisible();
		await expect(emptyCartPage.locators.getModalWindowHeader()).toHaveText(EMPTY_CART_HEADER_TEXT);

	});

	test('TC 05.01.2 Verify that the "Empty Cart" modal window contain the "Перейти до каталогу" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getGoToCatalogButton()).toBeVisible();
		await expect(emptyCartPage.locators.getGoToCatalogButton()).toHaveText(GO_TO_CATALOG_BUTTON_TEXT);

	});

	test('TC 05.01.3 Verify that the "Перейти до каталогу" button is colored blue', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getGoToCatalogButton()).toBeVisible();
		await expect(emptyCartPage.locators.getGoToCatalogButton()).toHaveCSS('background-color', 'rgb(21, 112, 239)');

	});

	test('TC 05.01.4 Verify that the "Перейти до каталогу" button has the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getGoToCatalogButton()).toBeVisible();
		await expect(emptyCartPage.locators.getGoToCatalogButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 05.01.5 Verify that the "Empty Cart" modal window contain the close "X" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getCloseXButton()).toBeVisible();

	});

	test('TC 05.01.5.1 Verify that the close "X" button has the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getCloseXButton()).toBeVisible();
		await expect(emptyCartPage.locators.getCloseXButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 05.01.5.2 Verify that the "Empty Cart" modal window closes after clicking on the close "X" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getModalWindow()).toBeVisible();

		await emptyCartPage.clickCloseXButton();

		await expect(emptyCartPage.locators.getModalWindow()).not.toBeVisible();

	});

	test('TC 05.01.6 Verify that the "Empty Cart" modal window contain the icon', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getIcon()).toBeVisible();

	});

	test('TC 05.01.6.1 Verify that the "Empty Cart" modal window contain the "Кошик порожній" name', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getEmptyCartName()).toBeVisible();
		await expect(emptyCartPage.locators.getEmptyCartName()).toHaveText(EMPTY_CART_NAME_TEXT);

	});

	test('TC 05.01.6.2 Verify that the "Empty Cart" modal window contains the disabled "Очистити кошик" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getClearTheCartButton()).toBeVisible();
		await expect(emptyCartPage.locators.getClearTheCartButton()).toHaveText(CLEAR_THE_CART_BUTTON_NAME_TEXT);

		// Делаю именно такую проверку, а не toBeDisabled() из-за специфики написанного кода
		await expect(emptyCartPage.locators.getClearTheCartButton()).not.toHaveCSS('cursor', 'pointer');
	});

	test('TC 05.01.6.3 Verify that the "Empty Cart" modal window contains the "Почніть додавати товари прямо зараз!" text', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getModalWindowEmptyCartText()).toBeVisible();
		await expect(emptyCartPage.locators.getModalWindowEmptyCartText()).toHaveText(MODAL_WINDOW_EMPTY_CART_TEXT);

	});

})