import ModalWindowCartWithProducts from "./modalWindowCartWithProducts";

class CheckoutPage {
	constructor(page) {
		 this.page = page;
	}

 locators = {
	getHeader: () => this.page.getByRole('heading', { name: 'Оформлення замовлення' }),
	getBreadcrumbs: () => this.page.getByRole('button', { name: 'Назад до кошика' }),
	getLegalEntityButton: () => this.page.getByRole('button', { name: 'Юридична особа' }),
	getTypeOfRestraintFieldLabel: () => this.page.getByText('Тип рестрації *'),
	getContactInformationBlock: () => this.page.getByText('Контактні даніТип рестрації *ФОП Назва * ЄДРПОУ * ІПН *Область реєстрації * Місто реєстрації * Юридична адреса *Ім\'я *Прізвище *По батьковіE-mail *Номер телефону *+'),
	getContactInformationBlockHeader: () => this.page.getByRole('heading', { name: 'Контактні дані' }),
	getDropdownMenu: () => this.page.locator('div').filter({ hasText: /^ФОП$/ }).nth(1),
	getDropdownMenuButton: () => this.page.locator('form').filter({ hasText: 'Контактні даніТип рестрації *ФОП Назва * ЄДРПОУ * ІПН *Область реєстрації * Міст' }).getByRole('img'),
	getLegalEntitySection: () => this.page.locator('li.cursor-pointer>div.flex').filter({ hasText: 'Юридична особа' }),
	getFOPSection: () => this.page.locator('li.cursor-pointer>div.flex').filter({ hasText: 'ФОП' }),
	getDropdownMenuLegalEntity: () => this.page.locator('div').filter({ hasText: /^Юридична особа$/ }).first(),
	getNameField: () => this.page.getByLabel('Назва *'),
	getNameFieldLabel: () => this.page.getByText('Назва *'),
	getEDRPOUField: () => this.page.getByLabel('ЄДРПОУ *'),
	getEDRPOUFieldLabel: () => this.page.getByText('ЄДРПОУ *'),
	getIPNField: () => this.page.getByLabel('ІПН *'),
	getIPNFieldLabel: () => this.page.getByText('ІПН *'),
	getRegionField: () => this.page.getByPlaceholder('Введіть назву області'),
	getRegionFieldLabel: () => this.page.getByText('Область реєстрації *'),
	getCityField: () => this.page.getByPlaceholder('Введіть назву міста').first(),
	getCityFieldLabel: () => this.page.getByText('Місто реєстрації *'),
	getLegalAddressesField: () => this.page.getByLabel('Юридична адреса *'),
	getLegalAddressesFieldLabel: () => this.page.getByText('Юридична адреса *'),
	getFirstNameField: () => this.page.getByLabel('Ім\'я *'),
	getFirstNameFieldLabel: () => this.page.getByText('Ім\'я *'),
	getLastNameField: () => this.page.getByLabel('Прізвище *'),
	getLastNameFieldLabel: () => this.page.getByText('Прізвище *'),
	getMiddleNameField: () => this.page.getByLabel('По батькові'),
	getMiddleNameFieldLabel: () => this.page.getByText('По батькові'),
	getEmailField: () => this.page.getByLabel('E-mail *'),
	getEmailFieldLabel: () => this.page.getByText('E-mail *'),
	getPhoneNumberField: () => this.page.getByLabel('Номер телефону *+'),
	getPhoneNumberinputmask: () => this.page.locator('span.absolute '),
	getPhoneNumberFieldLabel: () => this.page.getByText('Номер телефону *+'),
	getDeliveryMethodBlock: () => this.page.getByText('Спосіб та дані доставкиОберіть місто доставки *Нова пошта відділенняСамовивізКур'),
	getDeliveryMethodBlockHeader: () => this.page.getByRole('heading', { name: 'Спосіб та дані доставки' }),
	getDeliveryCityField: () => this.page.locator('div').filter({ hasText: /^Оберіть місто доставки \*$/ }).getByPlaceholder('Введіть назву міста'),
	getDeliveryCityFieldLabel: () => this.page.getByText('Оберіть місто доставки *'),
	getPickupRadiobutton: () => this.page.getByLabel('Самовивіз'),
	getPickupRadiobuttonLabelText: () => this.page.locator('label[for="self"]')
 };

		async clickBreadcrumbs() {
			await this.locators.getBreadcrumbs().click();
			return new ModalWindowCartWithProducts(this.page);
		}

		async clickLegalEntityButton() {
			await this.locators.getLegalEntityButton().click();
		}

		async clickDropdownMenuButton() {
			await this.locators.getDropdownMenuButton().click();
		}

		async clickLegalEntitySection() {
			await this.locators.getLegalEntitySection().click();
		}

		async checkPickupRadiobutton() {
			await this.locators.getPickupRadiobutton().check();
		}




}

export default CheckoutPage;