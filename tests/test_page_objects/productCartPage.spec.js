import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { EMPTY_CART_HEADER_TEXT, GO_TO_CATALOG_BUTTON_TEXT, EMPTY_CART_NAME_TEXT, CLEAR_THE_CART_BUTTON_NAME_TEXT, MODAL_WINDOW_EMPTY_CART_TEXT, CART_WITH_PRODUCTS_HEADER_TEXT, CANSEL_BUTTON_TEXT, CLEAR_THE_CART_MODAL_WINDOW_HEADER_TEXT, MODAL_WINDOW_TEXT, ALL_INFORMATION_TEXT, CHECKOUT_BUTTON_TEXT, CHECKOUT_PAGE_URL, CHECKOUT_PAGE_HEADER_TEXT, PRODUCT_NAME_TEXT, PRODUCT_ARTICLE_TEXT } from "../../helpers/testDataProductCartPage.js";


test.describe('productCartPage.spec.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	test('TC 05.01.1 Verify that the user can go to the "Empty Cart" modal window by clicking on the "Cart" icon in the header of the site', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getModalWindow()).toBeVisible();
		await expect(emptyCartPage.locators.getModalWindowHeader()).toBeVisible();
		await expect(emptyCartPage.locators.getModalWindowHeader()).toHaveText(EMPTY_CART_HEADER_TEXT);

	});

	test('TC 05.01.2 Verify that the "Empty Cart" modal window contain the "Перейти до каталогу" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getGoToCatalogButton()).toBeVisible();
		await expect(emptyCartPage.locators.getGoToCatalogButton()).toHaveText(GO_TO_CATALOG_BUTTON_TEXT);

	});

	test('TC 05.01.3 Verify that the "Перейти до каталогу" button is colored blue', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getGoToCatalogButton()).toBeVisible();
		await expect(emptyCartPage.locators.getGoToCatalogButton()).toHaveCSS('background-color', 'rgb(21, 112, 239)');

	});

	test('TC 05.01.4 Verify that the "Перейти до каталогу" button has the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getGoToCatalogButton()).toBeVisible();
		await expect(emptyCartPage.locators.getGoToCatalogButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 05.01.5 Verify that the "Empty Cart" modal window contain the close "X" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getCloseXButton()).toBeVisible();

	});

	test('TC 05.01.5.1 Verify that the close "X" button has the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getCloseXButton()).toBeVisible();
		await expect(emptyCartPage.locators.getCloseXButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 05.01.5.2 Verify that the "Empty Cart" modal window closes after clicking on the close "X" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getModalWindow()).toBeVisible();

		await emptyCartPage.clickCloseXButton();

		await expect(emptyCartPage.locators.getModalWindow()).not.toBeVisible();

	});

	test('TC 05.01.6 Verify that the "Empty Cart" modal window contain the icon', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getIcon()).toBeVisible();

	});

	test('TC 05.01.6.1 Verify that the "Empty Cart" modal window contain the "Кошик порожній" name', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getEmptyCartName()).toBeVisible();
		await expect(emptyCartPage.locators.getEmptyCartName()).toHaveText(EMPTY_CART_NAME_TEXT);

	});

	test('TC 05.01.6.2 Verify that the "Empty Cart" modal window contains the disabled "Очистити кошик" button', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getClearTheCartButton()).toBeVisible();
		await expect(emptyCartPage.locators.getClearTheCartButton()).toHaveText(CLEAR_THE_CART_BUTTON_NAME_TEXT);

		// Делаю именно такую проверку, а не toBeDisabled() из-за специфики написанного кода
		await expect(emptyCartPage.locators.getClearTheCartButton()).not.toHaveCSS('cursor', 'pointer');
	});

	test('TC 05.01.6.3 Verify that the "Empty Cart" modal window contains the "Почніть додавати товари прямо зараз!" text', async ({ page }) => {
		const homePage = new HomePage(page);

		const emptyCartPage = await homePage.clickCartButtonToEmptyPage();

		await expect(emptyCartPage.locators.getModalWindowEmptyCartText()).toBeVisible();
		await expect(emptyCartPage.locators.getModalWindowEmptyCartText()).toHaveText(MODAL_WINDOW_EMPTY_CART_TEXT);

	});

	test('TC 05.01.7 Verify that the user can go to the "Cart with products" modal window by clicking on the "Cart" icon in the header of the site', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getModalWindow()).toBeVisible();
		await expect(cartWithProductsPage.locators.getModalWindowHeader()).toBeVisible();
		await expect(cartWithProductsPage.locators.getModalWindowHeader()).toHaveText(CART_WITH_PRODUCTS_HEADER_TEXT);

	});

	test('TC 05.01.8 Verify that the "Cart with products" modal window containes the "Очистити кошик" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getClearTheCartButton()).toBeVisible();
		await expect(cartWithProductsPage.locators.getClearTheCartButton()).toHaveText(CLEAR_THE_CART_BUTTON_NAME_TEXT);

	});

	test('TC 05.01.9 Verify that the "Очистити кошик" modal window opens after clicking on the "Очистити кошик" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		const modalWindowClearTheCart = await cartWithProductsPage.clickClearTheCartButton();

		await expect(modalWindowClearTheCart.locators.getModalWindow()).toBeVisible();

	});

	test('TC 05.01.10 Verify that the "Очистити кошик" modal window contains "Видалити товари" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		const modalWindowClearTheCart = await cartWithProductsPage.clickClearTheCartButton();

		await expect(modalWindowClearTheCart.locators.getRemoveTheProductsButton()).toBeVisible();

	});

	test('TC 05.01.11 Verify that the "Видалити товари" button has the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		const modalWindowClearTheCart = await cartWithProductsPage.clickClearTheCartButton();

		await expect(modalWindowClearTheCart.locators.getRemoveTheProductsButton()).toBeVisible();
		await expect(modalWindowClearTheCart.locators.getRemoveTheProductsButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 05.01.12 Verify that the "Видалити товари" button is colored red', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		const modalWindowClearTheCart = await cartWithProductsPage.clickClearTheCartButton();

		await expect(modalWindowClearTheCart.locators.getRemoveTheProductsButton()).toBeVisible();
		await expect(modalWindowClearTheCart.locators.getRemoveTheProductsButton()).toHaveCSS('background-color', 'rgb(217, 45, 32)');

	});

	test('TC 05.01.13 Verify that the "Очистити кошик" modal window contains "Відминити" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		const modalWindowClearTheCart = await cartWithProductsPage.clickClearTheCartButton();

		await expect(modalWindowClearTheCart.locators.getCanselButton()).toBeVisible();
		await expect(modalWindowClearTheCart.locators.getCanselButton()).toHaveText(CANSEL_BUTTON_TEXT);

	});

	test('TC 05.01.14 Verify that the "Відминити" button has the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		const modalWindowClearTheCart = await cartWithProductsPage.clickClearTheCartButton();

		await expect(modalWindowClearTheCart.locators.getCanselButton()).toBeVisible();
		await expect(modalWindowClearTheCart.locators.getCanselButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 05.01.15 Verify that the "Відминити" button is colored white', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		const modalWindowClearTheCart = await cartWithProductsPage.clickClearTheCartButton();

		await expect(modalWindowClearTheCart.locators.getCanselButton()).toBeVisible();
		await expect(modalWindowClearTheCart.locators.getCanselButton()).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');

	});

	test('TC 05.01.16 Verify that the "Очистити кошик" modal window contains "Очистити кошик" header', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		const modalWindowClearTheCart = await cartWithProductsPage.clickClearTheCartButton();

		await expect(modalWindowClearTheCart.locators.getClearTheCartModalWindowHeader()).toBeVisible();
		await expect(modalWindowClearTheCart.locators.getClearTheCartModalWindowHeader()).toHaveText(CLEAR_THE_CART_MODAL_WINDOW_HEADER_TEXT);

	});

	test('TC 05.01.17 Verify that the "Очистити кошик" modal window contains the icon', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		const modalWindowClearTheCart = await cartWithProductsPage.clickClearTheCartButton();

		await expect(modalWindowClearTheCart.locators.getIcon()).toBeVisible();

	});

	test('TC 05.01.18 Verify that the "Очистити кошик" modal window contains the "Ви впевнені, що хочете видалити товари? Відмінити цю дію неможливо." text', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		const modalWindowClearTheCart = await cartWithProductsPage.clickClearTheCartButton();

		await expect(modalWindowClearTheCart.locators.getModalWindowText()).toBeVisible();
		await expect(modalWindowClearTheCart.locators.getModalWindowText()).toHaveText(MODAL_WINDOW_TEXT);

	});

	test('TC 05.01.19 Verify that the product is successfully removed after clicking on the "Видалити товари" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		const modalWindowClearTheCart = await cartWithProductsPage.clickClearTheCartButton();
		const emptyCart = await modalWindowClearTheCart.clickRemoveTheProductsButton();

		await expect(modalWindowClearTheCart.locators.getModalWindow()).not.toBeVisible();
		await expect(emptyCart.locators.getModalWindow()).toBeVisible();
		await expect(emptyCart.locators.getEmptyCartName()).toHaveText(EMPTY_CART_NAME_TEXT);

	});

	test('TC 05.01.20 Verify that the "Cart with products" modal window contains the close (cross) button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getCloseXButton()).toBeVisible();

	});

	test('TC 05.01.21 Verify that the close (cross) button has the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getCloseXButton()).toBeVisible();
		await expect(cartWithProductsPage.locators.getCloseXButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 05.01.22 Verify that "Cart with products" modal window is closed after clicking on the close (cross) button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		await cartWithProductsPage.clickCloseXButton();

		await expect(cartWithProductsPage.locators.getModalWindow()).not.toBeVisible();

	});

	test('TC 05.01.23 Verify that the "Cart with products" modal window contains the "ВСЬОГО:" information about the order amount', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getAllInformation()).toBeVisible();
		await expect(cartWithProductsPage.locators.getAllInformation()).toHaveText(ALL_INFORMATION_TEXT);

	});

	test('TC 05.01.24 Verify that the "Cart with products" modal window contains the "Оформити замовлення" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getCheckoutButton()).toBeVisible();
		await expect(cartWithProductsPage.locators.getCheckoutButton()).toHaveText(CHECKOUT_BUTTON_TEXT);

	});

	test('TC 05.01.25 Verify that the "Оформити замовлення" button has the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getCheckoutButton()).toBeVisible();
		await expect(cartWithProductsPage.locators.getCheckoutButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 05.01.26 Verify that the "Оформити замовлення" button is colored blue', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getCheckoutButton()).toBeVisible();
		await expect(cartWithProductsPage.locators.getCheckoutButton()).toHaveCSS('background-color', 'rgb(21, 112, 239)');

	});

	test('TC 05.01.27 Verify that the user navigates to the "Оформлення замовлення" page after clicking on the "Оформити замовлення" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		const checkoutPage = await cartWithProductsPage.clickCheckoutButton();

		await expect(page).toHaveURL(CHECKOUT_PAGE_URL);

		await expect(checkoutPage.locators.getHeader()).toBeVisible();
		await expect(checkoutPage.locators.getHeader()).toHaveText(CHECKOUT_PAGE_HEADER_TEXT);

	});

	test('TC 05.01.27.1 Verify that the user navigates to the "Оформлення замовлення" page after clicking on the "Назад до кошика" breadcrumb link', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();
		const checkoutPage = await cartWithProductsPage.clickCheckoutButton();
		await checkoutPage.clickBreadcrumbs();

		await expect(cartWithProductsPage.locators.getModalWindow()).toBeVisible();

	});

	test('TC 05.01.28 Verify that the "Cart with products" modal window contains the items of the order products', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getItemsOfTheOrderProducts()).toBeVisible();

	});

	test('TC 05.01.29 Verify that the items of the ordered products contain the "- 1 +" product counter button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getProductCounterButton()).toBeVisible();

	});

	test('TC 05.01.30 Verify that user can add a unit by clicking on the " + " product counter', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getProductsValue()).toBeVisible();
		await expect(cartWithProductsPage.locators.getProductsValue()).toHaveText('1');

		await cartWithProductsPage.clickAddProductButton();

		await expect(cartWithProductsPage.locators.getProductsValue()).toHaveText('2');

	});

	test('TC 05.01.30.1 Verify that the user can add a unit by clicking on the '+' product counter and the price changes', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getPrice()).toBeVisible();
		await expect(cartWithProductsPage.locators.getPrice()).toHaveText('1233 ₴');

		await cartWithProductsPage.clickAddProductButton();

		await expect(cartWithProductsPage.locators.getPrice()).toBeVisible();
		await expect(cartWithProductsPage.locators.getPrice()).toHaveText('2466 ₴');

	});

	test('TC 05.01.30.2 Verify that the user can add a unit by clicking on the '+' product counter and the "ВСЬОГО:" information changes', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getAllPrice()).toBeVisible();
		await expect(cartWithProductsPage.locators.getAllPrice()).toHaveText('1233');

		await cartWithProductsPage.clickAddProductButton();

		await expect(cartWithProductsPage.locators.getAllPrice()).toBeVisible();
		await expect(cartWithProductsPage.locators.getAllPrice()).toHaveText('2466');

	});

	test('TC 05.01.31 Verify that user can remove a unit by clicking on the " - " product counter', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getProductsValue()).toBeVisible();
		await expect(cartWithProductsPage.locators.getProductsValue()).toHaveText('1');

		await cartWithProductsPage.clickAddProductButton();
		await expect(cartWithProductsPage.locators.getProductsValue()).toHaveText('2');

		await cartWithProductsPage.clickRemoveProductButton();

		await expect(cartWithProductsPage.locators.getProductsValue()).toHaveText('1');
	});

	test('TC 05.01.32 Verify that each item in the order includes an image of the product', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getImage()).toBeVisible();

	});

	test('TC 05.01.33 Verify that each item in the order includes a product price', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getPrice()).toBeVisible();

	});

	test('TC 05.01.34 Verify that each item in the order includes the product name', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getProductName()).toBeVisible();
		await expect(cartWithProductsPage.locators.getProductName()).toHaveText(PRODUCT_NAME_TEXT);

	});

	test('TC 05.01.34.1 Verify that each item in the order includes the product article number', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getProductArticle()).toBeVisible();
		await expect(cartWithProductsPage.locators.getProductArticle()).toHaveText(PRODUCT_ARTICLE_TEXT);

	});

	test('TC 05.01.35 Verify that each item in the order includes a delete product button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getDeleteButton()).toBeVisible();

	});

	test('TC 05.01.36 Verify that the delete product button has a pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		await expect(cartWithProductsPage.locators.getDeleteButton()).toBeVisible();
		await expect(cartWithProductsPage.locators.getDeleteButton()).toHaveCSS('cursor', 'pointer');

	});

	test('TC 05.01.37 Verify that the "Очистити кошик" modal window opens after clicking on the delete product button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickMobilSuper3000ToCart();

		const cartWithProductsPage = await homePage.clickCartButtonToCartWithProductsPage();

		const modalWindowClearTheCart = await cartWithProductsPage.clickDeleteButton();

		await expect(modalWindowClearTheCart.locators.getModalWindowRemoveProduct()).toBeVisible();

	});

})