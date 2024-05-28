import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { } from "../../helpers/testDataOrderPlacementIndividualPage.js";
import OrderPlacementIndividualPage from "../../page_objects/orderPlacementIndividualPage.js";

test.describe('orderPlacementIndividual.spec', () => {
	test.beforeEach(async ({ page }) => {

		const homePage = new HomePage(page);
        await homePage.open();

        await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		const orderIndovidual = await cartWithProductsPage.clickCheckoutButton2();

	});

    test('TC 05.01.38 Verify that the "Оформлення замовлення" page contains the "контактнi даннi" block', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await expect(orderIndovidual.locators.getContactDetailsBlock()).toBeVisible();
        await expect(orderIndovidual.locators.getContactDetailsBlock()).toHaveText('Контактні дані');

    });

    test('TC 05.01.39 Verify that the"Оформлення замовлення" page contains the "фiзична особа"button', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await expect(orderIndovidual.locators.getIndividualButton()).toBeVisible();
        await expect(orderIndovidual.locators.getIndividualButton()).toHaveText('Фізична особа');
    });

    test('TC 05.01.39.1  Verify that the "фiзична особа" button contains a pointer cursor', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await expect(orderIndovidual.locators.getIndividualButton()).toHaveCSS('cursor', 'pointer');
        await expect(orderIndovidual.locators.getIndividualButton()).toHaveCSS('background-color', 'rgb(46, 144, 250)');
    });

    test('TC 05.01.40 Verify that the "Оформлення замовленняr " page contains the"юридична особа" button', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await expect(orderIndovidual.locators.getLegalEntityButton()).toBeVisible();
        await expect(orderIndovidual.locators.getLegalEntityButton()).toHaveCSS('cursor', 'pointer');
        await expect(orderIndovidual.locators.getLegalEntityButton()).toHaveCSS('border-color', 'rgb(198, 202, 205)');
        await expect(orderIndovidual.locators.getLegalEntityButton()).toHaveText('Юридична особа');

    });

    test(' TC 05.01.104  Verify that the "Оформлення замовлення" page contains the "Ваше замовлення"frame', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await expect(orderIndovidual.locators.getFrame()).toBeVisible();
        await expect(orderIndovidual.locators.getFrame()).toHaveCSS('background-color', 'rgb(249, 249, 249)')

    });

    test('TC 05.01.42 Verify that the "контактнi даннi" block contains the "Iмя" field', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await expect(orderIndovidual.locators.getNameField()).toBeVisible();

    });

    test('TC 05.01.43 Verify that the "Iм я" field accepts letters', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await orderIndovidual.fillNameField();
        await expect(orderIndovidual.locators.getNameField()).toBeVisible();
    });

    test('TC 05.01.46 Verify that the "I" field is required, a message has been received', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await orderIndovidual.clickPlaceOrderButton();
        await expect(orderIndovidual.locators.getMessageRequiredFieldName()).toBeVisible();
        await expect(orderIndovidual.locators.getMessageRequiredFieldName()).toHaveCSS('color', 'rgb(217, 45, 32)');

    });

    test('TC 05.01.47 Verify that the "контактнi даннi" block contains The "Прiзвище"field', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await expect(orderIndovidual.locators. gatLastNameField()).toBeVisible();
    });

    test('TC 05.01.48 Verify that the "Прiзвище" field accepts letters', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await orderIndovidual.fillLastNameField();
        await expect(orderIndovidual.locators.gatLastNameField()).toBeVisible();
    });

    test('TC 05.01.51 Verify that the"Прiзвище" field is mandatory', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await orderIndovidual.clickPlaceOrderButton();
        await expect(orderIndovidual.locators.getMessageRequiredLastName()).toBeVisible();
        await expect(orderIndovidual.locators.getMessageRequiredLastName()).toHaveCSS('color', 'rgb(217, 45, 32)');
    })









});
