import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import {MESSAGE_NOT_VALID_EMAIL, MESSAGE_PHONE_NAMBER_FIELD, DELIVERY_METHOD_DATA_TEXT, MESSAGE_DELIVERY_CITY_FIELD_TEXT, PICKUP_RADIO_BUTTON_TEXT } from "../../helpers/testDataOrderPlacementIndividualPage.js";
import OrderPlacementIndividualPage from "../../page_objects/orderPlacementIndividualPage.js";
import { escape } from "querystring";

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
    });

    test('TC 05.01.64 Verify that the "Ваша электронная адреса" field accepts a valid email', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await orderIndovidual.fillvalidEmailField();
        await expect(orderIndovidual.locators.getEmailField()).toBeVisible();
    });

    test('TC 05.01.65 Verify that the "Ваша электронная адреса" field does not accept an invalid email, a warning message has been received', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await orderIndovidual.fillNotvalidEmailField();
        await expect(orderIndovidual.locators.getMessageNotValidEmailField()).toBeVisible();
        await expect(orderIndovidual.locators.getMessageNotValidEmailField()).toHaveText(MESSAGE_NOT_VALID_EMAIL);
    });

    test('TC 05.01.68 Verify that the user cannot enter Cyrillic letters in the "Ваша электронная адреса" field in the domain part', async ({ page }) => {
        const orderIndovidual = new OrderPlacementIndividualPage(page);
        await orderIndovidual.fillCyrillicLettersEmailField();
        await expect(orderIndovidual.locators.getMessageNotValidEmailField()).toHaveText(MESSAGE_NOT_VALID_EMAIL);
    });

 test(' TC 05.01.67 Verify that the user cannot enter Cyrillic letters in the "Ваша электронная адреса" field in the domain part', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await orderIndovidual.fillCyrillicLettersDomainEmailField();
    await expect(orderIndovidual.locators.getMessageNotValidEmailField()).toHaveText(MESSAGE_NOT_VALID_EMAIL);
 });

 test('TC 05.01.69 Verify that the user cannot enter data in the "Ваша электронная адреса" field using two @@', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await orderIndovidual.fillTwoAtEmailField();
    await expect(orderIndovidual.locators.getMessageNotValidEmailField()).toHaveText(MESSAGE_NOT_VALID_EMAIL);
 });

 test('TC 05.01.70 Verify that the user cannot enter data in the "Ваша электронная адреса" field without @', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await orderIndovidual.fillWithoutAtEmailField();
    await expect(orderIndovidual.locators.getMessageNotValidEmailField()).toHaveText(MESSAGE_NOT_VALID_EMAIL);
 });

 test('TC 05.01.59 Verify that the "Номер телефону" field takes a valid value of the number of digits', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await orderIndovidual.fillNumberPhoneField();
    await expect(orderIndovidual.locators.getNumberPhoneField()).toBeVisible();
 });

 test('TC 05.01.60 Verify that the number of digits in the "Номер телефона" field cannot be less than the allowed value', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await orderIndovidual.fillWithoutOneDigitNumberPhoneField();

    const errorMessage = await page.evaluate(() => {
        const phoneField = document.querySelector('input#phone');
        return phoneField ? phoneField.validationMessage : '';
    });

    expect(errorMessage).toMatch('Please match the requested format.');
 });

 test('TC 05.01.61 Verify that the phone number starts with "0", message has been received',async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await orderIndovidual.fillStartWithZeroPhoneField();
    await expect(orderIndovidual.locators.getMessageNumberPhoneField()).toBeVisible();
    await expect(orderIndovidual.locators.getMessageNumberPhoneField()).toHaveText(MESSAGE_PHONE_NAMBER_FIELD);
    await expect(orderIndovidual.locators.getMessageNumberPhoneField()).toHaveCSS('color', 'rgb(247, 144, 9)');

 });
test('TC 05.01.73 Verify that the "Оформлення замовлення " page contains the"Спосіб та дані доставки" block', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await expect(orderIndovidual.locators.getDeliveryMethodAndData()).toBeVisible();
    await expect(orderIndovidual.locators.getDeliveryMethodAndData()).toHaveText(DELIVERY_METHOD_DATA_TEXT);
});

test('TC 05.01.74 Verify that the "Спосіб та дані доставки" block contains the "Оберіть місто доставки"field', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await expect(orderIndovidual.locators.getSelectDeliveryCityField()).toBeVisible();
    await expect(orderIndovidual.locators.getSelectDeliveryCityField()).toHaveAttribute('placeholder', 'Введіть назву міста..')

});

test('TC 05.01.74.01 Verify that the "Оберіть місто доставки" field is mandatory', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await orderIndovidual.clickPlaceOrderButton();
    await expect(orderIndovidual.locators.getMessgaeDeliveryCityField()).toBeVisible();
    await expect(orderIndovidual.locators.getMessgaeDeliveryCityField()).toHaveText(MESSAGE_DELIVERY_CITY_FIELD_TEXT);
});

test('TC 05.01.75 Verify that the "Спосіб та дані доставки" block contains the "Самовивiз"radio button', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await expect(orderIndovidual.locators.getPickupRadioButton()).toBeVisible();
    await expect(orderIndovidual.locators.getPickupRadioButton()).toHaveText(PICKUP_RADIO_BUTTON_TEXT);

});

test('TC 05.01.76 Verify that the  user can select "Самовивiз" by clicking on the radio button', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await orderIndovidual.checkPickuppRadioButton();
    await expect(orderIndovidual.locators.getPickuppRadioButton()).toBeChecked();

});
test('TC 05.01.76.1 Verify that the "Самовывоз" block is open', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await orderIndovidual.checkPickuppRadioButton();
    await expect(orderIndovidual.locators.getBlockPickupOpen()).toBeVisible();
});

test('TC 05.01.77 Verify that the "Самовывоз" block Contains dropdown " Оберіть значення..."', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await orderIndovidual.checkPickuppRadioButton();
    await expect(orderIndovidual.locators.getSelectValue()).toBeVisible();
    await expect(orderIndovidual.locators.getSelectValue()).toHaveText('Оберіть значення...')
});

test('TC 05.01.77.1  Verify that the dropdown "" Оберіть значення..." has a pointer cursor', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await orderIndovidual.checkPickuppRadioButton();
    await expect(orderIndovidual.locators.getSelectValue()).toHaveCSS('cursor', 'pointer');

});
test('ЕС 05.01.77.2 Verify that the dropdown "Оберіть значення..." it is opening', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await orderIndovidual.checkPickuppRadioButton();
    await orderIndovidual.clickSelectValue();
    await expect(orderIndovidual.locators.getSelectValue()).toBeAttached();
});

test('TC 05.01.78 Verify that the dropdown " Оберіть значения..."contains  Адрес 1', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await orderIndovidual.checkPickuppRadioButton();
    await orderIndovidual.clickSelectValue();
    await expect(orderIndovidual.locators.getFirstAddressValue()).toBeVisible();
    await expect(orderIndovidual.locators.getFirstAddressValue()).toHaveText('Адресa 1');
});
test('TC 05.01.79 Verify that the dropdown " Оберіть значения..."contains  Адрес 2', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await orderIndovidual.checkPickuppRadioButton();
    await orderIndovidual.clickSelectValue();
    await expect(orderIndovidual.locators.getSecondAddressValue()).toBeVisible();
    await expect(orderIndovidual.locators.getSecondAddressValue()).toHaveText('Адресa 2');
});

test('TC 05.01.80 Verify that the dropdown "Оберіть значения..." contains contains the opening hours', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await orderIndovidual.checkPickuppRadioButton();
    await orderIndovidual.clickSelectValue();
    await orderIndovidual.clickSelectValue();
    await expect(orderIndovidual.locators.getOpeningHours()).toBeVisible();
    await expect(orderIndovidual.locators.getOpeningHours()).toHaveText('Пн - ПтCб9:00-18:009:00-13:00');
});

test('TC 05.01.81  "block" Блок "Спосіб та дані доставки " contains the radio button "Нова пошта відділення "" block contains the "new mail branch" radio button', async ({ page }) => {
    const orderIndovidual = new OrderPlacementIndividualPage(page);
    await expect(orderIndovidual.locators.getNewPostOfficeRadioButton()).toBeVisible();
    await expect(orderIndovidual.locators.getNewPostOfficeRadioButton()).toHaveText('Нова пошта відділення');
})





});
