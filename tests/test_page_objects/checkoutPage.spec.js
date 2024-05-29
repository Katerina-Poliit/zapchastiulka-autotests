import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { LEGAL_ENTITY_BUTTON_TEXT, TYPE_OF_RESTRAINT_FIELD_LABEL_TEXT, CONTACT_INFORMATION_BLOCK_HEADER_TEXT, LEGAL_ENTITY_SECTION_TEXT, FOP_SECTION_TEXT, NAME_FIELD_LABEL_TEXT, EDRPOU_FIELD_LABEL_TEXT, IPN_FIELD_LABEL_TEXT, REGION_FIELD_LABEL_TEXT, CITY_FIELD_LABEL_TEXT, LEGAL_ADDRESSES_FIELD_LABEL_TEXT, FIRST_NAME_FIELD_LABEL_TEXT, LAST_NAME_FIELD_LABEL_TEXT, MIDDLE_NAME_FIELD_LABEL_TEXT } from "../../helpers/testDataProductCartPage.js";
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

	test('TC 05.01.115 Verify that the "Контактнi данi" block contains the "ЄДРПОУ *" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getEDRPOUField()).toBeVisible();
		await expect(checkoutPage.locators.getEDRPOUFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getEDRPOUFieldLabel()).toHaveText(EDRPOU_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.116 Verify that the "Контактнi данi" block contains the "ІПН *" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getIPNField()).toBeVisible();
		await expect(checkoutPage.locators.getIPNFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getIPNFieldLabel()).toHaveText(IPN_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.117 Verify that the "Контактнi данi" block contains the "Область реєстрації *" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getRegionField()).toBeVisible();
		await expect(checkoutPage.locators.getRegionFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getRegionFieldLabel()).toHaveText(REGION_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.117.1 Verify that the "Область реєстрації *" mandatory field conreins the "Введіть назву області.." placeholder', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		const regionField = checkoutPage.locators.getRegionField();

		await expect(regionField).toBeVisible(); 
		await expect(regionField).toHaveAttribute('placeholder', 'Введіть назву області..');

	});

	test('TC 05.01.118 Verify that the "Контактнi данi" block contains the "Місто реєстрації *" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getCityField()).toBeVisible();
		await expect(checkoutPage.locators.getCityFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getCityFieldLabel()).toHaveText(CITY_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.118.1 Verify that the "Місто реєстрації *" mandatory field conreins the "Введіть назву міста.." placeholder', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		const regionField = checkoutPage.locators.getCityField();

		await expect(regionField).toBeVisible(); 
		await expect(regionField).toHaveAttribute('placeholder', 'Введіть назву міста..');

	});

	test('TC 05.01.119 Verify that the "Контактнi данi" block contains the "Юридична адреса *" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getLegalAddressesField()).toBeVisible();
		await expect(checkoutPage.locators.getLegalAddressesFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getLegalAddressesFieldLabel()).toHaveText(LEGAL_ADDRESSES_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.120 Verify that the "Контактнi данi" block contains the "Ім\'я *" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getFirstNameField()).toBeVisible();
		await expect(checkoutPage.locators.getFirstNameFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getFirstNameFieldLabel()).toHaveText(FIRST_NAME_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.121 Verify that the "Контактнi данi" block contains the "Прізвище *" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getLastNameField()).toBeVisible();
		await expect(checkoutPage.locators.getLastNameFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getLastNameFieldLabel()).toHaveText(LAST_NAME_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.122 Verify that the "Контактнi данi" block contains the "По батькові" field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getMiddleNameField()).toBeVisible();
		await expect(checkoutPage.locators.getMiddleNameFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getMiddleNameFieldLabel()).toHaveText(MIDDLE_NAME_FIELD_LABEL_TEXT);

	});

});