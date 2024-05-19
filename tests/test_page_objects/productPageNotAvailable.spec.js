import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { BUTTON_REPORT_AVAILABILITY, MINI_TRANSPORTER_PAGE_URL } from "../../helpers/testDataProductPage.js";
import MiniTransporterHECHT2636Page from "../../page_objects/miniTransporterHECHT2636.js";
import { assert } from "console";


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

	test('TC 04.01.36 Verify  that the product is in the "вiдсутнiй"status. the "Повідомити про наявність" button is present', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getCardMiniTrasporterHECHT2636()).toBeVisible();
		await expect(homePage.locators.getCardMiniTrasporterHECHT2636Button()).toBeVisible();
		await expect(homePage.locators.getCardMiniTrasporterHECHT2636Button()).toHaveCSS('border-color', 'rgb(21, 112, 239)');
		await expect(homePage.locators.getCardMiniTrasporterHECHT2636Button()).toHaveText(BUTTON_REPORT_AVAILABILITY);

	});

	test('TC 04.01.37 Verify  that the "Повідомити про наявність" button contains the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getCardMiniTrasporterHECHT2636Button()).toHaveCSS('cursor', 'pointer');
	});

	test('TC 04.01.59.01 Verify  that the product product page contains a block with an image of the product', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await expect(cartMiniTransporterPage.locators.getHECHT2636ImageBlock()).toBeVisible();
		await expect(page).toHaveURL(MINI_TRANSPORTER_PAGE_URL);
	});

	test('TC 04.01.59.02 Verify  that the mini image of the product under the product image block', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await expect(cartMiniTransporterPage.locators. getHECHT2636ImageBlockMini()).toBeVisible();
	});

	test('TC 04.01.59.03 Verify that the product image block contains a magnification button for the product image, a "magnifier"', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await expect(cartMiniTransporterPage.locators. getHECHT2636ImageBlocmagnifier()).toBeVisible();

	});

	test('TC 04.01.59.04 Verify that the "magnifier " contains a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await expect(cartMiniTransporterPage.locators. getHECHT2636ImageBlocmagnifier()).toHaveCSS('cursor', 'pointer');
	});

	test('TC 04.01.59.05 Verify that the modal window opens, the user clicked on the "magnifier"', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await cartMiniTransporterPage.clickHECHT2636ImageBlocmagnifier();
		await page.waitForTimeout(2000);
		await expect(cartMiniTransporterPage.locators. getHECHT2636ImageBlocmagnifierModalWindow()).toBeVisible();

	})


})