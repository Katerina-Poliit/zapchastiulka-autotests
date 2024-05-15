import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { FILTER_UNIT_DROPDOWN_KRAYINA_CATEGORY_TEXT, СOUNTRY_LIST, UKRAINE_COUNTRY_ITEM_TEXT, ZASTOSUVATU_BUTTON_TEXT, SKUNYTU_BUTTON_TEXT, FILTER_PRICE_DROPDOWN_TEXT, BEARINGS_URL, HEADER_BEARINGS_TEXT, BEARINGS_ITEM_TEXT, BRAZIL_CHIPS_TEXT} from "../../helpers/testData.js";


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

	test('TC 03.01.31 Verify that the “Застосувати” button displays the number of selected products by means of filtering', async ({ page }) => {
		const homePage = new HomePage(page);

		// Выбираем (чекаем) чекбокс страны Бразилия
		await homePage.checkBrazilCountryItemCheckbox();

		// Находим элемент, который отображает количество товаров для выбранной страны (находится напротив выбранной страны)
		const productCountElement = await homePage.locators.getBrazilCountryCountItems();

		// Проверяем, что элемент видим и содержит текст с количеством товаров (в данном случае - "1")
		expect(await productCountElement.isVisible()).toBe(true);
		expect(await productCountElement.textContent()).toContain('1');

		// Проверяем, что кнопка "Застосувати" отображает правильное количество выбранных товаров
		const applyButton = await homePage.locators.getZastosuvatuButtonWithItem()
		expect(await applyButton.isVisible()).toBe(true);
		expect(await applyButton.textContent()).toContain('(1)'); // Проверяем, что в тексте кнопки есть "(1)"

	});

	test('TC 03.01.32 Verify that the filter unit contains the “Скинути” button', async ({ page }) => {
		const homePage = new HomePage(page);

		expect(homePage.locators.getSkunytuButton()).toBeTruthy();
		await expect(homePage.locators.getSkunytuButton()).toBeVisible();
		await expect(homePage.locators.getSkunytuButton()).toHaveText(SKUNYTU_BUTTON_TEXT);

	});

	test('TC 03.01.33 Verify that the “Скинути” button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

      //Чтобы выполнить проверку, нужно что-то чекнуть, поскольку по дефолту курсор не поинтер
		await homePage.checkBrazilCountryItemCheckbox();

		await expect(homePage.locators.getSkunytuButton()).toBeVisible();
		expect(homePage.locators.getSkunytuButton()).toBeTruthy();
		await expect(homePage.locators.getSkunytuButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 03.01.1 Verify that the filter container for storing dropdown "Цiна"', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getFilterPrice()).toBeVisible();
		expect(homePage.locators.getFilterPrice()).toBeTruthy();
		expect(homePage.locators.getFilterPrice()).toHaveText(FILTER_PRICE_DROPDOWN_TEXT)
	});

	test('TC 03.01.2 Verify that the dropdown "Цiна" contains the "цена от" field', async ({ page }) => {
		const homePage = new HomePage(page);
		expect(homePage.locators.getFilterPrice()).toBeTruthy();
		await expect(homePage.locators.getFilterPriceMin()).toBeTruthy();


		const filterPriceMinText = await homePage.locators.getFilterPriceMin().innerText('4');
        expect(filterPriceMinText).not.toBeNull();
	});

	test('TC 03.01.3 Verify that the dropdown "Цiна" contains the "цена до" field', async ({ page }) => {
		const homePage = new HomePage(page);
		expect(homePage.locators.getFilterPrice()).toBeTruthy();
		await expect(homePage.locators.getFilterPriceMax()).toBeTruthy();
		const filterPriceMaxText = await homePage.locators.getFilterPriceMax().innerText('729 000');
      expect(filterPriceMaxText).not.toBeNull();

	});

	test('TC 03.01.4 Verify that the price field accepts numbers', async ({ page }) => {
		const homePage = new HomePage(page);
		expect(homePage.locators.getFilterPrice()).toBeTruthy();
		await homePage.fillFilterPriceMinField();
      await expect(homePage.locators.getFilterPrice()).toBeVisible();

	});

	test('TC 03.01.79 Verify that the dropdown "Цiна" can be minimized  and expanded', async ({ page }) => {
		const homePage = new HomePage(page);
		expect(homePage.locators.getFilterPrice()).toBeTruthy();
		const visibleFilterPriceDropdown = await homePage.locators.getFilterPriceDropdown().isVisible();

		if(!visibleFilterPriceDropdown) {
			await homePage.clickFilterPriceDropdown();
		}

	});

	test('TC 03.01.34 Verify that the filtering is cleared after clicking on the “Скинути” button', async ({ page }) => {
		const homePage = new HomePage(page);
  
		await homePage.checkBrazilCountryItemCheckbox();
  
		let isChecked = await homePage.locators.getBrazilCountryItemCheckbox().isChecked();
		expect(isChecked).toBe(true);
  
		await homePage.clickSkunytuButton();
		isChecked = await homePage.locators.getBrazilCountryItemCheckbox().isChecked(); // Обновляем значение isChecked
		expect(isChecked).not.toBe(true);
  
  });

  test('TC 03.01.35 Verify that the product list page contains a block of content', async ({ page }) => {
		const homePage = new HomePage(page);

		expect(homePage.locators.getProductListPage()).toBeTruthy();
		await expect(homePage.locators.getProductListPage()).toBeVisible();

});

test('TC 03.01.36 Verify that the user-selected selection from the catalog is displayed', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();
		const bearingsPage = await homePage.clickBearings();

		await expect(page).toHaveURL(BEARINGS_URL);

		await expect(bearingsPage.locators.getBearingsHeader()).toBeVisible();
		expect(bearingsPage.locators.getBearingsHeader()).toBeTruthy();
		await expect(bearingsPage.locators.getBearingsHeader()).toContainText(HEADER_BEARINGS_TEXT);

    	// Получаем список всех карточек товаров
    	const bearingsItems = await bearingsPage.locators.getBearingsItems();

    	// Проверяем каждую карточку на наличие слова "Подшипник" в тексте
    	for (const item of bearingsItems) {
        const itemName = await item.innerText();
        expect(itemName).toContain(BEARINGS_ITEM_TEXT);
    }

});

test('TC 03.01.38 Verify that the chips appear after filtering according to customer logic', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.checkBrazilCountryItemCheckbox();
		await homePage.clickZastosuvatuButton()

		await expect(homePage.locators.getBrazilCountryChips()).toBeVisible();
		await expect(homePage.locators.getBrazilCountryChips()).toHaveText(BRAZIL_CHIPS_TEXT);

});

test('TC 03.01.39 Verify that the chips has a pointer cursor', async ({ page }) => {
	const homePage = new HomePage(page);

	await homePage.checkBrazilCountryItemCheckbox();
	await homePage.clickZastosuvatuButton()

	await expect(homePage.locators.getBrazilCountryChips()).toBeVisible();
	await expect(homePage.locators.getBrazilCountryChips()).toHaveText(BRAZIL_CHIPS_TEXT);
	await expect(homePage.locators.getBrazilCountryChips()).toHaveCSS('cursor', 'pointer');

});

test('TC 03.01.40 Verify that the chips have a close (cross) icon on them', async ({ page }) => {
	const homePage = new HomePage(page);

	await homePage.checkBrazilCountryItemCheckbox();
	await homePage.clickZastosuvatuButton()

	await expect(homePage.locators.getBrazilCountryChips()).toBeVisible();
	await expect(homePage.locators.getBrazilCountryChipsCrossIcon()).toBeVisible();

});

})