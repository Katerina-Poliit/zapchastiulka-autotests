import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage";
import { BASE_URL, HEADER_PRIVACY_POLICY_LINK_TEXT, FOOTER_PUBLIC_OFFER_AGREEMENT_LINK_TEXT, HEADER_CATALOG_SECTION_TEXT, FOOTER_SPARE_PARTS_FOR_AGRICULTURAL_MACHINERY_LINK_TEXT, FOOTER_SPARE_PARTS_FOR_TRUCKS_LINK_TEXT, FOOTER_OILS_AND_AUTOMOTIVE_CHEMICAL_PRODUCTS_LINK_TEXT, FOOTER_TIRES_AND_TUBES_LINK_TEXT, CONTACT_PHONE_NUMBERS, FOOTER_WORK_SCHEDULE_LIST, FOOTER_FILTERS_LINK_TEXT, FOOTER_BEARINGS_LINK_TEXT, FOOTER_OTHER_PRODUCTS_LINK_TEXT, HEADER_TO_THE_BUYER_SECTION_TEXT } from "../../helpers/testData"

test.describe('footer.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	test('TC 02.01.11 verify that section "Покупцевi" contains "Политика конфiденцiйностi"', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getToTheBuyer()).toBeVisible();
		await expect(homePage.locators.getPrivacyPolicy()).toBeVisible();
		await expect(homePage.locators.getPrivacyPolicy()).toHaveText(HEADER_PRIVACY_POLICY_LINK_TEXT);

	});

	test('ТС.02.01.1 Verify that the website footer contains the store logo', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(page).toHaveURL(BASE_URL);
		await expect(homePage.locators.getLogoFooter()).toBeVisible();
		expect(homePage.locators.getLogoFooter()).toBeTruthy();

	});

	test('TC 02.01.12 verify that section "Покупцеві" section contains the "Договір публічної оферти"', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getToTheBuyer()).toBeVisible();
		const buyerSectionText = await homePage.locators.getPublicOfferAgreementLink().innerText();
		expect(buyerSectionText).toContain(FOOTER_PUBLIC_OFFER_AGREEMENT_LINK_TEXT);

	});

	test('ТС.02.01.2 Verify that the website footer contains the "Каталог" section', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCatalogSectionFooter()).toBeVisible();
		expect(homePage.locators.getCatalogSectionFooter()).toBeTruthy();
		
		await expect(homePage.locators.getHeaderCatalogSectionFooter()).toBeVisible();
		expect(homePage.locators.getHeaderCatalogSectionFooter()).toBeTruthy();
		await expect(homePage.locators.getHeaderCatalogSectionFooter()).toContainText(HEADER_CATALOG_SECTION_TEXT);

	});

	test('ТС.02.01.3 Verify that the "Каталог" section of website footer contains the "Запчастини до сільгосптехніки" link ', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSparePartsForAgriculturalMachineryFooterLink()).toBeVisible();
		expect(homePage.locators.getSparePartsForAgriculturalMachineryFooterLink()).toBeTruthy();
		await expect(homePage.locators.getSparePartsForAgriculturalMachineryFooterLink()).toContainText(FOOTER_SPARE_PARTS_FOR_AGRICULTURAL_MACHINERY_LINK_TEXT);

	});

	test('ТС.02.01.4 Verify that the "Каталог" section of website footer contains the "Запчастини для вантажних автомобiлiв" link ', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSparePartsForTrucksFooterLink()).toBeVisible();
		expect(homePage.locators.getSparePartsForTrucksFooterLink()).toBeTruthy();
		await expect(homePage.locators.getSparePartsForTrucksFooterLink()).toContainText(FOOTER_SPARE_PARTS_FOR_TRUCKS_LINK_TEXT);

	});

	test('ТС.02.01.5 Verify that the "Каталог" section of website footer contains the "Масла i автохiмiя" link ', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getOilsAndAutomotiveChemicalsFooterLink()).toBeVisible();
		expect(homePage.locators.getOilsAndAutomotiveChemicalsFooterLink()).toBeTruthy();
		await expect(homePage.locators.getOilsAndAutomotiveChemicalsFooterLink()).toContainText(FOOTER_OILS_AND_AUTOMOTIVE_CHEMICAL_PRODUCTS_LINK_TEXT);

	});

	test('ТС.02.01.6 Verify that the "Каталог" section of website footer contains the "Шини та камери" link ', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getTiresAndTubesFooterLink()).toBeVisible();
		expect(homePage.locators.getTiresAndTubesFooterLink()).toBeTruthy();
		await expect(homePage.locators.getTiresAndTubesFooterLink()).toContainText(FOOTER_TIRES_AND_TUBES_LINK_TEXT);

	});

	test('TC 02.01.13 verify that footer contains the "Контакты" section', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getSectionContacts()).toBeVisible();
		for (const phoneNumber of CONTACT_PHONE_NUMBERS) {
			const phoneNumberSection = await homePage.locators.getPhoneNumbers().innerText()
			expect(phoneNumberSection).toContain(phoneNumber);

		}

	});

	test('TC 02.01.15 verify that footer contains the section "Графiк роботи"', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getWorkScheduleSection()).toBeVisible();
	});


	test('TC 02.01.16 verify that section "Графiк роботи" contains the work schedule', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getWorkScheduleList()).toBeTruthy();
		for (const item of FOOTER_WORK_SCHEDULE_LIST) {
			await expect(homePage.locators.getWorkScheduleList()).toContainText(item);

		}
	});

	test('ТС.02.01.18 Verify that the "Каталог" section of website footer contains the "Фільтри" link ', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getFiltersFooterLink()).toBeVisible();
		expect(homePage.locators.getFiltersFooterLink()).toBeTruthy();
		await expect(homePage.locators.getFiltersFooterLink()).toContainText(FOOTER_FILTERS_LINK_TEXT);

	});

	test('ТС.02.01.19 Verify that the "Каталог" section of website footer contains the "Підшипники" link ', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getBearingsFooterLink()).toBeVisible();
		expect(homePage.locators.getBearingsFooterLink()).toBeTruthy();
		await expect(homePage.locators.getBearingsFooterLink()).toContainText(FOOTER_BEARINGS_LINK_TEXT);

	});

	test('ТС.02.01.20 Verify that the "Каталог" section of website footer contains the "Інші товари" link ', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getOtherProductsFooterLink()).toBeVisible();
		expect(homePage.locators.getOtherProductsFooterLink()).toBeTruthy();
		await expect(homePage.locators.getOtherProductsFooterLink()).toContainText(FOOTER_OTHER_PRODUCTS_LINK_TEXT);

	});

	test('ТС.02.01.7 Verify that the website footer contains the "Покупцевi" section', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getToTheBuyerSectionFooter()).toBeVisible();
		expect(homePage.locators.getToTheBuyerSectionFooter()).toBeTruthy();
		
		await expect(homePage.locators.getHeaderToTheBuyerSectionFooter()).toBeVisible();
		expect(homePage.locators.getHeaderToTheBuyerSectionFooter()).toBeTruthy();
		await expect(homePage.locators.getHeaderToTheBuyerSectionFooter()).toContainText(HEADER_TO_THE_BUYER_SECTION_TEXT);

	});

})