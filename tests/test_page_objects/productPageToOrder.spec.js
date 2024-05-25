import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import {MODAL_WINDOW_NAME_AGRISTAR, MAKE_PREORDER_BUTTON,SUCCESSFUL_ORDER } from "../../helpers/testDataProductPage.js";


test.describe('productListPage.spec.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	// test('TC 04.01.1 Verify that the product page contains a block with the product image', async ({ page }) => {
	// 	const homePage = new HomePage(page);

	// 	const mobilSuper3000Page = await homePage.clickMobilSuper3000();

	// 	await expect(mobilSuper3000Page.locators.getProductImageBlock()).toBeVisible()

	// });

	test('TC 04.01.35.04 Verify that the magnifying glass icon contains a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
        const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await page.waitForTimeout(2000);
		await expect(telescopicLoadePage.locators.getMagnifyingGlassIcon()).toHaveCSS('cursor', 'auto');

	});

	test('TC 04.01.35.05  Verify that the modal window opens, the user clicked on the "magnifier"', async ({ page }) => {
		const homePage = new HomePage(page);
        const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await page.waitForTimeout(2000);
		await telescopicLoadePage.clickMagnifyingGlassIcon();
		await expect(telescopicLoadePage.locators.getModalWindowOpenFoto()).toBeAttached();

	});

	test('TC 04.01.35.06 Verify that the modal window contains the product name', async ({ page }) => {
		const homePage = new HomePage(page);
        const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await page.waitForTimeout(2000);
		await telescopicLoadePage.clickMagnifyingGlassIcon();
		await expect(telescopicLoadePage.locators.getNameProductModalWindow()).toBeAttached();
		await expect(telescopicLoadePage.locators.getNameProductModalWindow()).toHaveText(MODAL_WINDOW_NAME_AGRISTAR);

	});
	test('TC 04.01.35.07 Verify that the modal window contains an image of the product', async ({ page }) => {
		const homePage = new HomePage(page);
        const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await page.waitForTimeout(2000);
		await telescopicLoadePage.clickMagnifyingGlassIcon();
		await expect(telescopicLoadePage.locators.getFotoProductModalWindow()).toBeTruthy();

	});

	test('TC 04.01.23 Verify that the product card with the status "пiд замовлення" has a button "Зробити передзамовлення"', async ({ page }) => {
		const homePage = new HomePage(page);
		const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await expect(telescopicLoadePage.locators.getMakePreorderButton()).toBeAttached();
		await expect(telescopicLoadePage.locators.getMakePreorderButton()).toHaveCSS('cursor', 'pointer');
		await expect(telescopicLoadePage.locators.getMakePreorderButton()).toHaveCSS('border-color', 'rgb(21, 112, 239)');
		await expect(telescopicLoadePage.locators.getMakePreorderButton()).toHaveText(MAKE_PREORDER_BUTTON);

	});

	test('TC 04.01.24 Verify that the "Передзамовлення товару" dialog box opens, and the user clicks on the "Зробити передзамовлення"button', async ({ page }) => {
		const homePage = new HomePage(page);
		const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await telescopicLoadePage.clickMakePreorderButton();
		await expect(telescopicLoadePage.locators.getOutOfStockModalWindow()).toBeAttached();

	});

	test('TC 04.01.25 Verify that the "Передзамовлення товару" dialog box contains the "Номер телефону" field', async ({ page }) => {
		const homePage = new HomePage(page);
		const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await telescopicLoadePage.clickMakePreorderButton();
		await expect(telescopicLoadePage.locators.getFhoneNumberField()).toBeVisible();
	});

	test('TC 04.01.26 Verify that the"Номер телефону" field has verification', async ({ page }) => {
		const homePage = new HomePage(page);
		const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await telescopicLoadePage.clickMakePreorderButton();
		await telescopicLoadePage.fillFhoneNumberField();
		await telescopicLoadePage.clickOutOfStockModalWindowButton();
		await page.waitForTimeout(2000);
		const successMessage = await telescopicLoadePage.locators.getOrderSiccessfulModalWindow();
		await page.waitForTimeout(2000);
		expect(successMessage).toBeAttached()

	});

	test('TC 04.01.29 Verify that the pop-up window displays the "X" button', async ({ page }) => {
		const homePage = new HomePage(page);
		const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await telescopicLoadePage.clickMakePreorderButton();
		await expect(telescopicLoadePage.locators.getModalWindowCloseButton()).toBeVisible();
	})



})