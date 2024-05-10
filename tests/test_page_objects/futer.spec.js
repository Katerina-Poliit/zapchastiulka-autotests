import { test, expect } from "@playwright/test";
import FuterPage from "../../page_objects/futer";
import HomePage from "../../page_objects/homePage";

test.describe('futer.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

    test('TC 02.01.11 verify section "Покупцевi" contains "Политика конфiденцiйностi"', async ({ page }) => {
		const homePage = new HomePage(page);
        const futerPage = new FuterPage(page);

        await expect(futerPage.locators.getFuterBuyer()).toBeVisible();
		await expect(futerPage.locators.getPrivacyPolicy()).toBeVisible();
		await expect(futerPage.locators.getPrivacyPolicy()).toHaveText('Політика конфіденційності');

	});
})

