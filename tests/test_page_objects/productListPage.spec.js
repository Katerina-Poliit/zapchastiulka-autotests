import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { FILTER_UNIT_DROPDOWN_KRAYINA_CATEGORY_TEXT, СOUNTRY_LIST, UKRAINE_COUNTRY_ITEM_TEXT, ZASTOSUVATU_BUTTON_TEXT } from "../../helpers/testData.js";


test.describe('productListPage.spec.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	test('TC 03.01.17 Verify that the filter unit contains the “Країна” dropdown ', async ({ page }) => {
		const homePage = new HomePage(page);

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

	test('TC 03.01.0 Verify that the contains a filter-containe', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getFilterContaine()).toBeVisible()
	});

	test('TC 03.01.21 Verify that the search field accepts letters', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickKrayinaCategorySearchFieldPlaceholder();
		await homePage.fillKrayinaCategorySearchFieldPlaceholder();

		await expect(homePage.locators.getUkraineCountryItem()).toBeVisible();
		await expect(homePage.locators.getUkraineCountryItem()).toHaveText(UKRAINE_COUNTRY_ITEM_TEXT);

	});

	test('TC 03.01.25 Verify that the “Країна” dropdown contains checkboxes', async ({ page }) => {
		const homePage = new HomePage(page);

		for (const item of СOUNTRY_LIST) {
			await expect(homePage.locators.getCountryItemByCheckbox(item)).toBeVisible();
		 }

	});

	test('TC 03.01.26 Verify that the user can select the country of the manufacturer by clicking on the checkbox', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.checkBrazilCountryItemCheckbox();

		const isChecked = await homePage.locators.getBrazilCountryItemCheckbox().isChecked();
		expect(isChecked).toBe(true);

	});

	test('TC 03.01.27 Verify that the list of countries scrolls down', async ({ page }) => {
		const homePage = new HomePage(page);

	   // Находим локатор блока, внутри у которого списк стран и скроллбар
		const scrollbar = page.locator('#style-scroll').nth(1);

      // Прокручиваем список вниз
      await scrollbar.evaluate((countryDropdown) => {
          countryDropdown.scrollTop = countryDropdown.scrollHeight;
      });

      // Ждем, чтобы список успел прокрутиться и обновиться
      await page.waitForTimeout(1000);

      // Проверяем, что список стран был прокручен вниз
      const isScrolledDown = await scrollbar.evaluate((countryDropdown) => {
          return countryDropdown.scrollTop > 0; // Если значение scrollTop больше 0, значит список был прокручен
      });

      // Проверяем, что список был прокручен вниз успешно
      expect(isScrolledDown).toBe(true);

	});

	test('TC 03.01.28 Verify that the list of countries scrolls up', async ({ page }) => {
		const homePage = new HomePage(page);

	   // Находим локатор блока, внутри у которого списк стран и скроллбар
		const scrollbar = page.locator('#style-scroll').nth(1);

      // Прокручиваем список вниз
      await scrollbar.evaluate((countryDropdown) => {
          countryDropdown.scrollTop = countryDropdown.scrollHeight;
      });

      // Подождем, чтобы список успел прокрутиться и обновиться
      await page.waitForTimeout(1000);

      // Проверяем, что список стран был прокручен вниз
      const isScrolledDown = await scrollbar.evaluate((countryDropdown) => {
          return countryDropdown.scrollTop > 0; // Если значение scrollTop больше 0, значит список был прокручен
      });

      // Проверяем, что список был прокручен вниз успешно
      expect(isScrolledDown).toBe(true);
  
		// Прокручиваем список вверх
		await scrollbar.evaluate((countryDropdown) => {
			 countryDropdown.scrollTop = 0;
		});
  
		// Подождем, чтобы список успел прокрутиться и обновиться
		await page.waitForTimeout(1000);
  
		// Проверяем, что список стран был прокручен вверх
		const isScrolledUp = await scrollbar.evaluate((countryDropdown) => {
			 return countryDropdown.scrollTop === 0; // Если значение scrollTop равно 0, значит список был прокручен вверх
		});
		expect(isScrolledUp).toBe(true);

	});

	test('TC 03.01.29 Verify that the filter unit contains the “Застосувати” button', async ({ page }) => {
		const homePage = new HomePage(page);

		expect(homePage.locators.getZastosuvatuButton()).toBeTruthy();
		await expect(homePage.locators.getZastosuvatuButton()).toBeVisible();
		await expect(homePage.locators.getZastosuvatuButton()).toHaveText(ZASTOSUVATU_BUTTON_TEXT);

	});

	test('TC 03.01.30 Verify that the “Застосувати” button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getZastosuvatuButton()).toBeVisible();
		expect(homePage.locators.getZastosuvatuButton()).toBeTruthy();
		await expect(homePage.locators.getZastosuvatuButton()).toHaveCSS('cursor', 'pointer');

	});

})