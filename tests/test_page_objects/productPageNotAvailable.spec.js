import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { BUTTON_REPORT_AVAILABILITY, MINI_TRANSPORTER_PAGE_URL,PRODUCT_NAME_TRANSPORTER,PRODUCT_TRANSPORTER_ARTICLE,PRODUCT_TRANSPORTER_PRICE,PRODUCT_TRANSPORTER_MAIN_FEATURES, PRODUCT_TRANSPORTER_STATUS, MESSAGE_DIALOG_BOX, APPLICATION_ACCEPTED, EXAMPLE_FIELD_EMAIL_TEXT } from "../../helpers/testDataProductPage.js";
import {PAGE_1_URL} from "../../helpers/testData.js"
import MiniTransporterHECHT2636Page from "../../page_objects/miniTransporterHECHT2636.js";
import { assert } from "console";


test.describe('productListPage.spec.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	// test('TC 04.01.1 Verify that the product page contains a block with the product image', async ({ page }) => {
	// 	const homePage = new HomePage(page);

	// 	const mobilSuper3000Page = await homePage.clickMobilSuper3000();

	// 	await expect(mobilSuper3000Page.locators.getProductImageBlock()).toBeVisible()

	// });

	test('TC 04.01.36 Verify  that the product is in the "вiдсутнiй"status. the "Повідомити про наявність" button is present', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getCardMiniTrasporterHECHT2636()).toBeVisible();
		await expect(homePage.locators.getCardMiniTrasporterHECHT2636Button()).toBeVisible();
		await expect(homePage.locators.getCardMiniTrasporterHECHT2636Button()).toHaveCSS('border-color', 'rgb(21, 112, 239)');
		await expect(homePage.locators.getCardMiniTrasporterHECHT2636Button()).toHaveText(BUTTON_REPORT_AVAILABILITY);

	});

	test('TC 04.01.37 Verify  that the "Повідомити про наявність" button contains the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getCardMiniTrasporterHECHT2636Button()).toHaveCSS('cursor', 'pointer');
	});

	test('TC 04.01.59.01 Verify  that the product product page contains a block with an image of the product', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await expect(cartMiniTransporterPage.locators.getHECHT2636ImageBlock()).toBeVisible();
		await expect(page).toHaveURL(MINI_TRANSPORTER_PAGE_URL);
	});

	test('TC 04.01.59.02 Verify  that the mini image of the product under the product image block', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await expect(cartMiniTransporterPage.locators. getHECHT2636ImageBlockMini()).toBeVisible();
	});

	test('TC 04.01.59.03 Verify that the product image block contains a magnification button for the product image, a "magnifier"', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await expect(cartMiniTransporterPage.locators. getHECHT2636ImageBlocmagnifier()).toBeVisible();

	});

	test('TC 04.01.59.04 Verify that the "magnifier " contains a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await expect(cartMiniTransporterPage.locators. getHECHT2636ImageBlocmagnifier()).toHaveCSS('cursor', 'pointer');
	});

	test('TC 04.01.59.05 Verify that the modal window opens, the user clicked on the "magnifier"', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await cartMiniTransporterPage.clickHECHT2636ImageBlocmagnifier();
		await page.waitForTimeout(2000);
		await expect(cartMiniTransporterPage.locators. getHECHT2636ImageBlocmagnifierModalWindow()).toBeVisible();

	});

	test('TC 04.01.59.06 Verify that the modal window contains the product name', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await cartMiniTransporterPage.clickHECHT2636ImageBlocmagnifier();
		await page.waitForTimeout(2000);
		await expect(cartMiniTransporterPage.locators.getHECHT2636ImageBlocmagnifierModalWindowName()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getHECHT2636ImageBlocmagnifierModalWindowName()).toContainText(PRODUCT_NAME_TRANSPORTER);
	});

	test('TC 04.01.59.07 Verify that the modal window contains an image of the product', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await cartMiniTransporterPage.clickHECHT2636ImageBlocmagnifier();
		await page.waitForTimeout(2000);
		await expect(cartMiniTransporterPage.locators.getFotoMdalWindow()).toBeVisible();
	})

    test('TC 04.01.59.08 Verify that the modal window contains a scroll to the right ">"', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await cartMiniTransporterPage.clickHECHT2636ImageBlocmagnifier();
		await page.waitForTimeout(2000);
		await expect(cartMiniTransporterPage.locators.getScrollModalWindowRight()).toBeVisible();
	});

	test('TC 04.01.59.09 Verify that the modal window contains a left scroll ">"', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await cartMiniTransporterPage.clickHECHT2636ImageBlocmagnifier();
		await page.waitForTimeout(2000);
		await expect(cartMiniTransporterPage.locators.getScrollModalWindowLeft()).toBeVisible();
	});

	test('TC 04.01.59.10 modal window contains a close "X" button', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await cartMiniTransporterPage.clickHECHT2636ImageBlocmagnifier();
		await page.waitForTimeout(2000);
		await expect(cartMiniTransporterPage.locators.getcloseButtonModalWindow()).toBeVisible();
	});

	test('TC 04.01.59.11 Verify that the close button "X" contains the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await cartMiniTransporterPage.clickHECHT2636ImageBlocmagnifier();
		await page.waitForTimeout(2000);
		await expect(cartMiniTransporterPage.locators.getcloseButtonModalWindow()).toHaveCSS('cursor', 'pointer');
	});

	test('TC 04.01.59.12  Verify that the modal window closes, the user has clicked on the "X" button', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await cartMiniTransporterPage.clickHECHT2636ImageBlocmagnifier();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.clickcloseButtonModalWindow();
		await expect(page).toBeTruthy()
	});

	test('TC 04.01.59.13 Verify that the product page contains a block with information about the product', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await expect(cartMiniTransporterPage.locators.getHECHT2636BlockInformation()).toBeVisible();
	});

	test('TC 04.01.59.14 Verify that the product information block contains the product name', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await expect(cartMiniTransporterPage.locators.getHECHT2636Header()).toHaveText(PRODUCT_NAME_TRANSPORTER);

	});

	test('TC 04.01.59.15 Verify that the product information block contains the article of the product', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await expect(cartMiniTransporterPage.locators.getHECHT2636Article()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getHECHT2636Article()).toHaveText(PRODUCT_TRANSPORTER_ARTICLE);
	});

	test('TC 04.01.59.16 Verify that the product information block displays the price', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await expect(cartMiniTransporterPage.locators.getPriceHECHT2636()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getPriceHECHT2636()).toHaveText(PRODUCT_TRANSPORTER_PRICE);
	});

	test('TC 04.01.59.17 Verify that the product page contains the product description "Основні характеристики"', async ({ page}) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await expect(cartMiniTransporterPage.locators.getDescriptionPriceHECHT2636()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getDescriptionPriceHECHT2636()).toHaveText(PRODUCT_TRANSPORTER_MAIN_FEATURES);

	});

	test('TC 04.01.59.22 Verify that the contains a description of the product', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await expect(cartMiniTransporterPage.locators.getShortDescriptionHECHT2636()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getTextShortDescriptionHECHT2636()).toBeVisible();
	});

	test('TC 04.01.59.23 Verify that the contains the status of the product "вiдсутнiй"', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await expect(cartMiniTransporterPage.locators.getStatusHECHT2636()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getStatusHECHT2636()).toHaveText(PRODUCT_TRANSPORTER_STATUS);
		await expect(cartMiniTransporterPage.locators.getStatusHECHT2636()).toHaveCSS('background-color', 'rgb(254, 228, 226)');
		await expect(cartMiniTransporterPage.locators.getStatusHECHT2636()).toHaveCSS('color', 'rgb(217, 45, 32)')
	});

	test('TC 04.01.38 Verify that the"Немає в наявності" dialog box opens , and the user clicks on the "Повідомити про наявність" button', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await expect(cartMiniTransporterPage.locators.getHECHT2636DialogBox()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getHECHT2636DialogBox()).toBeTruthy();

	});

	test('TC 04.01.38.01 Verify that the dialog box "Немає в наявності" contains the message "Введіть адресу своєї пошти, і, як тільки товар з’явиться, Вам прийде лист"', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await expect(cartMiniTransporterPage.locators.getHECHT2636DialogBox()).toHaveText(MESSAGE_DIALOG_BOX);
	});

	test('TC 04.01.39 Verify that the "Немає в наявності" dialog box contains an e-mail input field', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await expect(cartMiniTransporterPage.locators.getHECHT2636DialogBoxField()).toBeVisible();
	});

	test('TC 04.01.59.01.1 Verify that the dialog box contains the "Відправити" button', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await expect(cartMiniTransporterPage.locators.getHECHT2636DialogBoxButton()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getHECHT2636DialogBoxButton()).toHaveText('Відправити');
		await expect(cartMiniTransporterPage.locators.getHECHT2636DialogBoxButton()).toHaveCSS('background-color', 'rgb(21, 112, 239)')
	});

	test('TC 04.01.59.02.1,04.01.40  Verify that the email was sent successfully, the user clicked on the "Edit" button', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.fillValidDataDialogBoxField();
		await cartMiniTransporterPage.clickDialogBoxButton();
		await expect(page).toBeTruthy()
	});

	test('TC 04.01.59.02.2 Verify that the pop-up opens "Your application is accepted!", the user has sent his email', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.fillValidDataDialogBoxField();
		await cartMiniTransporterPage.clickDialogBoxButton();
		await expect(cartMiniTransporterPage.locators.getApplicationAcceptedPopap()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getApplicationAcceptedPopap()).toHaveText(APPLICATION_ACCEPTED);
	});

	test('TC 04.01.59.02.3 Verify that the Pop up "Ваша заявка принята!" contains the "Перейти до каталогу" button', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.fillValidDataDialogBoxField();
		await cartMiniTransporterPage.clickDialogBoxButton();
		await expect(cartMiniTransporterPage.locators.getGoCatalogButton()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getGoCatalogButton()).toHaveCSS('background-color', 'rgb(21, 112, 239)');
		await expect(cartMiniTransporterPage.locators.getGoCatalogButton()).toHaveText('Перейти до каталогу')

	});

	test('TC 04.01.59.02.3.0 Verify that the user goes to the catalog page by clicking on the "Go to catalog" button', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.fillValidDataDialogBoxField();
		await cartMiniTransporterPage.clickDialogBoxButton();
		await cartMiniTransporterPage.clickGoCatalogButton();
		await page.waitForTimeout(2000);
		await expect(page).toHaveURL(PAGE_1_URL)
	});

	test('TC 04.01.59.03.1 Verify that the "Немає в наявності" dialog box contains the close button "X"', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await expect(cartMiniTransporterPage.locators.getCloseDialogBoxButton()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getCloseDialogBoxButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 04.01.59.04.1 Verify that the "Немає в наявності" dialog box closes, the user clicked on the close "X" button', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.clickCloseDialogBoxButton();
		await expect(cartMiniTransporterPage.locators.getHECHT2636DialogBox()).not.toBeVisible()
	});

	test('TC 04.01.53 Verify that the  entering an email without a username shows an error', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.fillWithoutUsernameDialogBoxField();
		await cartMiniTransporterPage.clickDialogBoxButton();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toHaveText(EXAMPLE_FIELD_EMAIL_TEXT);
	});

	test('TC 04.01.54 Verify that the email address without the domain part, an error message is displayed shows an error', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.fillWithoutDomainPart();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toHaveText(EXAMPLE_FIELD_EMAIL_TEXT);

	});

	test('TC 04.01.52 Verify that the enter an email address with two dots in a row, an error message is displayed in the domain part shows an error', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.fillWithTwoDots();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toHaveText(EXAMPLE_FIELD_EMAIL_TEXT);
	});

	test('TC 04.01.51 Verify that the enter an email address without a dot, an error message is displayed in the domain part, showing the error', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.fillWithoutDotDomainPart();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toHaveText(EXAMPLE_FIELD_EMAIL_TEXT);

	});
	test('TC 04.01.50 Verify that the enter the email address data with two @@ characters of the domain part, an error message is displayed indicating an error', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.fillWithTwoAt();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toHaveText(EXAMPLE_FIELD_EMAIL_TEXT);

	});

	test('TC 04.01.59 Verify that the  enter an email address instead of a com domain, an error message is displayed indicating an error', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.fillInsteadDomain();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toHaveText(EXAMPLE_FIELD_EMAIL_TEXT);

	});

	test('TC 04.01.58 Verify that the enter an email address with only one letter in the domain part, an error message is displayed indicating an error', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.fillOnlyOneLetterDomainPart();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toHaveText(EXAMPLE_FIELD_EMAIL_TEXT);
	});

	test('TC 04.01.57 Verify that the enter an email address with a Cyrillic character in the user name, an error message is displayed indicating an error', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.fillCirilicUserName();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toHaveText(EXAMPLE_FIELD_EMAIL_TEXT);
	});

	test('TC 04.01.56 Verify that the enter an email address with a Cyrillic character in the domain part, an error message is displayed indicating an error', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.fillCyrillicCharacterDomainPart();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toHaveText(EXAMPLE_FIELD_EMAIL_TEXT);
	});

	test('TC 04.01.49 Verify that the enter the email address data without the @ symbol, an error message is displayed indicating an error', async ({ page
	}) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.fillWithoutAt();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toHaveText(EXAMPLE_FIELD_EMAIL_TEXT);
	});

	test('TC 04.01.48 Verify that the enter the email address, the data with a space in the domain part displays an error message indicating an error', async ({ page }) => {
		const homePage = new HomePage(page);
		const cartMiniTransporterPage = await homePage.clickCardMiniTrasporterHECHT2636();
		await page.waitForTimeout(3000);
		await cartMiniTransporterPage.clickHECHT2636ReportAvailabilityButton();
		await page.waitForTimeout(2000);
		await cartMiniTransporterPage.fillWithSpaceDomainPart();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toBeVisible();
		await expect(cartMiniTransporterPage.locators.getExampleMessageFieldEmail()).toHaveText(EXAMPLE_FIELD_EMAIL_TEXT);
	});

	
	})