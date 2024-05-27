import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import {ORDER_INDIVIDUAL_URL } from "../../helpers/testDataOrderPlacementIndividualPage.js";
import MobilSuper3000Page from "../../page_objects/mobilSuper3000.js";
import ModalWindowCartWithProducts from "../../page_objects/modalWindowCartWithProducts.js";
import OrderPlacementIndividualPage from "../../page_objects/orderPlacementIndividualPage.js";

test.describe('orderPlacementIndividual.spec', () => {
	test.beforeEach(async ({ page }) => {

		const homePage = new HomePage(page);
        const cartWihtProductPage = new MobilSuper3000Page(page);
        const checkoutPage = new ModalWindowCartWithProducts(page);
        const orderIndovidual = new OrderPlacementIndividualPage(page);

		await homePage.open();

        await homePage.clickMobilSuper3000ToCart();
        await homePage.clickCartButtonToCartWithProductsPage();
        await checkoutPage.clickPlaceAnOrderButton();


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

    })




});
