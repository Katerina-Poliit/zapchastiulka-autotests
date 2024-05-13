import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { FILTER_UNIT_DROPDOWN_KRAYINA_CATEGORY_TEXT, СOUNTRY_LIST } from "../../helpers/testData.js";


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

	test('TC 03.01.19 Verify that the "Введіть країну" search field contains the "Magnifying glass" icon', async ({ page }) => {
		const homePage = new HomePage(page);

		const isDropdownMenuVisible = await homePage.locators.getFilterUnitDropdownKrayinaCategorySection().isVisible();

		if (!isDropdownMenuVisible) {
			 await homePage.clickFilterUnitDropdownKrayinaCategoryButton();
		}

		expect(homePage.locators.getKrayinaCategorySearchFieldIcon()).toBeTruthy();

		const iconElement = await homePage.locators.getKrayinaCategorySearchFieldIcon();
		expect(iconElement).not.toBeNull();

	});

	test('TC 03.01.20 Verify that the search field contains the placeholder', async ({ page }) => {
		const homePage = new HomePage(page);

		const isDropdownMenuVisible = await homePage.locators.getFilterUnitDropdownKrayinaCategorySection().isVisible();

		if (!isDropdownMenuVisible) {
			 await homePage.clickFilterUnitDropdownKrayinaCategoryButton();
		}

		expect(homePage.locators.getKrayinaCategorySearchFieldPlaceholder()).toBeTruthy();
		const placeholderElement = await homePage.locators.getKrayinaCategorySearchFieldPlaceholder();
		expect(placeholderElement).not.toBeNull();

	});

	test('TC 03.01.21 Verify that the “Країна” dropdown contains the list of countries', async ({ page }) => {
		const homePage = new HomePage(page);

		for (const item of СOUNTRY_LIST) {
			// Проверяем, что каждая страна видна на странице
			await expect(homePage.locators.getCountryItemByText(item)).toBeVisible();
		 }
			// Проверяем, что дропдаун содержит страны
		for (const item of СOUNTRY_LIST) {
			await expect(homePage.locators.getFilterUnitDropdownKrayinaCategorySection()).toContainText(item);
		}

	});

})