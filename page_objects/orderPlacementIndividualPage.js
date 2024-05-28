import HomePage from "./homePage";

class OrderPlacementIndividualPage {
	constructor(page) {
		 this.page = page;
	}

    locators = {

        getContactDetailsBlock: () => this.page.getByRole('heading', { name: 'Контактні дані' }),
        getIndividualButton:  () => this.page.getByRole('button', { name: 'Фізична особа' }),
        getLegalEntityButton: () => this.page.getByRole('button', { name: 'Юридична особа' }),
        getFrame: () => this.page.getByText('Ваше замовленняМоторна олива').nth(1),
        getNameField: () => this.page.getByLabel('Ім\'я *'),
        getPlaceOrderButton: () => this.page.getByRole('button', { name: 'Оформити замовлення' }),
        getMessageRequiredFieldName: () => this.page.getByText('Заповніть ім\'я'),
        gatLastNameField: () => this.page.getByLabel('Прізвище *'),
        getMessageRequiredLastName: () => this.page.getByText('Заповніть прізвище'),
        getMiddleNameField: () => this.page.getByLabel('По батькові'),
        getNumberPhoneField: () => this.page.getByLabel('Номер телефону *+38'),
        getMessageRequiredPhoneNumber: () => this.page.getByText('Заповніть номер телефону'),
        getEmailField: () => this.page.locator(' div:nth-child(4) > label > input'),
        getMessageRequiredEmailField: () => this.page.getByText('Заповніть E-mail'),

    }

    async fillNameField() {
        await this.locators.getNameField().fill('Катерина');
    }

    async clickPlaceOrderButton() {
        await this.locators.getPlaceOrderButton().click();
    }

    async fillLastNameField() {
        await this.locators.gatLastNameField().fill('Полиит');
    }

    async fillMiddleNameField() {
        await this.locators.getMiddleNameField().fill('Викторовна');
    }

}export default OrderPlacementIndividualPage;



