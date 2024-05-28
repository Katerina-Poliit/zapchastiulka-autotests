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
    });

    test('TC 05.01.52 Verify that the "контактнi даннi" block contains the "По батьковi" field', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await expect(orderIndovidual.locators.getMiddleNameField()).toBeVisible();
    });

    test('TC 05.01.53 Verify that the field "По батьковi" accepts letters', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await orderIndovidual.fillMiddleNameField();
        await expect(orderIndovidual.locators.getMiddleNameField()).toBeVisible();
    });

    test('TC 05.01.57 Verify that the "контактнi даннi" block contains the "Номер телефону" field', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await expect(orderIndovidual.locators.getNumberPhoneField()).toBeVisible();
    });

    test('TC 05.01.58  Verify that the "Номер телефона" field is mandatory', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await orderIndovidual.clickPlaceOrderButton();
        await expect(orderIndovidual.locators.getMessageRequiredPhoneNumber()).toBeVisible();
        await expect(orderIndovidual.locators.getMessageRequiredPhoneNumber()).toHaveCSS('color', 'rgb(217, 45, 32)');
    });

    test('TC 05.01.62 Verify that the"Блок  "контактнi даннi" содержит Поле "Ваша электронна адреса"" block contains the "Ваша электронная адреса" field', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await expect(orderIndovidual.locators.getEmailField()).toBeVisible();
    });

    test('TC 05.01.41 Verify that the "Ваша электронна адреса" field is mandatory', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await orderIndovidual.clickPlaceOrderButton();
        await expect(orderIndovidual.locators.getMessageRequiredEmailField()).toBeVisible();
        await expect(orderIndovidual.locators.getMessageRequiredEmailField()).toHaveCSS('color', 'rgb(217, 45, 32)');
    })



});
