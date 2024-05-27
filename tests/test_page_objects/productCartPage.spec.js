import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { EMPTY_CART_HEADER_TEXT } from "../../helpers/testDataProductCartPage.js";


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

})