import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { PRODUCT_NAME_TEXT } from "../../helpers/testDataProductPage.js";


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


})