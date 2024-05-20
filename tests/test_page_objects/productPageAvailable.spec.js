import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { PRODUCT_NAME_TEXT, PRODUCT_INFORNATION_TEXT, PRODUCT_DESCRIPTION_HEADER_TEXT, PRODUCT_DESCRIPTION_TEXT, PRODUCT_ARTICLE_TEXT, PRODUCT_PRICE_TEXT, PRODUCT_STATUS_TEXT, ADD_TO_CART_BUTTON_TEXT } from "../../helpers/testDataProductPage.js";


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

	test('TC 04.01.12 Verify that the modal window close after clicking on the close(cross) button', async ({ page }) => {
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
		await expect(mobilSuper3000Page.locators.getProductInformation()).toContainText(PRODUCT_INFORNATION_TEXT);

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


})