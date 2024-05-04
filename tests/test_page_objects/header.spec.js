import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { BASE_URL } from "../../helpers/testData.js";

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

});