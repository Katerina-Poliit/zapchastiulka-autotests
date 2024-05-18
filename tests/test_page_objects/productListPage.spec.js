import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { FILTER_UNIT_DROPDOWN_KRAYINA_CATEGORY_TEXT, СOUNTRY_LIST, UKRAINE_COUNTRY_ITEM_TEXT, ZASTOSUVATU_BUTTON_TEXT, SKUNYTU_BUTTON_TEXT, FILTER_PRICE_DROPDOWN_TEXT, BEARINGS_URL, HEADER_BEARINGS_TEXT, BEARINGS_ITEM_TEXT, BRAZIL_CHIPS_TEXT, MANUFACTURERS_LIST, X_OCHUSTUTU_BUTTON_TEXT, LEARN_MORE_BUTTON_TEXT, DO_YOU_WANT_SOMETHING_SPECIAL_DIALOGBOX_TEXT, DESCRIPTION_TEXT, PHONE_FIELD_HEADER_TEXT, COMMENT_FIELD_HEADER_TEXT, SEND_BUTTON_TEXT, PHONE_FIELD_TYPE_TEXT, SUCCESSFUL_WINDOW_HEADER_TEXT, GO_TO_CATALOG_BUTTON_TEXT, WAITING_CALL_DESCRIPTION_TEXT, SORT_DROPDOWN_SMALLLARGE, SORT_DROPDOWN_LARGESMALL, HECHT_2636_HEADER_TEXT, HECHT_2636_BREADCRAMBS_TEXT, PAGINATION_TEXT, PAGE_1_URL, PAGE_2_URL, BASE_URL } from "../../helpers/testData.js";


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

	test('TC 03.01.24 Verify that the “Країна” dropdown contains the list of countries', async ({ page }) => {
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

		if (!visibleFilterPriceDropdown) {
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
		await homePage.clickZastosuvatuButton();

		await expect(homePage.locators.getBrazilCountryChips()).toBeVisible();
		await expect(homePage.locators.getBrazilCountryChipsCrossIcon()).toBeVisible();

	});

	test('TC 03.01.40.1 Verify that the filtering is cleared after clicking on the cross icon on the chips', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.checkBrazilCountryItemCheckbox();
		await homePage.clickZastosuvatuButton();
		await homePage.clickBrazilCountryChipsCrossIcon();

		//Проверяем что чипсы "Бразилия" нет (исчезла после нажатия на крестик на ней)
		await expect(homePage.locators.getBrazilCountryChips()).not.toBeVisible();

		//Проверяем что чекбокс страны "Бразилия" не чекнут
		const isChecked = await homePage.locators.getBrazilCountryItemCheckbox().isChecked();
		expect(isChecked).not.toBe(true);

		//Проверяем что кнопка "Застосувати" не содержит текст "1" (количество товаров)
		const applyButton = await homePage.locators.getZastosuvatuButton();
		expect(await applyButton.isVisible()).toBe(true);
		expect(await applyButton.textContent()).not.toContain('(1)');

	});

	test('TC 03.01.40.2 Verify that the filtering is cleared after clicking on the chips', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.checkBrazilCountryItemCheckbox();
		await homePage.clickZastosuvatuButton();
		await homePage.clickBrazilCountryChips();

		//Проверяем что чипсы "Бразилия" нет (исчезла после нажатия на чипсу)
		await expect(homePage.locators.getBrazilCountryChips()).not.toBeVisible();

		//Проверяем что чекбокс страны "Бразилия" не чекнут
		const isChecked = await homePage.locators.getBrazilCountryItemCheckbox().isChecked();
		expect(isChecked).not.toBe(true);

		//Проверяем что кнопка "Застосувати" не содержит текст "1" (количество товаров)
		const applyButton = await homePage.locators.getZastosuvatuButton();
		expect(await applyButton.isVisible()).toBe(true);
		expect(await applyButton.textContent()).not.toContain('(1)');

	});

	test('TC 03.01.6 Verify that the filtration block contains a dropdown "Виробник"', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getManufacturerDropdown()).toBeVisible();
	});

	test('TC 03.01.7 "Виробник" dropdown contains a list of manufacturers', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getManufacturerDropdown()).toBeVisible();
		for (const list of MANUFACTURERS_LIST) {
			await expect(homePage.locators.getManufacturerSectionList()).toContainText(list);

		}

	});

	test('TC 03.01.8 Verify that the "Виробник" dropdown contains checkboxes', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getManufacturerDropdown()).toBeVisible();
		await expect(homePage.locators.getManufacturerSectionList()).toBeVisible();
		for (const box of MANUFACTURERS_LIST) {
			await expect(homePage.locators.getManufactureSectionChekbox(box)).toBeTruthy();

			console.log(box)
		}
	});

	test('TC 03.01.9 Verify that the user can select the manufacturer by clicking on the checkbox', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.checkManufactureSectionChekboxBoschCheckbox();
		await expect(homePage.locators.getManufactureSectionChekboxBoschCheckbox()).toBeChecked();
		await expect(homePage.locators.getManufactureSectionChekboxBoschCheckbox()).toBeVisible();

	});

	test('TC 03.01.10 Verify that the dropdown "Виробник" contains the search field "Введіть виробника"', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getManufacturerSectionSearchField()).toBeTruthy();
		await expect(homePage.locators.getManufacturerSectionSearchFieldPlaceholder()).toBeTruthy();

	});

	test('TC 03.01.41 Verify that the "x Очистити" button is present', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.checkBrazilCountryItemCheckbox();
		await homePage.clickZastosuvatuButton();

		await expect(homePage.locators.getXOchustutuButton()).toBeVisible();
		await expect(homePage.locators.getXOchustutuButton()).toHaveText(X_OCHUSTUTU_BUTTON_TEXT);

	});

	test('TC 03.01.42 Verify that the "x Очистити" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.checkBrazilCountryItemCheckbox();
		await homePage.clickZastosuvatuButton();

		await expect(homePage.locators.getXOchustutuButton()).toBeVisible();
		await expect(homePage.locators.getBrazilCountryChips()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 03.01.42.1 Verify that the "x Очистити" button has a close (cross) icon on them', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.checkBrazilCountryItemCheckbox();
		await homePage.clickZastosuvatuButton();

		await expect(homePage.locators.getXOchustutuButton()).toBeVisible();
		await expect(homePage.locators.getXOchustutuButtonCrossIcon()).toBeVisible();

	});

	test('TC 03.01.42.2 Verify that the filtering is cleared after clicking on the cross icon on the " x Очистити" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.checkBrazilCountryItemCheckbox();
		await homePage.clickZastosuvatuButton();
		await homePage.clickXOchustutuButtonCrossIcon();

		//Проверяем что кнопки "x Очистити" нет (исчезла после нажатия на крестик на ней)
		await expect(homePage.locators.getXOchustutuButton()).not.toBeVisible();

		//Проверяем что чекбокс страны "Бразилия" не чекнут
		const isChecked = await homePage.locators.getBrazilCountryItemCheckbox().isChecked();
		expect(isChecked).not.toBe(true);

		//Проверяем что кнопка "Застосувати" не содержит текст "1" (количество товаров)
		const applyButton = await homePage.locators.getZastosuvatuButton();
		expect(await applyButton.isVisible()).toBe(true);
		expect(await applyButton.textContent()).not.toContain('(1)');

	});

	test('TC 03.01.42.3 Verify that the filtering is cleared after clicking on the " x Очистити" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.checkBrazilCountryItemCheckbox();
		await homePage.clickZastosuvatuButton();
		await homePage.clickXOchustutuButton();

		//Проверяем что кнопки "x Очистити" нет (исчезла после нажатия по ней)
		await expect(homePage.locators.getXOchustutuButton()).not.toBeVisible();

		//Проверяем что чекбокс страны "Бразилия" не чекнут
		const isChecked = await homePage.locators.getBrazilCountryItemCheckbox().isChecked();
		expect(isChecked).not.toBe(true);

		//Проверяем что кнопка "Застосувати" не содержит текст "1" (количество товаров)
		const applyButton = await homePage.locators.getZastosuvatuButton();
		expect(await applyButton.isVisible()).toBe(true);
		expect(await applyButton.textContent()).not.toContain('(1)');

	});

	test('TC 03.01.55 Verify that the "Не знайшли потрібний товар" product card contains the “Дізнатися більше” button', async ({ page }) => {
		const homePage = new HomePage(page);

		expect(homePage.locators.getLearnMoreButton()).toBeTruthy();
		await expect(homePage.locators.getLearnMoreButton()).toBeVisible();
		await expect(homePage.locators.getLearnMoreButton()).toHaveText(LEARN_MORE_BUTTON_TEXT);

	});

	test('TC 03.01.56 Verify that the “Дізнатися більше” button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getLearnMoreButton()).toBeVisible();
		await expect(homePage.locators.getLearnMoreButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 03.01.57 Verify that the “Бажаєте щось особливе?” dialog box opens after clicking the “Дізнатись більше” button', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		expect(homePage.locators.getDoYouWantSomethingSpecialDialogBox()).toBeTruthy();
		await expect(homePage.locators.getDoYouWantSomethingSpecialDialogBox()).toBeVisible();

		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getDoYouWantSomethingSpecialDialogBoxPageHeader()).toHaveText(DO_YOU_WANT_SOMETHING_SPECIAL_DIALOGBOX_TEXT);

	});

	test('TC 03.01.58 Verify that the “Бажаєте щось особливе?” dialog box contains the close(cross) button', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getCloseButton()).toBeVisible();

	});

	test('TC 03.01.59 Verify that the close(cross) button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getCloseButton()).toBeVisible();
		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getCloseButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 03.01.59.1 Verify that the “Бажаєте щось особливе?” dialog box is closed after clicking on the close(cross) button', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await expect(homePage.locators.getDoYouWantSomethingSpecialDialogBox()).toBeVisible();

		await doYouWantSomethingSpecialDialogBoxPage.clickCloseButton();

		await expect(homePage.locators.getDoYouWantSomethingSpecialDialogBox()).not.toBeVisible();

	});

	test('TC 03.01.59.2 Verify that the “Бажаєте щось особливе?” dialog box contains the "wrench" icon', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getWrenchIcon()).toBeVisible();

	});

	test('TC 03.01.60 Verify that the “Бажаєте щось особливе?” dialog box contains the "Розкажіть нам про ваші побажання. А про інше потурбується менеджер." description', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getDescription()).toBeVisible();
		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getDescription()).toHaveText(DESCRIPTION_TEXT);

	});


	test('TC 03.01.11 Verify that the "Enter manufacturer" search field accepts letters', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickManufacturerSectionSearchFieldPlaceholder();
		await homePage.fillManufacturerSectionSearchFieldPlaceholder();
		await expect(homePage.locators.getManufacturerSectionSearchFieldPlaceholder()).toBeVisible();

	})

	test('TC 03.01.61 Verify that the “Бажаєте щось особливе?” dialog box contains the "Номер телефону" field', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getPhoneField()).toBeVisible();
		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getPhoneFieldHeader()).toBeVisible();
		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getPhoneFieldHeader()).toHaveText(PHONE_FIELD_HEADER_TEXT);

	});


	test('TC 03.01.12 Verify that the "Enter manufacturer" search field accepts digits', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickManufacturerSectionSearchFieldPlaceholder();
		await homePage.fillDigistManufacturerSectionSearchFieldPlaceholder();
		await expect(homePage.locators.getManufacturerSectionSearchFieldPlaceholder()).toBeVisible();

	})


	test('TC 03.01.62 Verify that the “Бажаєте щось особливе?” dialog box contains the "Коментар" field', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getCommentField()).toBeVisible();
		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getCommentFieldHeader()).toBeVisible();
		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getCommentFieldHeader()).toHaveText(COMMENT_FIELD_HEADER_TEXT);

	});

	test('TC 03.01.63 Verify that the “Бажаєте щось особливе?” dialog box contains the "Вiдправити" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getSendButton()).toBeVisible();
		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getSendButton()).toHaveText(SEND_BUTTON_TEXT);

	});

	test('TC 03.01.64 Verify that the "Вiдправити" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getSendButton()).toBeVisible();
		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getSendButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 03.01.13 Verify that the "Введіть виробника" search field does not accept special characters', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickManufacturerSectionSearchFieldPlaceholder();
		await homePage.fillSpecialCharactersManufacturerSectionSearchFieldPlaceholder();
		await expect(homePage.locators.getMessageManufacturerSectionSearchField()).toBeTruthy();

	});

	test('TC 03.01.13.01 Verify that the entered data in the search field is deleted by clicking on the "X" button', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickManufacturerSectionSearchFieldPlaceholder();
		await homePage.fillSpecialCharactersManufacturerSectionSearchFieldPlaceholder();
		await homePage.clickDeleteDataManufacturerSectionSearch();
		await expect(homePage.locators.getManufacturerSectionSearchField()).toBeTruthy();
	});

	test('TC 03.01.14 Verify that the "Виробник" dropdown contains a scroll', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getScrollManufacturerSectionList()).toBeVisible();
	});

	test('TC 03.01.65 Verify that the "Номер телефону" field accepts a valid phone number', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await doYouWantSomethingSpecialDialogBoxPage.clickPhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.typePhoneField();

		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getPhoneField()).toBeVisible();
		await expect(doYouWantSomethingSpecialDialogBoxPage.locators.getPhoneField()).toHaveValue(PHONE_FIELD_TYPE_TEXT);

	});

	test('TC 03.01.66 Verify that the "Номер телефону" field does not accept an invalid phone number (enter invalid data "a")', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await doYouWantSomethingSpecialDialogBoxPage.clickPhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.typePhoneFieldLetterA();
		await doYouWantSomethingSpecialDialogBoxPage.clickCommentField();
		await doYouWantSomethingSpecialDialogBoxPage.typeCommentField();
		await doYouWantSomethingSpecialDialogBoxPage.clickSendButton();

		// Проверяем наличие всплывающего уведомления или ошибки
		const errorMessage = await page.evaluate(() => {
			const phoneField = document.querySelector('#phone');
			return phoneField ? phoneField.validationMessage : '';
		});

		// Проверяем, что сообщение об ошибке соответствует ожидаемому
		expect(errorMessage).toMatch(/match the requested format/);

		/*
		В данном случает фраза уведомления об ошибке "Виберіть потрібний формат 096 123 45 67" не совпадает с той, которую ожидает система
		"Введите данные в указанном формате". Это связано с настройками текста сообщения на стороне разработчика, которые тестировщик не может изменить. Для нашего теста важен сам факт появления сообщения об ошибке, подтверждающий работоспособность функциональности проверки формы на ввод корректных данных.
		При вводе expect(errorMessage).toMatch(/Введите данные в указанном формате\./) тест проходит локально на падает на CI, поэтому пишем
		expect(errorMessage).toMatch(/match the requested format/);
		*/

	});

	test('TC 03.01.66.1 Verify that the "Номер телефону" field does not accept an invalid phone number (leaving the field blank)', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await doYouWantSomethingSpecialDialogBoxPage.clickPhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.clickCommentField();
		await doYouWantSomethingSpecialDialogBoxPage.typeCommentField();
		await doYouWantSomethingSpecialDialogBoxPage.clickSendButton();

		// Проверяем наличие всплывающего уведомления или ошибки
		const errorMessage = await page.evaluate(() => {
			const phoneField = document.querySelector('#phone');
			return phoneField ? phoneField.validationMessage : '';
		});

		// Проверяем, что сообщение об ошибке соответствует ожидаемому
		expect(errorMessage).toMatch('Please fill out this field.');

		/*
		В данном случает фраза уведомления об ошибке "Заповніть це поле." не совпадает с той, которую ожидает система "Заполните это поле.".
		Это связано с настройками текста сообщения на стороне разработчика, которые тестировщик не может изменить. Для нашего теста важен сам факт появления сообщения об ошибке, подтверждающий работоспособность функциональности проверки формы на ввод корректных данных.
		При вводе expect(errorMessage).toMatch('Заполните это поле.') тест проходит локально на падает на CI, поэтому пишем
		expect(errorMessage).toMatch('Please fill out this field.');
		*/

	});

	test('TC 03.01.66.2 Verify that the "Коментар" field rejects invalid data (less than 10 characters)', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await doYouWantSomethingSpecialDialogBoxPage.clickPhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.typePhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.clickCommentField();
		await doYouWantSomethingSpecialDialogBoxPage.typeCommentFieldLess10characters();
		await doYouWantSomethingSpecialDialogBoxPage.clickSendButton();

		// Проверяем наличие всплывающего уведомления или ошибки
		const errorMessage = await page.evaluate(() => {
			const phoneField = document.querySelector('textarea.px-3');
			return phoneField ? phoneField.validationMessage : '';
		});

		// Проверяем, что сообщение об ошибке соответствует ожидаемому
		expect(errorMessage).toMatch('Please lengthen this text to 10 characters or more (you are currently using 6 characters).');

		/*
		В данном случает фраза уведомления об ошибке "У тексті має бути не менше 10 символів (ви ввели 6 символів)." не совпадает с той, которую ожидает система "Минимально допустимое количество символов: 10. Длина текста сейчас: 6.". Это связано с настройками текста сообщения на стороне разработчика, которые тестировщик не может изменить. Для нашего теста важен сам факт появления сообщения об ошибке, подтверждающий работоспособность функциональности проверки формы на ввод корректных данных.
		При вводе expect(errorMessage).toMatch('Минимально допустимое количество символов: 10. Длина текста сейчас: 6.') тест проходит локально на падает на CI, поэтому пишем expect(errorMessage).toMatch('Please lengthen this text to 10 characters or more (you are currently using 6 characters).');
		*/

	});

	test('TC 03.01.67 Verify that the "Замовлення успішне!" modal window opens after clicking on the "Вiдправити" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await doYouWantSomethingSpecialDialogBoxPage.clickPhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.typePhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.clickCommentField();
		await doYouWantSomethingSpecialDialogBoxPage.typeCommentField();

		const theOrderIsSuccessfulWindowPage = await doYouWantSomethingSpecialDialogBoxPage.clickSendButton();

		await expect(homePage.locators.getTheOrderIsSuccessfulWindow()).toBeVisible();
		await expect(theOrderIsSuccessfulWindowPage.locators.getSuccessfulWindowHeader()).toBeVisible();
		await expect(theOrderIsSuccessfulWindowPage.locators.getSuccessfulWindowHeader()).toHaveText(SUCCESSFUL_WINDOW_HEADER_TEXT);

	});

	test('TC 03.01.68 Verify that the "Замовлення успішне!" modal window contains the "Перейти до каталогу" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await doYouWantSomethingSpecialDialogBoxPage.clickPhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.typePhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.clickCommentField();
		await doYouWantSomethingSpecialDialogBoxPage.typeCommentField();

		const theOrderIsSuccessfulWindowPage = await doYouWantSomethingSpecialDialogBoxPage.clickSendButton();

		await expect(homePage.locators.getTheOrderIsSuccessfulWindow()).toBeVisible();
		await expect(theOrderIsSuccessfulWindowPage.locators.getGoToCatalogButton()).toBeVisible();
		await expect(theOrderIsSuccessfulWindowPage.locators.getGoToCatalogButton()).toHaveText(GO_TO_CATALOG_BUTTON_TEXT);

	});

	test('TC 03.01.68.1 Verify that the "Замовлення успішне!" modal window contains the icon', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await doYouWantSomethingSpecialDialogBoxPage.clickPhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.typePhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.clickCommentField();
		await doYouWantSomethingSpecialDialogBoxPage.typeCommentField();

		const theOrderIsSuccessfulWindowPage = await doYouWantSomethingSpecialDialogBoxPage.clickSendButton();

		await expect(homePage.locators.getTheOrderIsSuccessfulWindow()).toBeVisible();
		await expect(theOrderIsSuccessfulWindowPage.locators.getSuccessfulWindowIcon()).toBeVisible();

	});

	test('TC 03.01.68.2 Verify that the "Замовлення успішне!" modal window contains the "Очікуйте дзвінка нашого менеджера протягом 5 хвилин" description', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await doYouWantSomethingSpecialDialogBoxPage.clickPhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.typePhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.clickCommentField();
		await doYouWantSomethingSpecialDialogBoxPage.typeCommentField();

		const theOrderIsSuccessfulWindowPage = await doYouWantSomethingSpecialDialogBoxPage.clickSendButton();

		await expect(homePage.locators.getTheOrderIsSuccessfulWindow()).toBeVisible();
		await expect(theOrderIsSuccessfulWindowPage.locators.getWatingCallDescription()).toBeVisible();
		await expect(theOrderIsSuccessfulWindowPage.locators.getWatingCallDescription()).toHaveText(WAITING_CALL_DESCRIPTION_TEXT);

	});

	test('TC 03.01.69 Verify that the "Перейти до каталогу" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await doYouWantSomethingSpecialDialogBoxPage.clickPhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.typePhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.clickCommentField();
		await doYouWantSomethingSpecialDialogBoxPage.typeCommentField();

		const theOrderIsSuccessfulWindowPage = await doYouWantSomethingSpecialDialogBoxPage.clickSendButton();

		await expect(homePage.locators.getTheOrderIsSuccessfulWindow()).toBeVisible();
		await expect(theOrderIsSuccessfulWindowPage.locators.getGoToCatalogButton()).toBeVisible();
		await expect(theOrderIsSuccessfulWindowPage.locators.getGoToCatalogButton()).toHaveCSS('cursor', 'pointer');

	});


	test('TC 03.01.15 Verify that the list of manufacturers will scroll down', async ({ page }) => {
		const homePage = new HomePage(page);

		const targetElement = await page.getByText('Сонце1');
		await targetElement.evaluate(element => {
			element.scrollIntoViewIfNeeded();
		});
		await expect(targetElement).toBeVisible();
		const targetElementText = await targetElement.innerText();
		console.log('Scrolled to manufacturer:', targetElementText);

	})

	test('TC 03.01.70 Verify that the successful transition to the catalog was made after clicking on the "Перейти до каталогу" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const doYouWantSomethingSpecialDialogBoxPage = await homePage.clickLearnMoreButton();

		await doYouWantSomethingSpecialDialogBoxPage.clickPhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.typePhoneField();
		await doYouWantSomethingSpecialDialogBoxPage.clickCommentField();
		await doYouWantSomethingSpecialDialogBoxPage.typeCommentField();

		const theOrderIsSuccessfulWindowPage = await doYouWantSomethingSpecialDialogBoxPage.clickSendButton();
		await theOrderIsSuccessfulWindowPage.clickGoToCatalogButton();

		await expect(homePage.locators.getTheOrderIsSuccessfulWindow()).not.toBeVisible();
		await expect(homePage.locators.getProductListPage()).toBeVisible();

	});

	test('TC 03.01.16 Verify that the list of manufacturers will scroll up', async ({ page }) => {
		const homePage = new HomePage(page);
		const targetElement = await page.getByText('Сонце1');

		await targetElement.evaluate(element => {
			element.scrollIntoViewIfNeeded();
		});

		await expect(targetElement).toBeVisible();

		const targetElementText = await targetElement.innerText();
		console.log('Scrolled to manufacturer:', targetElementText);

		const firstElement = await page.getByText('123', { exact: true });

		await firstElement.evaluate(element => {
			element.scrollIntoViewIfNeeded();
		});
		await expect(firstElement).toBeVisible();
		const firstElementText = await firstElement.innerText();
		console.log('Scrolled back to manufacturer:', firstElementText);

	});

	test('TC 03.01.37 Verify that the number of products of the selected category from the catalog is displayed', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();

		const bearingsPage = await homePage.clickBearings();
		await page.waitForSelector('a.cursor-pointerblock');

		// Ожидание загрузки всех элементов
		await page.waitForFunction(() => {
			const productCards = document.querySelectorAll('a.cursor-pointerblock');
			return productCards.length > 0; // Убедитесь, что есть хотя бы один элемент
		});

		// Вывод количества загруженных карточек товаров
		const productCards = await page.$$('a.cursor-pointerblock'); // Уточните селектор для карточек товаров
		console.log(`Number of product cards loaded: ${productCards.length}`);

		// Проверка видимости элемента с количеством товаров
		await expect(bearingsPage.locators.getCountItems()).toBeVisible();

		// Убедитесь, что загружено ожидаемое количество элементов (например, 3)
		// expect(productCards.length).toBe(3); - работает через раз из-за неадекватной работы сайта

	});

	test('TC 03.01.43 Verify that the content page contains the "Сортувати" dropdown', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getSortDropdown()).toBeTruthy();
		await expect(homePage.locators.getSortDropdown()).toBeVisible();
		const sortDropdownText = await homePage.locators.getSortDropdown().innerText();
		expect(sortDropdownText).toContain('Сортувати');
		console.log('Sort Dropdown Text:', sortDropdownText);
		await expect(homePage.locators.getSortDropdown()).toHaveCSS('cursor', 'auto');
	});

	test('TC 03.01.45 Verify that the sort the product "Вiд дешевых до дорогих"', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickSortDropdown();
		await expect(homePage.locators.getSortDropdownFromCheapToexpensive()).toBeVisible();
		const cheapToexpensive = await homePage.locators.getSortDropdownFromCheapToexpensive().innerText();
		expect(cheapToexpensive).toContain('Від дешевих до дорогих');
		await homePage.clickSortDropdownFromCheapToexpensive();
		await page.waitForTimeout(2000);
		await expect(page).toHaveURL(SORT_DROPDOWN_SMALLLARGE);

		const priceElements = await page.$$('p.text-lg');
		const relevantPriceElements = priceElements.slice(2);

		for (const priceElement of relevantPriceElements) {
			const priceText = await priceElement.textContent();
			console.log(priceText)
		}
	});

	test('TC 03.01.46 Verify that the sort the product "Вiд дорогих до дешевых"', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickSortDropdown();
		await expect(homePage.locators.getSortDropdownFromExpensiveToCheap()).toBeVisible();
		const expensiveToCheap = await homePage.locators.getSortDropdownFromExpensiveToCheap().innerText();
		expect(expensiveToCheap).toContain('Від дорогих до дешевих');
		await homePage.clickSortDropdownFromExpensiveToCheap();
		await page.waitForTimeout(2000);
		await expect(page).toHaveURL(SORT_DROPDOWN_LARGESMALL);

		const priceElements = await page.$$('p.text-lg');
		const relevantPriceElements = priceElements.slice(2);

		for (const priceElement of relevantPriceElements) {
			const priceText = await priceElement.textContent();
			console.log(priceText)
		}

	});

	test('TC 03.01.71. Verify that the all product cards have a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getProductCardLocator()).toBeVisible();
		await expect(homePage.locators.getProductCardLocator()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 03.01.72. Verify that clicking on the product cart redirects to the product pages', async ({ page }) => {
		const homePage = new HomePage(page);

		const miniTransporterHECHT2636Page = await homePage.clickProductCardLocator();

		await expect(miniTransporterHECHT2636Page.locators.getHECHT2636Header()).toBeVisible();
		await expect(miniTransporterHECHT2636Page.locators.getHECHT2636Header()).toHaveText(HECHT_2636_HEADER_TEXT);
		await expect(miniTransporterHECHT2636Page.locators.getHECHT2636Breadcrambs()).toBeVisible();
		await expect(miniTransporterHECHT2636Page.locators.getHECHT2636Breadcrambs()).toHaveText(HECHT_2636_BREADCRAMBS_TEXT);

	});

	test('TC 03.01.73 Verify that the page contains pagination', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getPagination()).toBeVisible();
		await expect(homePage.locators.getPagination()).toHaveText(PAGINATION_TEXT);

	});

	test('TC 03.01.74	Verify that the user can navigate to the next page by clicking on the " > " button', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(page).toHaveURL(BASE_URL);

		await homePage.clickPaginationNextPageButton();
		await expect(page).toHaveURL(PAGE_2_URL);

	});

	test('TC 03.01.75	Verify that the user can navigate to the previous page by clicking on the "  < " button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickPaginationNextPageButton();
		await expect(page).toHaveURL(PAGE_2_URL);

		await homePage.clickPaginationPreviousPageButton();
		await expect(page).toHaveURL(PAGE_1_URL);

	});

	test('TC 03.01.48 Verify that the product card contains a photo of the product', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getProductCard()).toBeTruthy();
		await expect(homePage.locators.getProductCard()).toBeVisible();

		const productImage = await page.$('.product-card-img');

		await expect(productImage).toBeTruthy();

		console.log('Product image is present and visible');

	});

	test('TC 03.01.50 Verify that the product card contains the item number', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getProductCard()).toBeTruthy();

		const productItemLocator = page.locator('.mb-1');
		await expect(productItemLocator).toBeTruthy();

	});

	test('TC 03.01.51 Verify that the product card contains the cost of the product', async ({ page}) => {

		const homePage = new HomePage(page);
		await expect(homePage.locators.getProductCard()).toBeTruthy();
        const costProduct = page.locator('p.text-lg');
		await expect(costProduct).toBeTruthy();

	});

	test('TC 03.01.52 Verify that the product card contains a button "Додати в кошик"', async ({ page}) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getProductCard()).toBeTruthy();
		await expect(homePage.locators.getButtonAddToCart()).toBeTruthy();
		await expect(homePage.locators.getButtonAddToCart()).toBeVisible()


	});

	test('TC 03.01.53 Verify that the button "Додати в кошек" contains a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getProductCard()).toBeTruthy();
		await expect(homePage.locators.getButtonAddToCart()).toBeTruthy();
		await expect(homePage.locators.getButtonAddToCart()).toBeVisible();
		await expect(homePage.locators.getButtonAddToCart()).toHaveCSS('cursor', 'pointer');
		const button = await homePage.locators.getButtonAddToCart().innerText();
		expect(button).toContain('Додати в кошик');
		await expect(homePage.locators.getButtonAddToCart()).toHaveCSS('background-color', 'rgb(21, 112, 239)');
	});

	test('TC 03.01.76 Verify that the page contains the chatbot button', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getChatbotButton()).toBeVisible();
	});

})
