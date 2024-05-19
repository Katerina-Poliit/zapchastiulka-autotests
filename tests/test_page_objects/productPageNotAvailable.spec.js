import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import {BUTTON_REPORT_AVAILABILITY  } from "../../helpers/testDataProductPage.js";
import MiniTransporterHECHT2636Page from "../../page_objects/miniTransporterHECHT2636.js";


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

	test('TC 04.01.36 Verify  that the product is in the "вiдсутнiй"status. the "Повідомити про наявність" button is present', async ({ page}) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getCardMiniTrasporterHECHT2636()).toBeVisible();
		await expect(homePage.locators.getCardMiniTrasporterHECHT2636Button()).toBeVisible();
		await expect(homePage.locators.getCardMiniTrasporterHECHT2636Button()).toHaveCSS('border-color', 'rgb(21, 112, 239)');
		await expect(homePage.locators.getCardMiniTrasporterHECHT2636Button()).toHaveText(BUTTON_REPORT_AVAILABILITY);

	})


})