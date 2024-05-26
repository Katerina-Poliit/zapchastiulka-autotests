import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import {MODAL_WINDOW_NAME_AGRISTAR, MAKE_PREORDER_BUTTON, PRODUCT_INFORMATION_TEXT, PRODUCT_INFORMATION_TEXT_1, PRODUCT_ARTICLE_TEXT_1, PRODUCT_PRICE_TEXT_1, PRODUCT_STATUS_TEXT_1 } from "../../helpers/testDataProductPage.js";


test.describe('productListPage.spec.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	test.skip('TC 04.01.35.04 Verify that the magnifying glass icon contains a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
        const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await page.waitForTimeout(2000);
		await expect(telescopicLoadePage.locators.getMagnifyingGlassIcon()).toHaveCSS('cursor', 'auto');

	});

	test('TC 04.01.35.05  Verify that the modal window opens, the user clicked on the "magnifier"', async ({ page }) => {
		const homePage = new HomePage(page);
        const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await page.waitForTimeout(2000);
		await telescopicLoadePage.clickMagnifyingGlassIcon();
		await expect(telescopicLoadePage.locators.getModalWindowOpenFoto()).toBeAttached();

	});

	test('TC 04.01.35.06 Verify that the modal window contains the product name', async ({ page }) => {
		const homePage = new HomePage(page);
        const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await page.waitForTimeout(2000);
		await telescopicLoadePage.clickMagnifyingGlassIcon();
		await expect(telescopicLoadePage.locators.getNameProductModalWindow()).toBeAttached();
		await expect(telescopicLoadePage.locators.getNameProductModalWindow()).toHaveText(MODAL_WINDOW_NAME_AGRISTAR);

	});
	test('TC 04.01.35.07 Verify that the modal window contains an image of the product', async ({ page }) => {
		const homePage = new HomePage(page);
        const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await page.waitForTimeout(2000);
		await telescopicLoadePage.clickMagnifyingGlassIcon();
		await expect(telescopicLoadePage.locators.getFotoProductModalWindow()).toBeTruthy();

	});

	test('TC 04.01.23 Verify that the product card with the status "пiд замовлення" has a button "Зробити передзамовлення"', async ({ page }) => {
		const homePage = new HomePage(page);
		const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await expect(telescopicLoadePage.locators.getMakePreorderButton()).toBeAttached();
		await expect(telescopicLoadePage.locators.getMakePreorderButton()).toHaveCSS('cursor', 'pointer');
		await expect(telescopicLoadePage.locators.getMakePreorderButton()).toHaveCSS('border-color', 'rgb(21, 112, 239)');
		await expect(telescopicLoadePage.locators.getMakePreorderButton()).toHaveText(MAKE_PREORDER_BUTTON);

	});

	test('TC 04.01.24 Verify that the "Передзамовлення товару" dialog box opens, and the user clicks on the "Зробити передзамовлення"button', async ({ page }) => {
		const homePage = new HomePage(page);
		const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await telescopicLoadePage.clickMakePreorderButton();
		await expect(telescopicLoadePage.locators.getOutOfStockModalWindow()).toBeAttached();

	});

	test('TC 04.01.25 Verify that the "Передзамовлення товару" dialog box contains the "Номер телефону" field', async ({ page }) => {
		const homePage = new HomePage(page);
		const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await telescopicLoadePage.clickMakePreorderButton();
		await expect(telescopicLoadePage.locators.getFhoneNumberField()).toBeVisible();
	});

	test('TC 04.01.26 Verify that the"Номер телефону" field has verification', async ({ page }) => {
		const homePage = new HomePage(page);
		const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await telescopicLoadePage.clickMakePreorderButton();
		await telescopicLoadePage.fillFhoneNumberField();
		await telescopicLoadePage.clickOutOfStockModalWindowButton();
		await page.waitForTimeout(2000);
		const successMessage = await telescopicLoadePage.locators.getOrderSiccessfulModalWindow();
		await page.waitForTimeout(2000);
		expect(successMessage).toBeAttached()

	});

	test('TC 04.01.29 Verify that the pop-up window displays the "X" button', async ({ page }) => {
		const homePage = new HomePage(page);
		const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await telescopicLoadePage.clickMakePreorderButton();
		await expect(telescopicLoadePage.locators.getModalWindowCloseButton()).toBeVisible();
	});

	test('TC 04.01.35 Verify that the successful transition to the catalog was made after clicking on the "Перейти до каталогу" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const telescopicLoaderAGRISTARPage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		const modalWindowPreOrdering = await telescopicLoaderAGRISTARPage.clickMakePreOrderButton();
		await modalWindowPreOrdering.clickPhoneField();
		await modalWindowPreOrdering.typePhoneFieldValidData();

		const modalWindowSuccessfulOrder = await modalWindowPreOrdering.clickSendButton();
		await modalWindowSuccessfulOrder.clickGoToTheCatalogButton();

		await expect(modalWindowSuccessfulOrder.locators.getModalWindow()).not.toBeVisible();
		await expect(homePage.locators.getProductListPage()).toBeVisible();

	});

	test('TC 04.01.35.01 Verify that the product page contains a block with the product image', async ({ page }) => {
		const homePage = new HomePage(page);

		const telescopicLoaderAGRISTARPage = await homePage.clickCardtelescopicLoaderAGRISTAR();

		await expect(telescopicLoaderAGRISTARPage.locators.getProductImageBlock()).toBeVisible();

	});

	test('TC 04.01.35.02 Verify that the product image block contains an image of the product', async ({ page }) => {
		const homePage = new HomePage(page);

		const telescopicLoaderAGRISTARPage = await homePage.clickCardtelescopicLoaderAGRISTAR();

		await expect(telescopicLoaderAGRISTARPage.locators.getProductImageBig()).toBeVisible();

	});

	test('TC 04.01.35.03 Verify that the product image block contains a button to enlarge the product image (a "magnifying glass with +" icon)', async ({ page }) => {
		const homePage = new HomePage(page);

		const telescopicLoaderAGRISTARPage = await homePage.clickCardtelescopicLoaderAGRISTAR();

		await expect(telescopicLoaderAGRISTARPage.locators.getMagnifyingGlassIcon()).toBeVisible();

	});

	test('TC 04.01.35.08 Verify that the modal window contains the right-scroll button for scrolling images', async ({ page }) => {
		const homePage = new HomePage(page);

		const telescopicLoaderAGRISTARPage = await homePage.clickCardtelescopicLoaderAGRISTAR();

		const modalWindowPreOrdering = await telescopicLoaderAGRISTARPage.clickMagnifyingGlassIconPreOrdering();

		await expect(modalWindowPreOrdering.locators.getButtonNextSlide()).toBeVisible();

	});

	test('TC 04.01.35.09 Verify that the modal window contains the left-scroll button for scrolling images', async ({ page }) => {
		const homePage = new HomePage(page);

		const telescopicLoaderAGRISTARPage = await homePage.clickCardtelescopicLoaderAGRISTAR();

		const modalWindowPreOrdering = await telescopicLoaderAGRISTARPage.clickMagnifyingGlassIconPreOrdering();

		await expect(modalWindowPreOrdering.locators.getButtonPreviousSlide()).toBeVisible();

	});

	test('TC 04.01.35.10 Verify that the modal window contains close(cross) button', async ({ page }) => {
		const homePage = new HomePage(page);

		const telescopicLoaderAGRISTARPage = await homePage.clickCardtelescopicLoaderAGRISTAR();

		const modalWindowPreOrdering = await telescopicLoaderAGRISTARPage.clickMagnifyingGlassIconPreOrdering();

		await expect(modalWindowPreOrdering.locators.getCloseButton()).toBeVisible();

	});

	test('TC 04.01.35.11 Verify that the close(cross) button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const telescopicLoaderAGRISTARPage = await homePage.clickCardtelescopicLoaderAGRISTAR();

		const modalWindowPreOrdering = await telescopicLoaderAGRISTARPage.clickMagnifyingGlassIconPreOrdering();

		await expect(modalWindowPreOrdering.locators.getCloseButton()).toBeVisible();
		await expect(modalWindowPreOrdering.locators.getCloseButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 04.01.35.12 Verify that the modal window closes after clicking on the close(cross) button', async ({ page }) => {
		const homePage = new HomePage(page);

		const telescopicLoaderAGRISTARPage = await homePage.clickCardtelescopicLoaderAGRISTAR();

		const modalWindowPreOrdering = await telescopicLoaderAGRISTARPage.clickMagnifyingGlassIconPreOrdering();

		await expect(modalWindowPreOrdering.locators.getCloseButton()).toBeVisible();

		await modalWindowPreOrdering.clickCloseButton();

		await expect(modalWindowPreOrdering.locators.getModalWindow()).not.toBeVisible();

	});

	test('TC 04.01.35.13 Verify that the product image block contains a smaller images of the product', async ({ page }) => {
		const homePage = new HomePage(page);

		const telescopicLoaderAGRISTARPage = await homePage.clickCardtelescopicLoaderAGRISTAR();

		await expect(telescopicLoaderAGRISTARPage.locators.getProductImageSmall()).toBeVisible();

	});

	test('TC 04.01.35.14 Verify that the product page contains the product description header', async ({ page }) => {
		const homePage = new HomePage(page);

		const telescopicLoaderAGRISTARPage = await homePage.clickCardtelescopicLoaderAGRISTAR();

		await expect(telescopicLoaderAGRISTARPage.locators.getProductDescription()).toBeVisible();
		await expect(telescopicLoaderAGRISTARPage.locators.getProductDescription()).toContainText(PRODUCT_INFORMATION_TEXT);

	});

	test('TC 04.01.35.15 Verify that the block with the product information contains the product name', async ({ page }) => {
		const homePage = new HomePage(page);

		const telescopicLoaderAGRISTARPage = await homePage.clickCardtelescopicLoaderAGRISTAR();

		await expect(telescopicLoaderAGRISTARPage.locators.getProductName()).toBeVisible();
		await expect(telescopicLoaderAGRISTARPage.locators.getProductName()).toHaveText(PRODUCT_INFORMATION_TEXT_1);

	});

	test('TC 04.01.35.16 Verify that the block with the product information contains the product article', async ({ page }) => {
		const homePage = new HomePage(page);

		const telescopicLoaderAGRISTARPage = await homePage.clickCardtelescopicLoaderAGRISTAR();

		await expect(telescopicLoaderAGRISTARPage.locators.getProductArticle()).toBeVisible();
		await expect(telescopicLoaderAGRISTARPage.locators.getProductArticle()).toHaveText(PRODUCT_ARTICLE_TEXT_1);

	});

	test('TC 04.01.35.17 Verify that the block with the product information contains the product price', async ({ page }) => {
		const homePage = new HomePage(page);

		const telescopicLoaderAGRISTARPage = await homePage.clickCardtelescopicLoaderAGRISTAR();

		await expect(telescopicLoaderAGRISTARPage.locators.getProductPrice()).toBeVisible();
		await expect(telescopicLoaderAGRISTARPage.locators.getProductPrice()).toHaveText(PRODUCT_PRICE_TEXT_1);

	});

	test('TC 04.01.35.18 Verify that the block with the product information contains the product status', async ({ page }) => {
		const homePage = new HomePage(page);

		const telescopicLoaderAGRISTARPage = await homePage.clickCardtelescopicLoaderAGRISTAR();

		await expect(telescopicLoaderAGRISTARPage.locators.getProductStatus()).toBeVisible();
		await expect(telescopicLoaderAGRISTARPage.locators.getProductStatus()).toHaveText(PRODUCT_STATUS_TEXT_1);

	});

	test('TC 04.01.26.1  Verify that the Filling in the field with an incorrect phone number, a message about the validation of the phone number was received', async ({ page }) => {

		const homePage = new HomePage(page);
		const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await telescopicLoadePage.clickMakePreorderButton();
		await telescopicLoadePage.fillIncorectFhoneNumberField();
		await telescopicLoadePage.clickOutOfStockModalWindowButton();
		await page.waitForTimeout(2000);
        const isModalVisible = telescopicLoadePage.locators.getOutOfStockModalWindow();
         expect(isModalVisible).toBeTruthy();
	});

	test('TC 04.01.30 Verify that the "X" button contains the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
		const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await telescopicLoadePage.clickMakePreorderButton();
		await expect(telescopicLoadePage.locators.getModalWindowCloseButton()).toHaveCSS('cursor', 'pointer');
	});

	test('TC 04.01.30.1 Verify that the modal window closes, the user has clicked on the "X" button', async ({ page }) => {
		const homePage = new HomePage(page);
		const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await telescopicLoadePage.clickMakePreorderButton();
		await telescopicLoadePage.clickModalWindowCloseButton();
		await expect(telescopicLoadePage.locators.getOutOfStockModalWindow()).not.toBeVisible();
	});

	test('TC 04.01.31 Verify that the modal window contains the "Вiдправити" button', async ({ page }) => {
		const homePage = new HomePage(page);
		const telescopicLoadePage = await homePage.clickCardtelescopicLoaderAGRISTAR();
		await telescopicLoadePage.clickMakePreorderButton();
		await expect(telescopicLoadePage.locators.getOutOfStockModalWindowButton()).toBeVisible();
		await expect(telescopicLoadePage.locators.getOutOfStockModalWindowButton()).toHaveCSS('cursor', 'pointer');
	})

})