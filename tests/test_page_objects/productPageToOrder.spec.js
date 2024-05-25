import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import {MODAL_WINDOW_NAME_AGRISTAR  } from "../../helpers/testDataProductPage.js";


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


})