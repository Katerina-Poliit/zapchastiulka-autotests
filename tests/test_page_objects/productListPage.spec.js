import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { FILTER_UNIT_DROPDOWN_KRAYINA_CATEGORY_TEXT } from "../../helpers/testData.js";


test.describe('productListPage.spec.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	test('TC 03.01.17 Verify that the filter unit contains the “Країна” dropdown ', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getFilterUnitDropdownKrayinaCategory()).toBeVisible();
		await expect(homePage.locators.getFilterUnitDropdownKrayinaCategory()).toBeVisible();
		await expect(homePage.locators.getFilterUnitDropdownKrayinaCategory()).toHaveText(FILTER_UNIT_DROPDOWN_KRAYINA_CATEGORY_TEXT);

    // Нажимаем на кнопку дропдаун меню только в том случае, если меню еще не открыто
    const isDropdownMenuVisible = await homePage.locators.getFilterUnitDropdownKrayinaCategorySection().isVisible();

    if (!isDropdownMenuVisible) {
        await homePage.clickFilterUnitDropdownKrayinaCategoryButton();
    }
  
		// Проверяем, что выпадающее меню видно
		await expect(homePage.locators.getFilterUnitDropdownKrayinaCategorySection()).toBeVisible();

	});

	test('TC 03.01.18 Verify that the “Країна” dropdown contains the "Введіть країну" search field', async ({ page }) => {
		const homePage = new HomePage(page);

		const isDropdownMenuVisible = await homePage.locators.getFilterUnitDropdownKrayinaCategorySection().isVisible();

		if (!isDropdownMenuVisible) {
			 await homePage.clickFilterUnitDropdownKrayinaCategoryButton();
		}

		expect(homePage.locators.getFilterUnitDropdownKrayinaCategorySearchField()).toBeTruthy();
		await expect(homePage.locators.getFilterUnitDropdownKrayinaCategorySearchField()).toBeVisible();

	});

})