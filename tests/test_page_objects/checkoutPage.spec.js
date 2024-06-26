import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { LEGAL_ENTITY_BUTTON_TEXT, TYPE_OF_RESTRAINT_FIELD_LABEL_TEXT, CONTACT_INFORMATION_BLOCK_HEADER_TEXT, LEGAL_ENTITY_SECTION_TEXT, FOP_SECTION_TEXT, NAME_FIELD_LABEL_TEXT, EDRPOU_FIELD_LABEL_TEXT, IPN_FIELD_LABEL_TEXT, REGION_FIELD_LABEL_TEXT, CITY_FIELD_LABEL_TEXT, LEGAL_ADDRESSES_FIELD_LABEL_TEXT, FIRST_NAME_FIELD_LABEL_TEXT, LAST_NAME_FIELD_LABEL_TEXT, MIDDLE_NAME_FIELD_LABEL_TEXT, EMAIL_FIELD_LABEL_TEXT, PHONE_NUMBER_FIELD_LABEL_TEXT, DELIVERY_METHOD_BLOCK_HEADER_TEXT, DELIVERY_CITY_FIELD_LABEL_TEXT, PICKUP_RADIOBUTTON_LABEL_TEXT, ADDRESS_DROPDOWN_LABEL_TEXT, ADDRESS_DROPDOWN_PLACEHOLDER_TEXT, ADDRESS_1_SECTION_TEXT, ADDRESS_2_SECTION_TEXT, WORKING_HOURS_TEXT_1,WORKING_HOURS_TEXT_2, WORKING_HOURS_TEXT_3, WORKING_HOURS_TEXT_4, NEW_BRANCH_LABEL_TEXT, NEW_BRANCH_FIELD_LABEL_TEXT, COURIER_LABEL_TEXT, COURIER_STREET_FIELD_LABEL_TEXT, COURIER_HOUSE_FIELD_LABEL_TEXT, COURIER_FLAT_FIELD_LABEL_TEXT, COURIER_NP_LABEL_TEXT, COURIER_NP_STREET_FIELD_LABEL_TEXT, COURIER_NP_ERROR_MESSAGE_TEXT, COURIER_NP_HOUSE_FIELD_LABEL_TEXT, COURIER_NP_FLAT_FIELD_LABEL_TEXT, COMMENT_HEADER_TEXT, COMMENT_FILL_TEXT, COMMENT_FILL_LESS_10_TEXT, INFORMATION_BLOCK_HEADER_TEXT, PLACE_AN_ORDER_BUTTON_TEXT} from "../../helpers/testDataProductCartPage.js";
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

	test('TC 05.01.117.1 Verify that the "Область реєстрації *" mandatory field contains the "Введіть назву області.." placeholder', async ({ page }) => {
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

	test('TC 05.01.118.1 Verify that the "Місто реєстрації *" mandatory field contains the "Введіть назву міста.." placeholder', async ({ page }) => {
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

	test('TC 05.01.123 Verify that the "Контактнi данi" block contains the "E-mail *" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getEmailField()).toBeVisible();
		await expect(checkoutPage.locators.getEmailFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getEmailFieldLabel()).toHaveText(EMAIL_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.124 Verify that the "Контактнi данi" block contains the "Номер телефону *" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getPhoneNumberField()).toBeVisible();
		await expect(checkoutPage.locators.getPhoneNumberFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getPhoneNumberFieldLabel()).toContainText(PHONE_NUMBER_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.125 Verify that the "Юридична особа" page contains the "Спосіб та дані доставки" block', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getDeliveryMethodBlock()).toBeVisible();
		await expect(checkoutPage.locators.getDeliveryMethodBlockHeader()).toBeVisible();
		await expect(checkoutPage.locators.getDeliveryMethodBlockHeader()).toHaveText(DELIVERY_METHOD_BLOCK_HEADER_TEXT);

	});

	test('TC 05.01.124.1 Verify that the "Номер телефону *" mandatory field contains the "+38" inputmask', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getPhoneNumberinputmask()).toBeVisible();
		await expect(checkoutPage.locators.getPhoneNumberinputmask()).toHaveText('+38');

	});

	test('TC 05.01.126 Verify that the "Спосіб та дані доставки" block contains the "Оберіть місто доставки *" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getDeliveryCityField()).toBeVisible();
		await expect(checkoutPage.locators.getDeliveryCityFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getDeliveryCityFieldLabel()).toHaveText(DELIVERY_CITY_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.126.1 Verify that the "Оберіть місто доставки *" mandatory field  conteins the "Введіть назву міста.." placeholder', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		const deliveryField = checkoutPage.locators.getDeliveryCityField();

		await expect(deliveryField).toBeVisible(); 
		await expect(deliveryField).toHaveAttribute('placeholder', 'Введіть назву міста..');

	});

	test('TC 05.01.127 Verify that the "Спосіб та дані доставки" block contains the "Самовивiз" radiobutton', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getPickupRadiobutton()).toBeVisible();
		await expect(checkoutPage.locators.getPickupRadiobuttonLabelText()).toBeVisible();
		await expect(checkoutPage.locators.getPickupRadiobuttonLabelText()).toHaveText(PICKUP_RADIOBUTTON_LABEL_TEXT);

	});

	test('TC 05.01.128 Verify that the user can select the "Самовивiз" radiobutton by clicking on it', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.checkPickupRadiobutton();

		await expect(checkoutPage.locators.getPickupRadiobutton()).toBeChecked();

	});

	test('TC 05.01.129 Verify that the "Самовивіз" block is displayed after clicking on the "Самовивiз" radiobutton', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.checkPickupRadiobutton();

		await expect(checkoutPage.locators.getPickupBlock()).toBeVisible();

	});

	test('TC 05.01.130 Verify that the "Самовивіз" block contains the "Оберіть адресу магазину*" mandatory dropdown', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.checkPickupRadiobutton();

		await expect(checkoutPage.locators.getAddressDropdown()).toBeVisible();
		await expect(checkoutPage.locators.getAddressDropdownLabel()).toBeVisible();
		await expect(checkoutPage.locators.getAddressDropdownLabel()).toHaveText(ADDRESS_DROPDOWN_LABEL_TEXT);

	});

	test('TC 05.01.131 Verify that the "Оберіть адресу магазину*" mandatory dropdown contains the "Оберіть значення.." placeholder', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.checkPickupRadiobutton();

		await expect(checkoutPage.locators.getAddressDropdownPlaceholder()).toBeVisible();
		await expect(checkoutPage.locators.getAddressDropdownPlaceholder()).toHaveText(ADDRESS_DROPDOWN_PLACEHOLDER_TEXT);

	});

	test('TC 05.01.132 Verify that the "Оберіть адресу магазину*" mandatory dropdown contains the "Адреса 1" section', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();
		await checkoutPage.checkPickupRadiobutton();
		await checkoutPage.clickAddressDropdownButton();

		await expect(checkoutPage.locators.getAddress1Section()).toBeVisible();
		await expect(checkoutPage.locators.getAddress1Section()).toHaveText(ADDRESS_1_SECTION_TEXT);

	});

	test('TC 05.01.133 Verify that the "Адреса 1" text is displayed in the "Оберіть адресу магазину*" mandatory dropdown after selecting the "Адреса 1" section', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();
		await checkoutPage.checkPickupRadiobutton();
		await checkoutPage.clickAddressDropdownButton();
		await checkoutPage.clickAddress1Section();

		await expect(checkoutPage.locators.getDropdownAddress1()).toBeVisible();
		await expect(checkoutPage.locators.getDropdownAddress1()).toContainText(ADDRESS_1_SECTION_TEXT);

	});

	test('TC 05.01.134 Verify that the "Оберіть адресу магазину*" mandatory dropdown contains the "Адреса 2" section', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();
		await checkoutPage.checkPickupRadiobutton();
		await checkoutPage.clickAddressDropdownButton();

		await expect(checkoutPage.locators.getAddress2Section()).toBeVisible();
		await expect(checkoutPage.locators.getAddress2Section()).toHaveText(ADDRESS_2_SECTION_TEXT);

	});

	test('TC 05.01.135 Verify that the "Адреса 2" text is displayed in the "Оберіть адресу магазину*" mandatory dropdown after selecting the "Адреса 2" section', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();
		await checkoutPage.checkPickupRadiobutton();
		await checkoutPage.clickAddressDropdownButton();
		await checkoutPage.clickAddress2Section();

		await expect(checkoutPage.locators.getDropdownAddress2()).toBeVisible();
		await expect(checkoutPage.locators.getDropdownAddress2()).toHaveText(ADDRESS_2_SECTION_TEXT);

	});

	test('TC 05.01.136 Verify that the "Самовивіз" block contains the "Working hours" information block', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.checkPickupRadiobutton();

		await expect(checkoutPage.locators.getWorkinghoursBlock()).toBeVisible();
		await expect(checkoutPage.locators.getWorkinghoursText1()).toBeVisible();	
		await expect(checkoutPage.locators.getWorkinghoursText1()).toHaveText(WORKING_HOURS_TEXT_1);
		await expect(checkoutPage.locators.getWorkinghoursText2()).toBeVisible();
		await expect(checkoutPage.locators.getWorkinghoursText2()).toHaveText(WORKING_HOURS_TEXT_2);
		await expect(checkoutPage.locators.getWorkinghoursText3()).toBeVisible();
		await expect(checkoutPage.locators.getWorkinghoursText3()).toHaveText(WORKING_HOURS_TEXT_3);
		await expect(checkoutPage.locators.getWorkinghoursText4()).toBeVisible();
		await expect(checkoutPage.locators.getWorkinghoursText4()).toHaveText(WORKING_HOURS_TEXT_4);

	});

	test('TC 05.01.137 Verify that the "Спосіб та дані доставки" block contains the "Нова пошта відділення" radiobutton', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getNewBranchPostOfficeRadiobutton()).toBeVisible();
		await expect(checkoutPage.locators.getNewBranchPostOfficeRadiobuttonLabelText()).toBeVisible();
		await expect(checkoutPage.locators.getNewBranchPostOfficeRadiobuttonLabelText()).toHaveText(NEW_BRANCH_LABEL_TEXT);

	});

	test('TC 05.01.138 Verify that the user can select the "Нова пошта відділення" radiobutton by clicking on it', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.checkNewBranchPostOfficeRadiobutton();

		await expect(checkoutPage.locators.getNewBranchPostOfficeRadiobutton()).toBeChecked();

	});

	test('TC 05.01.139 Verify that the "Нова пошта відділення" block is displayed after clicking on the "Нова пошта відділення" radiobutton', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.checkNewBranchPostOfficeRadiobutton();

		await expect(checkoutPage.locators.getNewBranchPostOfficeBlock()).toBeVisible();

	});

	test('TC 05.01.140 Verify that the "Нова пошта відділення" block contains the "Оберіть поштове відділення *" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.checkNewBranchPostOfficeRadiobutton();

		await expect(checkoutPage.locators.getNewBranchPostOfficeField()).toBeVisible();
		await expect(checkoutPage.locators.getNewBranchPostOfficeFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getNewBranchPostOfficeFieldLabel()).toHaveText(NEW_BRANCH_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.141 Verify that the "Ви не обрали місто доставки" message appears after clicking on the "Оберіть поштове відділення *" mandatory field when no city is selected', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.checkNewBranchPostOfficeRadiobutton();
		await checkoutPage.clickNewBranchPostOfficeField();

		await expect(checkoutPage.locators.getNewBranchPostOfficeErrorMessage()).toBeVisible();

	});

	test('TC 05.01.142 Verify that the "Оберіть поштове відділення *" mandatory field contains the "Оберіть значення або введіть назву.." placeholder', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.checkNewBranchPostOfficeRadiobutton();

		const newBranchField = checkoutPage.locators.getNewBranchPostOfficeFieldPlaceholder();

		await expect(newBranchField).toBeVisible(); 
		await expect(newBranchField).toHaveAttribute('placeholder', 'Оберіть значення або введіть назву..');

	});

	test('TC 05.01.143 Verify that the "Спосіб та дані доставки" block contains the "Кур\'єр Запчастюлька" radiobutton', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getСourierRadiobutton()).toBeVisible();
		await expect(checkoutPage.locators.getСourierRadiobuttonLabelText()).toBeVisible();
		await expect(checkoutPage.locators.getСourierRadiobuttonLabelText()).toHaveText(COURIER_LABEL_TEXT);

	});

	test('TC 05.01.144 Verify that the user can select the "Кур\'єр Запчастюлька" radiobutton by clicking on it', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.clickСourierRadiobutton();

		await expect(checkoutPage.locators.getСourierRadiobutton()).toBeChecked();

	});

	test('TC 05.01.145 Verify that the "Кур\'єр Запчастюлька" block is displayed after clicking on the "Кур\'єр Запчастюлька" radiobutton', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.clickСourierRadiobutton();

		await expect(checkoutPage.locators.getСourierBlock()).toBeVisible();

	});

	test('TC 05.01.146 Verify that the "Кур\'єр Запчастюлька" block contains the "Введіть назву вулиці*" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.clickСourierRadiobutton();

		await expect(checkoutPage.locators.getСourierSrteetField()).toBeVisible();
		await expect(checkoutPage.locators.getСourierSrteetFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getСourierSrteetFieldLabel()).toHaveText(COURIER_STREET_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.147 Verify that the "Введіть назву вулиці*" mandatory field contains the "Введіть назву та оберіть значення.." placeholder', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.clickСourierRadiobutton();

		const courier = checkoutPage.locators.getСourierSrteetField();

		await expect(courier).toBeVisible(); 
		await expect(courier).toHaveAttribute('placeholder', 'Введіть назву та оберіть значення..');

	});

	test('TC 05.01.148 Verify that the "Ви не обрали місто доставки" message appears after clicking on the "Введіть назву вулиці*" mandatory field when no city is selected', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.clickСourierRadiobutton();
		await checkoutPage.clickСourierSrteetField();

		await expect(checkoutPage.locators.getСourierErrorMessage()).toBeVisible();

	});

	test('TC 05.01.149 Verify that the "Кур\'єр Запчастюлька" block contains the "Номер будинку*" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.clickСourierRadiobutton();

		await expect(checkoutPage.locators.getСourierHouseField()).toBeVisible();
		await expect(checkoutPage.locators.getСourierHouseFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getСourierHouseFieldLabel()).toHaveText(COURIER_HOUSE_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.150 Verify that the "Кур\'єр Запчастюлька" block contains the "Номер квартири" field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.clickСourierRadiobutton();

		await expect(checkoutPage.locators.getСourierFlatField()).toBeVisible();
		await expect(checkoutPage.locators.getСourierFlatFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getСourierFlatFieldLabel()).toHaveText(COURIER_FLAT_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.151 Verify that the "Спосіб та дані доставки" block contains the "Кур\'єр Нова Пошта" radiobutton', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getСourierNPRadiobutton()).toBeVisible();
		await expect(checkoutPage.locators.getСourierNPRadiobuttonLabelText()).toBeVisible();
		await expect(checkoutPage.locators.getСourierNPRadiobuttonLabelText()).toHaveText(COURIER_NP_LABEL_TEXT);

	});

	test('TC 05.01.152 Verify that the user can select the "Кур\'єр Нова Пошта" radiobutton by clicking on it', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.clickСourierNPRadiobutton();

		await expect(checkoutPage.locators.getСourierNPRadiobutton()).toBeChecked();

	});

	test('TC 05.01.153 Verify that the "Кур\'єр Нова Пошта" block is displayed after clicking on the "Кур\'єр Нова Пошта" radiobutton', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.clickСourierNPRadiobutton();

		await expect(checkoutPage.locators.getСourierNPBlock()).toBeVisible();

	});

	test('TC 05.01.154 Verify that the "Кур\'єр Нова Пошта" block contains the "Введіть назву вулиці*" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.clickСourierNPRadiobutton();

		await expect(checkoutPage.locators.getСourierNPSrteetField()).toBeVisible();
		await expect(checkoutPage.locators.getСourierNPSrteetFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getСourierNPSrteetFieldLabel()).toHaveText(COURIER_NP_STREET_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.155 Verify that the "Введіть назву вулиці*" mandatory field contains the "Введіть назву та оберіть значення.." placeholder', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.clickСourierNPRadiobutton();

		const courierNP = checkoutPage.locators.getСourierNPSrteetField();

		await expect(courierNP).toBeVisible(); 
		await expect(courierNP).toHaveAttribute('placeholder', 'Введіть назву та оберіть значення..');

	});

	test('TC 05.01.156 Verify that the "Ви не обрали місто доставки" message appears after clicking on the "Введіть назву вулиці*" mandatory field when no city is selected', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.clickСourierNPRadiobutton();
		await checkoutPage.clickСourierNPSrteetField();

		await expect(checkoutPage.locators.getСourierNPErrorMessage()).toBeVisible();
		await expect(checkoutPage.locators.getСourierNPErrorMessage()).toHaveText(COURIER_NP_ERROR_MESSAGE_TEXT);

	});

	test('TC 05.01.157 Verify that the "Кур\'єр Нова Пошта" block contains the "Номер будинку*" mandatory field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.clickСourierNPRadiobutton();

		await expect(checkoutPage.locators.getСourierNPHouseField()).toBeVisible();
		await expect(checkoutPage.locators.getСourierNPHouseFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getСourierNPHouseFieldLabel()).toHaveText(COURIER_NP_HOUSE_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.158 Verify that the "Кур\'єр Нова Пошта" block contains the "Номер квартири" field', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await checkoutPage.clickСourierNPRadiobutton();

		await expect(checkoutPage.locators.getСourierNPFlatField()).toBeVisible();
		await expect(checkoutPage.locators.getСourierNPFlatFieldLabel()).toBeVisible();
		await expect(checkoutPage.locators.getСourierNPFlatFieldLabel()).toHaveText(COURIER_NP_FLAT_FIELD_LABEL_TEXT);

	});

	test('TC 05.01.159 Verify that the "Оформлення замовлення" page contains the "Коментар до замовлення" text area', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getComment()).toBeVisible();
		await expect(checkoutPage.locators.getCommentHeader()).toBeVisible();
		await expect(checkoutPage.locators.getCommentHeader()).toHaveText(COMMENT_HEADER_TEXT);

	});

	test('TC 05.01.160 Verify that the user can enter some text to the "Коментар до замовлення" text area', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();
		await checkoutPage.clickComment();
		await checkoutPage.fillComment();

		await expect(checkoutPage.locators.getComment()).toBeVisible();
		await expect(checkoutPage.locators.getComment()).toHaveText(COMMENT_FILL_TEXT);

	});

	test('TC 05.01.161 Verify that the "Коментар має містити не менше 10 символів" message appears after typing less than 10 symbols in the "Коментар до замовлення" text area', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();
		await checkoutPage.clickComment();
		await checkoutPage.fillCommentLess10();
		await checkoutPage.clickPlaceAnOrderButton();

		await expect(checkoutPage.locators.getComment()).toBeVisible();
		await expect(checkoutPage.locators.getComment()).toHaveText(COMMENT_FILL_LESS_10_TEXT);
		await expect(checkoutPage.locators.getCommentErrorMessage()).toBeVisible();

	});

	test('TC 05.01.162 Verify that the "Оформлення замовлення" page contains an information block about the total value of goods', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getInformationBlock()).toBeVisible();
		await expect(checkoutPage.locators.getInformationBlockHrader()).toBeVisible();
		await expect(checkoutPage.locators.getInformationBlockHrader()).toHaveText(INFORMATION_BLOCK_HEADER_TEXT);

	});

	test('TC 05.01.163 Verify that the "Оформлення замовлення" page contain the "Оформити замовлення" button', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getPlaceAnOrderButton()).toBeVisible();
		await expect(checkoutPage.locators.getPlaceAnOrderButton()).toHaveText(PLACE_AN_ORDER_BUTTON_TEXT);

	});

	test('TC 05.01.164 Verify that the "Оформити замовлення" button has a pointer cursor', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getPlaceAnOrderButton()).toBeVisible();
		await expect(checkoutPage.locators.getPlaceAnOrderButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 05.01.165 Verify that the "Оформити замовлення" button is colored blue', async ({ page }) => {
		const checkoutPage = new CheckoutPage(page);

		await checkoutPage.clickLegalEntityButton();

		await expect(checkoutPage.locators.getPlaceAnOrderButton()).toBeVisible();
		await expect(checkoutPage.locators.getPlaceAnOrderButton()).toHaveCSS('background-color', 'rgb(21, 112, 239)');

	});


});