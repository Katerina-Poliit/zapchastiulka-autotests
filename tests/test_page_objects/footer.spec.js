import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage";
import { BASE_URL, HEADER_PRIVACY_POLICY_LINK_TEXT } from "../../helpers/testData"

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

	test('ТС.02.01.1.Verify that the website footer contains the store logo', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(page).toHaveURL(BASE_URL);
		await expect(homePage.locators.getLogoFooter()).toBeVisible();
		expect(homePage.locators.getLogoFooter()).toBeTruthy();

	});
})

