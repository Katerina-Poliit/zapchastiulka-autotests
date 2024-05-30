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
        getMessageNotValidEmailField: () => this.page.getByText('Невірний формат електронної пошти'),
        getMessageNumberPhoneField: () => this.page.getByText('має починатися з 0 і містити'),
        getDeliveryMethodAndData: () => this.page.getByRole('heading', { name: 'Спосіб та дані доставки' }),
        getSelectDeliveryCityField: () => this.page.getByPlaceholder('Введіть назву міста'),
        getMessgaeDeliveryCityField: () => this.page.getByText('Оберіть місто доставки', { exact: true }),
        getPickupRadioButton: () => this.page.locator('div').filter({ hasText: /^Самовивіз$/ }).nth(1),
        getPickuppRadioButton:() => this.page.getByLabel('Самовивіз'),
        getBlockPickupOpen: () => this.page.locator('.pt-s.pb-m '),
        getSelectValue: () => this.page.locator('div').filter({ hasText: /^Оберіть значення\.\.\.$/ }).nth(1),
        getFirstAddressValue: () => this.page.getByText('Адресa 1'),
        getSecondAddressValue: () => this.page.getByText('Адресa 2'),
        getOpeningHours: () => this.page.getByText('Пн - ПтCб9:00-18:009:00-13:'),
        getNewPostOfficeRadioButton: () => this.page.locator('div').filter({ hasText: /^Нова пошта відділення$/ }).nth(1),
        getNewPostOfficeRadioButtonn: () => this.page.getByLabel('Нова пошта відділення'),
        getSelectPostOffice: () => this.page.getByText('Оберіть поштове відділення *Ви не обрали місто доставки'),
        getCourierZapchstiulcaRadioButtonn: () => this.page.getByLabel('Кур\'єр Запчастюлька'),
        getEnterStreetNameField: () => this.page.getByText('Введіть назву вулиці*'),
        getStreetNameField: () => this.page.getByPlaceholder('Введіть назву та оберіть значення'),
        getHouseNumberField: () =>  this.page.locator('div').filter({ hasText: /^Введіть назву вулиці\* Номер будинку\* Номер квартири$/ }).locator('div').nth(3),
        getApartmentNumber: ()  => this.page.locator('div').filter({ hasText: /^Введіть назву вулиці\* Номер будинку\* Номер квартири$/ }).locator('div').nth(4),
        getNewMailBranches: ()  => this.page.getByLabel('Кур\'єр Нова Пошта'),
        getCommentTexteareaField: () => this.page.getByLabel('Коментар до замовлення'),
        getConfirmYourOrderButton: () => this.page.getByRole('button', { name: 'Оформити замовлення' }),



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

    async fillvalidEmailField() {
        await this.locators.getEmailField().fill('kati@gmail.com')
    }

    async fillNotvalidEmailField() {
        await this.locators.getEmailField().fill('kati@gmail')
    }

    async fillCyrillicLettersEmailField() {
        await this.locators.getEmailField().fill('kaчi@gmail.com')
    }

    async fillCyrillicLettersDomainEmailField() {
        await this.locators.getEmailField().fill('kati@gmail.ффф')
    }

    async fillTwoAtEmailField() {
        await this.locators.getEmailField().fill('kati@@gmail.com')
    }

    async fillWithoutAtEmailField() {
        await this.locators.getEmailField().fill('katigmail.com')
    }

    async fillNumberPhoneField() {
        await this.locators.getNumberPhoneField().fill('0506104266')
    }

    async fillWithoutOneDigitNumberPhoneField() {
        await this.locators.getNumberPhoneField().fill('050610426')
    }

    async fillStartWithZeroPhoneField() {
        await this.locators.getNumberPhoneField().fill('8')
    }

    async checkPickuppRadioButton() {
        await this.locators.getPickuppRadioButton().click();
    }

    async clickSelectValue() {
        await this.locators.getSelectValue().click();
    }

    async clickNewPostOfficeRadioButton() {
        await this.locators.getNewPostOfficeRadioButtonn().check();
    }

    async clickCourierZapchstiulcaRadioButtonn() {
        await this.locators.getCourierZapchstiulcaRadioButtonn().check();
    }

    async clickNewMailBranchesRadioButton() {
        await this.locators.getNewMailBranches().check();
    }

    async fillCommentTexteareaField() {
        await this.locators. getCommentTexteareaField().fill('Спасибо!')
    }



}export default OrderPlacementIndividualPage;



