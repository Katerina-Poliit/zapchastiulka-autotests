import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage";
import { BASE_URL, HEADER_PRIVACY_POLICY_LINK_TEXT, FOOTER_PUBLIC_OFFER_AGREEMENT_LINK_TEXT, CONTACT_PHONE_NUMBERS } from "../../helpers/testData"
import { BASE_URL, HEADER_PRIVACY_POLICY_LINK_TEXT, FOOTER_PUBLIC_OFFER_AGREEMENT_LINK_TEXT, HEADER_CATALOG_SECTION_TEXT } from "../../helpers/testData"
import { BASE_URL, HEADER_PRIVACY_POLICY_LINK_TEXT, FOOTER_PUBLIC_OFFER_AGREEMENT_LINK_TEXT, HEADER_CATALOG_SECTION_TEXT, FOOTER_SPARE_PARTS_FOR_AGRICULTURAL_MACHINERY_LINK_TEXT } from "../../helpers/testData"



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


	test('TC 02.01.13 verify thatfooter contains the "Контакты" section', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getSectionContacts()).toBeVisible();
		for (const phoneNumber of CONTACT_PHONE_NUMBERS) {
			const phoneNumberSection = await homePage.locators.getPhoneNumbers().innerText()
			expect(phoneNumberSection).toContain(phoneNumber);

		}

	})

	test('ТС.02.01.2 Verify that the website footer contains the "Каталог" section', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCatalogSection()).toBeVisible();
		expect(homePage.locators.getCatalogSection()).toBeTruthy();
		await expect(homePage.locators.getCatalogSection()).toContainText(HEADER_CATALOG_SECTION_TEXT);

	});



	test('ТС.02.01.3 Verify that the "Каталог" section of website footer contains the "Запчастини до сільгосптехніки" link ', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSparePartsForAgriculturalMachineryFooterLink()).toBeVisible();
		expect(homePage.locators.getSparePartsForAgriculturalMachineryFooterLink()).toBeTruthy();
		await expect(homePage.locators.getSparePartsForAgriculturalMachineryFooterLink()).toContainText(FOOTER_SPARE_PARTS_FOR_AGRICULTURAL_MACHINERY_LINK_TEXT);

	});


})

