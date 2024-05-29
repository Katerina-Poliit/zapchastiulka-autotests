import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { LEGAL_ENTITY_BUTTON_TEXT, TYPE_OF_RESTRAINT_FIELD_LABEL_TEXT, CONTACT_INFORMATION_BLOCK_HEADER_TEXT, LEGAL_ENTITY_SECTION_TEXT, FOP_SECTION_TEXT, NAME_FIELD_LABEL_TEXT } from "../../helpers/testDataProductCartPage.js";
import CheckoutPage from "../../page_objects/checkoutPage.js";

test.describe('checkoutPage.spec', () => {
	test.beforeEach(async ({ page }) => {

		const homePage = new HomePage(page);

      await homePage.open();
      await homePage.clickMobilSuper3000ToCart();
		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		await cartWithProductsPage.clickCheckoutButton();

	});

	test('TC 05.01.107 Verify that the "Оформлення замовлення" page contains the "Юридична особа" button', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);
		await expect(checkoutPage.locators.getLegalEntityButton()).toBeVisible();
		await expect(checkoutPage.locators.getLegalEntityButton()).toHaveText(LEGAL_ENTITY_BUTTON_TEXT);

	});

	test('TC 05.01.107.1 Verify that the "Юридична особа" button has a pointer cursor', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);
		await expect(checkoutPage.locators.getLegalEntityButton()).toBeVisible();
		await expect(checkoutPage.locators.getLegalEntityButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 05.01.107.2 Verify that the "Юридична особа" button changes background color after clicking on it', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);
		await expect(checkoutPage.locators.getLegalEntityButton()).toBeVisible();
		await expect(checkoutPage.locators.getLegalEntityButton()).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getLegalEntityButton()).toBeVisible();
		await expect(checkoutPage.locators.getLegalEntityButton()).toHaveCSS('background-color', 'rgb(46, 144, 250)');

	});

	test('TC 05.01.108 Verify that user can select "Юридична особа" page for ordering for legal entity by clicking on the "Юридична особа" button', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getLegalEntityButton()).toBeVisible();
		await expect(checkoutPage.locators.getLegalEntityButton()).toHaveCSS('background-color', 'rgb(46, 144, 250)');
		await expect(checkoutPage.locators.getTypeOfRestraintFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getTypeOfRestraintFieldLabel()).toHaveText(TYPE_OF_RESTRAINT_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.109 Verify that the "Юридична особа" page contains the "Контактнi данi"  block', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getContactInformationBlock()).toBeVisible();
		await expect(checkoutPage.locators.getContactInformationBlockHeader()).toBeVisible();
		await expect(checkoutPage.locators.getContactInformationBlockHeader()).toHaveText(CONTACT_INFORMATION_BLOCK_HEADER_TEXT);

	});

	test('TC 05.01.110 Verify that the "Контактнi данi" block contains the "Тип рестрації *" mandatory dropdown', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getDropdownMenu()).toBeVisible();
		await expect(checkoutPage.locators.getTypeOfRestraintFieldLabel()).toHaveText(TYPE_OF_RESTRAINT_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.111 Verify that the "Тип рестрації *" mandatory dropdown contains the "Юридична особа" section', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();
		await checkoutPage.clickDropdownMenuButton();

		await expect(checkoutPage.locators.getLegalEntitySection()).toBeVisible();
		await expect(checkoutPage.locators.getLegalEntitySection()).toHaveText(LEGAL_ENTITY_SECTION_TEXT);

	});

	test('TC 05.01.112 Verify that the "Тип рестрації *" mandatory dropdown contains the "ФОП" section', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();
		await checkoutPage.clickDropdownMenuButton();

		await expect(checkoutPage.locators.getFOPSection()).toBeVisible();
		await expect(checkoutPage.locators.getFOPSection()).toHaveText(FOP_SECTION_TEXT);

	});

	test('TC 05.01.113 Verify that the user can choose the "Юридична особа" section in the "Тип рестрації *" mandatory dropdown', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();
		await checkoutPage.clickDropdownMenuButton();
		await checkoutPage.clickLegalEntitySection();

		await expect(checkoutPage.locators.getDropdownMenuLegalEntity()).toBeVisible();
		await expect(checkoutPage.locators.getDropdownMenuLegalEntity()).toHaveText(LEGAL_ENTITY_SECTION_TEXT);

	});

	test('TC 05.01.114 Verify that the "Контактнi данi" block contains the "Назва *" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getNameField()).toBeVisible();
		await expect(checkoutPage.locators.getNameFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getNameFieldLabel()).toHaveText(NAME_FIELD_LABEL_TEXT);

	});

});