import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { PRODUCT_NAME_TEXT, PRODUCT_INFORMATION_TEXT, PRODUCT_DESCRIPTION_HEADER_TEXT, PRODUCT_DESCRIPTION_TEXT, PRODUCT_ARTICLE_TEXT, PRODUCT_PRICE_TEXT, PRODUCT_STATUS_TEXT, ADD_TO_CART_BUTTON_TEXT, BUY_TO_ONE_CLICK_BUTTON_TEXT, PHONE_FIELD_HEADER_TEXT, PHONE_FIELD_PLACEHOLDER_TEXT, MODAL_WINDOW_QUICK_ORDERING_HEADER_TEXT, MODAL_WINDOW_QUICK_ORDERING_DESCRIPTION_TEXT, MODAL_WINDOW_QUICK_ORDERING_SEND_BUTTON_TEXT, MODAL_WINDOW_SUCCESSFUL_ORDER_HEADER_TEXT, MODAL_WINDOW_SUCCESSFUL_ORDER_DESCRIPTION_TEXT, MODAL_WINDOW_SUCCESSFUL_ORDER_GO_TO_CATALOG_BUTTON_TEXT, PRODUCT_MAIN_CHARACTERISTICS_TEXT, WEIGHT_TEXT, WEIGHT_VALUE_TEXT, CODE_TEXT, CODE_VALUE_TEXT, MANUFACTURER_TEXT, MANUFACTURER_NAME_TEXT, COUNTRY_TEXT, COUNTRY_NAME_TEXT, MOST_POPULAR_HEADER_TEXT, MOBIL_SUPER_3000_URL, HYDRAULIC_URL, OILS_AND_AUTOMOTIVE_CHEMICALS_URL, BASE_URL} from "../../helpers/testDataProductPage.js";


test.describe('productListPage.spec.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	test('TC 04.01.1 Verify that the product page contains a block with the product image', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getProductImageBlock()).toBeVisible();

	});

	test('TC 04.01.2 Verify that the product image block contains an image of the product', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getProductImageBig()).toBeVisible();

	});

	test('TC 04.01.13 Verify that the product image block contains a smaller image of the product', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getProductImageSmall()).toBeVisible();

	});

	test('TC 04.01.3 Verify that the product image block contains a button to enlarge the product image (a "magnifying glass with +" icon)', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getMagnifyingGlassIcon()).toBeVisible();

	});

	test('TC 04.01.4 Verify that the product image (a "magnifying glass with +" icon) has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getMagnifyingGlassIcon()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getMagnifyingGlassIcon()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 04.01.5 Verify that the modal window opens after clicking on the "magnifying glass with +" icon', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowProductPageAvailable = await mobilSuper3000Page.clickMagnifyingGlassIcon();

		await expect(modalWindowProductPageAvailable.locators.getModalWindow()).toBeVisible();

	});

	test('TC 04.01.6 Verify that the modal window contains the name of the product', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowProductPageAvailable = await mobilSuper3000Page.clickMagnifyingGlassIcon();

		await expect(modalWindowProductPageAvailable.locators.getProductName()).toBeVisible();
		await expect(modalWindowProductPageAvailable.locators.getProductName()).toHaveText(PRODUCT_NAME_TEXT);

	});

	test('TC 04.01.7 Verify that the modal window contains the image of the product', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowProductPageAvailable = await mobilSuper3000Page.clickMagnifyingGlassIcon();

		await expect(modalWindowProductPageAvailable.locators.getProductImage()).toBeVisible();

	});

	test('TC 04.01.8 Verify that the modal window contains the right-scroll button for scrolling images', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowProductPageAvailable = await mobilSuper3000Page.clickMagnifyingGlassIcon();

		await expect(modalWindowProductPageAvailable.locators.getButtonNextSlide()).toBeVisible();

	});

	test('TC 04.01.9 Verify that the modal window contains the left-scroll button for scrolling images', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowProductPageAvailable = await mobilSuper3000Page.clickMagnifyingGlassIcon();

		await expect(modalWindowProductPageAvailable.locators.getButtonPreviousSlide()).toBeVisible();

	});

	test('TC 04.01.10 Verify that the modal window contains close(cross) button', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowProductPageAvailable = await mobilSuper3000Page.clickMagnifyingGlassIcon();

		await expect(modalWindowProductPageAvailable.locators.getCloseButton()).toBeVisible();

	});

	test('TC 04.01.10.1 Verify that the close(cross) button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowProductPageAvailable = await mobilSuper3000Page.clickMagnifyingGlassIcon();

		await expect(modalWindowProductPageAvailable.locators.getCloseButton()).toBeVisible();
		await expect(modalWindowProductPageAvailable.locators.getCloseButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 04.01.11 Verify that the right-scroll button for scrolling images has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowProductPageAvailable = await mobilSuper3000Page.clickMagnifyingGlassIcon();

		await expect(modalWindowProductPageAvailable.locators.getCloseButton()).toBeVisible();
		await expect(modalWindowProductPageAvailable.locators.getButtonNextSlide()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 04.01.11.1 Verify that the left-scroll button for scrolling images has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowProductPageAvailable = await mobilSuper3000Page.clickMagnifyingGlassIcon();

		await expect(modalWindowProductPageAvailable.locators.getCloseButton()).toBeVisible();
		await expect(modalWindowProductPageAvailable.locators.getButtonPreviousSlide()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 04.01.12 Verify that the modal window closes after clicking on the close(cross) button', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowProductPageAvailable = await mobilSuper3000Page.clickMagnifyingGlassIcon();
		await expect(modalWindowProductPageAvailable.locators.getModalWindow()).toBeVisible();

		await modalWindowProductPageAvailable.clickCloseButton();

		await expect(modalWindowProductPageAvailable.locators.getModalWindow()).not.toBeVisible();

	});

	test('TC 04.01.14 Verify that the product page contains a block with the product information', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getProductInformation()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getProductInformation()).toContainText(PRODUCT_INFORMATION_TEXT);

	});

	test('TC 04.01.14.1 Verify that the product page contains the product description header', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getProductDescriptionHeader()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getProductDescriptionHeader()).toHaveText(PRODUCT_DESCRIPTION_HEADER_TEXT);

	});

	test('TC 04.01.14.2 Verify that the product page contains a block with the product description', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getProductDescriptionText()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getProductDescriptionText()).toHaveText(PRODUCT_DESCRIPTION_TEXT);

	});

	test('TC 04.01.15 Verify that the block with the product information contains the product name', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getProductName()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getProductName()).toHaveText(PRODUCT_NAME_TEXT);

	});

	test('TC 04.01.16 Verify that the block with the product information contains the product article', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getProductArticle()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getProductArticle()).toHaveText(PRODUCT_ARTICLE_TEXT);

	});

	test('TC 04.01.17 Verify that the block with the product information contains the product price', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getProductPrice()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getProductPrice()).toHaveText(PRODUCT_PRICE_TEXT);

	});

	test('TC 04.01.18 Verify that the block with the product information contains the product status', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getProductStatus()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getProductStatus()).toHaveText(PRODUCT_STATUS_TEXT);

	});

	test('TC 04.01.20 Verify that the product page contains the "Додати в кошик" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getAddToCartButton()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getAddToCartButton()).toHaveText(ADD_TO_CART_BUTTON_TEXT);

	});

	test('TC 04.01.21 Verify that the "Додати в кошик" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getAddToCartButton()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getAddToCartButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 04.01.22.1 Verify that the "Додати в кошик" button has a icon (cart)', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getAddToCartButton()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getIconAddToCartButton()).toBeVisible();

	});

	test('TC 04.01.22 Verify that the product is added to the basket and appears in the cart icon after clicking on the "Додати в кошик" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();
		await mobilSuper3000Page.clickAddToCartButton();

		await expect(mobilSuper3000Page.locators.getCartIcon()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getCartIcon()).toContainText('1');

	});

	test('TC 04.01.22.1 Verify that appears the "Товар додано до кошика" notification  after clicking on the "Додати в кошик" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();
		await mobilSuper3000Page.clickAddToCartButton();

		const popupLocator = page.locator('.w-full.tablet600\\:w-\\[343px\\].desktop1200\\:w-\\[590px\\].rounded-lg.p-xs.tablet1024\\:p-s.flex.gap-1.border.border-borderSuccess.bg-bgSuccessLight');
		
		await expect(popupLocator).toBeVisible();
		await expect(popupLocator).toHaveText('Товар додано до кошика');

	});

	test('TC 04.01.22.2 Verify that appears the  "- 1 +"  product counter after clicking on the "Додати в кошик" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();
		await mobilSuper3000Page.clickAddToCartButton();

		await expect(mobilSuper3000Page.locators.getProductCounterAddToCartButton()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getProductCounterAddToCartButton()).toContainText('1');

	});

	test('TC 04.01.22.5 Verify that the counter for the number of goods in the cart icon increases after clicking on the '+' button', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();
		await mobilSuper3000Page.clickAddToCartButton();

		await expect(mobilSuper3000Page.locators.getCartIcon()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getCartIcon()).toContainText('1');

		await mobilSuper3000Page.clickAddProductCounterButton();

		await expect(mobilSuper3000Page.locators.getCartIcon()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getCartIcon()).toContainText('2');

	});

	test('TC 04.01.22.3 Verify that user can add a unit by clicking on the " + " product counter', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();
		await mobilSuper3000Page.clickAddToCartButton();

		await expect(mobilSuper3000Page.locators.getProductCounterAddToCartButton()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getProductCounterAddToCartButton()).toContainText('1');

		await mobilSuper3000Page.clickAddProductCounterButton();

		await expect(mobilSuper3000Page.locators.getProductCounterAddToCartButton()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getProductCounterAddToCartButton()).toContainText('2');

	});

	test('TC 04.01.22.6 Verify that the product page contains the "Купити в 1 клік" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getBuyToOneClickButton()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getBuyToOneClickButton()).toHaveText(BUY_TO_ONE_CLICK_BUTTON_TEXT);

	});

	test('TC 04.01.22.6.1 Verify that the "Купити в 1 клік" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getBuyToOneClickButton()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getBuyToOneClickButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 04.01.22.7 Verify that the "Швидке замовлення" pop up opens after clicking on the "Купити в 1 клік" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();

		await expect(modalWindowQuickOrdering.locators.getModalWindow()).toBeVisible();

	});

	test('TC 04.01.22.8 Verify that the "Швидке замовлення" pop up contains "Номер телефону" field', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();

		await expect(modalWindowQuickOrdering.locators.getPhoneField()).toBeVisible();

	});

	test('TC 04.01.22.8.1 Verify that the "Номер телефону" field has the header', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();

		await expect(modalWindowQuickOrdering.locators.getPhoneFieldHeader()).toBeVisible();
		await expect(modalWindowQuickOrdering.locators.getPhoneFieldHeader()).toHaveText(PHONE_FIELD_HEADER_TEXT);

	});

	test('TC 04.01.22.8.2 Verify that the "Номер телефону" field has the placeholder', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();

		await expect(modalWindowQuickOrdering.locators.getPhoneFieldPlaceholder()).toBeVisible();
		await expect(modalWindowQuickOrdering.locators.getPhoneFieldPlaceholder()).toHaveText(PHONE_FIELD_PLACEHOLDER_TEXT);

	});

	test('TC 04.01.22.9 Verify that the "Номер телефону" field has Поле «Телефон» has the verification (enter valid phone number)', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();
		await modalWindowQuickOrdering.clickPhoneField();
		await modalWindowQuickOrdering.typePhoneFieldValidData();

		await expect(modalWindowQuickOrdering.locators.getPhoneField()).toBeVisible();

		await expect(modalWindowQuickOrdering.locators.getPhoneField()).toHaveValue('066 216 16 12');

	});

	test('TC 04.01.22.9.1 Verify that the "Номер телефону" field has Поле «Телефон» has the verification (enter invalid phone number +38 000 000 00 00)', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();
		await modalWindowQuickOrdering.clickPhoneField();
		await modalWindowQuickOrdering.typePhoneFieldInvalidData();

		await expect(modalWindowQuickOrdering.locators.getPhoneField()).toBeVisible();

		await expect(modalWindowQuickOrdering.locators.getPhoneField()).toHaveValue('000 000 00 00');

	});

	test('TC 04.01.22.9.2 Verify that the "Номер телефону" field has Поле «Телефон» has the verification (leaving the field blank)', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();
		await modalWindowQuickOrdering.clickPhoneField();
		await modalWindowQuickOrdering.clickSendButton();

		const errorMessage = await page.evaluate(() => {
			const phoneField = document.querySelector('input#phone');
			return phoneField ? phoneField.validationMessage : '';
		});

		expect(errorMessage).toMatch('Please fill out this field.');

	});

	test('TC 04.01.22.9.3 Verify that the "Номер телефону" field has Поле «Телефон» has the verification (less than 10 characters)', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();
		await modalWindowQuickOrdering.clickPhoneField();
		await modalWindowQuickOrdering.typePhoneFieldInvalidDataLess10();
		await modalWindowQuickOrdering.clickSendButton();

		const errorMessage = await page.evaluate(() => {
			const phoneField = document.querySelector('input#phone');
			return phoneField ? phoneField.validationMessage : '';
		});

		expect(errorMessage).toMatch('Please match the requested format.');

	});

	test('TC 04.01.22.10 Verify that the "Номер телефону" field has Поле «Телефон» has the verification (the field does not accept letters)', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();
		await modalWindowQuickOrdering.clickPhoneField();
		await modalWindowQuickOrdering.typePhoneFieldInvalidDataLetterA();
		await modalWindowQuickOrdering.clickSendButton();

		const errorMessage = await page.evaluate(() => {
			const phoneField = document.querySelector('input#phone');
			return phoneField ? phoneField.validationMessage : '';
		});

		expect(errorMessage).toMatch('Please match the requested format.');

	});

	test('TC 04.01.22.11 Verify that the "Номер телефону" field has Поле «Телефон» has the verification (the field does not accept special characters)', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();
		await modalWindowQuickOrdering.clickPhoneField();
		await modalWindowQuickOrdering.typePhoneFieldInvalidDataSpecialCharacters();
		await modalWindowQuickOrdering.clickSendButton();

		const errorMessage = await page.evaluate(() => {
			const phoneField = document.querySelector('input#phone');
			return phoneField ? phoneField.validationMessage : '';
		});

		expect(errorMessage).toMatch('Please match the requested format.');

	});

	test('TC 04.01.22.11.1 Verify that the "Номер телефону" field has Поле «Телефон» has the verification (enter invalid phone number by start entering from 1 to 9)', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();
		await modalWindowQuickOrdering.clickPhoneField();
		await modalWindowQuickOrdering.typePhoneFieldInvalidDataNumber1();
		await modalWindowQuickOrdering.clickSendButton();

		const errorMessage = await page.evaluate(() => {
			const phoneField = document.querySelector('input#phone');
			return phoneField ? phoneField.validationMessage : '';
		});

		expect(errorMessage).toMatch('Please match the requested format.');

	});

	test('TC 04.01.22.12 Verify that the "Швидке замовлення" pop up contains the close(cross) button', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();

		await expect(modalWindowQuickOrdering.locators.getCloseButton()).toBeVisible();

	});

	test('TC 04.01.22.13 Verify that the close(cross) button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();

		await expect(modalWindowQuickOrdering.locators.getCloseButton()).toBeVisible();
		await expect(modalWindowQuickOrdering.locators.getCloseButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 04.01.22.14 Verify that the "Швидке замовлення" pop up contains the icon', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();

		await expect(modalWindowQuickOrdering.locators.getIcon()).toBeVisible();

	});

	test('TC 04.01.22.15 Verify that the "Швидке замовлення" pop up contains the header (name)', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();

		await expect(modalWindowQuickOrdering.locators.getHeaderName()).toBeVisible();
		await expect(modalWindowQuickOrdering.locators.getHeaderName()).toHaveText(MODAL_WINDOW_QUICK_ORDERING_HEADER_TEXT);

	});

	test('TC 04.01.22.16 Verify that the "Швидке замовлення" pop up contains the the "Залиште заявку і наш менеджер зв’яжеться з вами!" description', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();

		await expect(modalWindowQuickOrdering.locators.getDescription()).toBeVisible();
		await expect(modalWindowQuickOrdering.locators.getDescription()).toHaveText(MODAL_WINDOW_QUICK_ORDERING_DESCRIPTION_TEXT);

	});

	test('TC 04.01.22.17 Verify that the "Швидке замовлення" pop up contains the "Вiдправити" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();

		await expect(modalWindowQuickOrdering.locators.getSendButton()).toBeVisible();
		await expect(modalWindowQuickOrdering.locators.getSendButton()).toHaveText(MODAL_WINDOW_QUICK_ORDERING_SEND_BUTTON_TEXT);

	});

	test('TC 04.01.22.17.1 Verify that the "Вiдправити" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();

		await expect(modalWindowQuickOrdering.locators.getSendButton()).toBeVisible();
		await expect(modalWindowQuickOrdering.locators.getSendButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 04.01.22.18 Verify that the "Замовлення успишне" modal window opens after entering valid data and clicking on the "Вiдправити" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();
		await modalWindowQuickOrdering.clickPhoneField();
		await modalWindowQuickOrdering.typePhoneFieldValidData();

		const modalWindowSuccessfulOrder = await modalWindowQuickOrdering.clickSendButton();

		await expect(modalWindowSuccessfulOrder.locators.getModalWindow()).toBeVisible();

	});

	test('TC 04.01.22.19 Verify that the "Замовлення успишне" modal window contains the icon', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();
		await modalWindowQuickOrdering.clickPhoneField();
		await modalWindowQuickOrdering.typePhoneFieldValidData();

		const modalWindowSuccessfulOrder = await modalWindowQuickOrdering.clickSendButton();

		await expect(modalWindowSuccessfulOrder.locators.getIcon()).toBeVisible();

	});

	test('TC 04.01.22.20 Verify that the "Замовлення успишне" modal window contains the header (name)', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();
		await modalWindowQuickOrdering.clickPhoneField();
		await modalWindowQuickOrdering.typePhoneFieldValidData();

		const modalWindowSuccessfulOrder = await modalWindowQuickOrdering.clickSendButton();

		await expect(modalWindowSuccessfulOrder.locators.getHeader()).toBeVisible();
		await expect(modalWindowSuccessfulOrder.locators.getHeader()).toHaveText(MODAL_WINDOW_SUCCESSFUL_ORDER_HEADER_TEXT);

	});

	test('TC 04.01.22.21 Verify that the "Замовлення успишне" modal window contains the the "Очікуйте дзвінка нашого менеджера протягом 5 хвилин" description', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();
		await modalWindowQuickOrdering.clickPhoneField();
		await modalWindowQuickOrdering.typePhoneFieldValidData();

		const modalWindowSuccessfulOrder = await modalWindowQuickOrdering.clickSendButton();

		await expect(modalWindowSuccessfulOrder.locators.getDescription()).toBeVisible();
		await expect(modalWindowSuccessfulOrder.locators.getDescription()).toHaveText(MODAL_WINDOW_SUCCESSFUL_ORDER_DESCRIPTION_TEXT);

	});

	test('TC 04.01.22.22 Verify that the "Замовлення успишне" modal window contains the "Перейти до каталогу" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();
		await modalWindowQuickOrdering.clickPhoneField();
		await modalWindowQuickOrdering.typePhoneFieldValidData();

		const modalWindowSuccessfulOrder = await modalWindowQuickOrdering.clickSendButton();

		await expect(modalWindowSuccessfulOrder.locators.getGoToTheCatalogButton()).toBeVisible();
		await expect(modalWindowSuccessfulOrder.locators.getGoToTheCatalogButton()).toHaveText(MODAL_WINDOW_SUCCESSFUL_ORDER_GO_TO_CATALOG_BUTTON_TEXT);

	});

	test('TC 04.01.22.23 Verify that the "Перейти до каталогу" button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();
		await modalWindowQuickOrdering.clickPhoneField();
		await modalWindowQuickOrdering.typePhoneFieldValidData();

		const modalWindowSuccessfulOrder = await modalWindowQuickOrdering.clickSendButton();

		await expect(modalWindowSuccessfulOrder.locators.getGoToTheCatalogButton()).toBeVisible();
		await expect(modalWindowSuccessfulOrder.locators.getGoToTheCatalogButton()).toHaveCSS('cursor', 'pointer');
	});

	test('TC 04.01.22.24 Verify that the successful transition to the catalog was made after clicking on the "Перейти до каталогу" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();
		await modalWindowQuickOrdering.clickPhoneField();
		await modalWindowQuickOrdering.typePhoneFieldValidData();

		const modalWindowSuccessfulOrder = await modalWindowQuickOrdering.clickSendButton();
		await modalWindowSuccessfulOrder.clickGoToTheCatalogButton();

		await expect(modalWindowSuccessfulOrder.locators.getModalWindow()).not.toBeVisible();
		await expect(homePage.locators.getProductListPage()).toBeVisible();

	});

	test('TC 04.01.13.1 Verify that the smaller image of the product has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getProductImageSmall()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getProductImageSmall()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 04.01.22.25 Verify that the product page contains the product description "Основні характеристики" header', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getProductMainСharacteristicsHeader()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getProductMainСharacteristicsHeader()).toContainText(PRODUCT_MAIN_CHARACTERISTICS_TEXT);

	});

	test('TC 04.01.22.26 Verify that the "Основні характеристики" block contains the "Вага" informational text', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getWeightText()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getWeightText()).toContainText(WEIGHT_TEXT);

	});

	test('TC 04.01.22.27 Verify that the "Основні характеристики" block contains the value of the "Вага" informational text', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getWeightValueText()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getWeightValueText()).toContainText(WEIGHT_VALUE_TEXT);

	});

	test('TC 04.01.22.28 Verify that the "Основні характеристики" block contains the "Код" informational text', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getCodeText()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getCodeText()).toContainText(CODE_TEXT);

	});

	test('TC 04.01.22.29 Verify that the "Основні характеристики" block contains the value of the "Код" informational text', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getCodeValueText()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getCodeValueText()).toContainText(CODE_VALUE_TEXT);

	});

	test('TC 04.01.22.30 Verify that the "Основні характеристики" block contains the "Виробник" informational text', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getManufacturerText()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getManufacturerText()).toContainText(MANUFACTURER_TEXT);

	});

	test('TC 04.01.22.31 Verify that the "Основні характеристики" block contains the value of the "Виробник" informational text', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getManufacturerNameText()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getManufacturerNameText()).toContainText(MANUFACTURER_NAME_TEXT);

	});

	test('TC 04.01.22.32 Verify that the "Основні характеристики" block contains the "Країна" informational text', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getCountryText()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getCountryText()).toContainText(COUNTRY_TEXT);

	});

	test('TC 04.01.22.33 Verify that the "Основні характеристики" block contains the value of the "Країна" informational text', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getCountryNameText()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getCountryNameText()).toContainText(COUNTRY_NAME_TEXT);

	});

	test('TC 04.01.22.18.1 Verify that the "Замовлення успишне" modal window opens after entering valid data and clicking on the "Вiдправити" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		const modalWindowQuickOrdering = await mobilSuper3000Page.clickBuyToOneClickButton();
		await modalWindowQuickOrdering.clickPhoneField();
		await modalWindowQuickOrdering.typePhoneFieldValidData();
		const modalWindowSuccessfulOrder = await modalWindowQuickOrdering.pressPhoneField();

		await expect(modalWindowSuccessfulOrder.locators.getModalWindow()).toBeVisible();

	});

	test('TC 04.01.22.34 Verify that the product page contains the header "Найбільш популярні" for the product cards', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getMostPopularHeader()).toBeVisible();
		await expect(mobilSuper3000Page.locators.getMostPopularHeader()).toHaveText(MOST_POPULAR_HEADER_TEXT);

	});

	test('TC 04.01.22.35 Verify that the "Найбільш популярні" product cards contain the "Не знайшли потрiбний товар?" product card', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getnotFindProduct()).toBeVisible();

	});

	test('TC 04.01.22.36 Verify that the "Найбільш популярні" product cards are displayed after the main product box', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getMostPopularProducts()).toBeVisible();

	});

	test('TC 04.01.22.37 Verify that the product page contains "Переглянуті товари" product cards', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getviewedProducts()).toBeVisible();

	});

	test('TC 04.01.22.38 Verify that the product page contains the header "Переглянуті товари" for the product cards', async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getviewedProductsHeader()).toBeVisible();

	});

	test("TC 04.01.22.39 Verify that the user can see the navigation on the 'Каталог / Масла та автохімія / Гідравлічні / Моторна олива Mobil Super 3000 X1 Formula FE 5W-30' page leading up to this product card", async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getBreadCrumbs()).toBeVisible();

	});

	test("TC 04.01.22.40 Verify that the breadcrumb navigation is correct on the 'Каталог / Масла та автохімія / Гідравлічні / Моторна олива Mobil Super 3000 X1 Formula FE 5W-30' page", async ({ page }) => {
		const homePage = new HomePage(page);

		const mobilSuper3000Page = await homePage.clickMobilSuper3000();

		await expect(mobilSuper3000Page.locators.getBreadCrumbsMobilSuper3000()).toBeVisible();
		await expect(page).toHaveURL(MOBIL_SUPER_3000_URL);

		const hydraulicPage = await mobilSuper3000Page.clickBreadCrumbsHydraulic();

		await expect(mobilSuper3000Page.locators.getBreadCrumbsHydraulic()).toBeVisible();
		await expect(page).toHaveURL(HYDRAULIC_URL);

		const oilsAndAutomotiveChemicalsPage = await hydraulicPage.clickBreadCrumbsOilsAndAutomotiveChemicals();

		await expect(oilsAndAutomotiveChemicalsPage.locators.getOilsAndAutomotiveChemicalsBreadcrambs()).toBeVisible();
		await expect(page).toHaveURL(OILS_AND_AUTOMOTIVE_CHEMICALS_URL);

		await oilsAndAutomotiveChemicalsPage.clickCatalogBreadcrambs();

		await expect(page).toHaveURL(BASE_URL);

	});


})