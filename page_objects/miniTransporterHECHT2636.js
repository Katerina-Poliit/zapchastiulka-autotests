class MiniTransporterHECHT2636Page {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		  getHECHT2636Header: () => this.page.locator('p').filter({ hasText: 'Міні транспортер HECHT' }),
		  getHECHT2636Breadcrambs: () => this.page.locator('span').filter({ hasText: 'Міні транспортер HECHT' }),
		  getHECHT2636ImageBlock: () => this.page.getByRole('tabpanel', { name: 'of 1' }).getByRole('img'),
		  getHECHT2636ImageBlockMini: () => this.page.getByRole('button', { name: 'product thumbnail' }),
		  getHECHT2636ImageBlocmagnifier: () => this.page.locator('div').filter({ hasText: /^Міні транспортер HECHT 2636Артикул: testProduct28$/ }).getByRole('button').first(),
		  getHECHT2636ImageBlocmagnifierModalWindow: () => this.page.locator('#modal-root div').filter({ hasText: 'Міні транспортер HECHT' }).nth(4),
		getHECHT2636ImageBlocmagnifierModalWindowName: () => this.page.locator('#modal-root').getByText('Міні транспортер HECHT'),
		 getFotoMdalWindow: () => this.page.locator('#splide03-slide01').getByRole('img', { name: 'Міні транспортер HECHT' }),
		 getScrollModalWindowRight: () => this.page.getByLabel('Next slide'),
		 getScrollModalWindowLeft: () => this.page.getByLabel('Previous slide'),
		 getcloseButtonModalWindow: () => this.page.locator('#modal-root').getByRole('button').first(),
		 getHECHT2636BlockInformation: () => this.page.locator('.tablet600\\:px-5 > div:nth-child(2)'),
		 getHECHT2636Article: () => this.page.getByText('Артикул: testProduct28').nth(1),
		 getPriceHECHT2636: () => this.page.getByText('₴').first(),
         getDescriptionPriceHECHT2636: () => this.page.getByText('Основні характеристики:Вага (кг):450Код:testProduct28Виробник:HECHTКраїна:Чехія'),
		 getShortDescriptionHECHT2636: () => this.page.getByRole('heading', { name: 'Опис' }),
		 getTextShortDescriptionHECHT2636: () => this.page.getByText('За допомогою міні - транспортера Hecht 2636'),
		 getStatusHECHT2636: () => this.page.getByText('відсутній', { exact: true }),
		 getHECHT2636ReportAvailabilityButton: () => this.page.getByRole('button', { name: 'Повідомити про наявність' }).first(),
		 getHECHT2636DialogBox: () => this.page.getByText('Немає в наявностіВведіть адресу своєї пошти, і, як тільки товар з’явиться, Вам п'),
		 getHECHT2636DialogBoxField: () => this.page.getByRole('textbox', { name: 'Приклад example@mail.com' }),
		 getHECHT2636DialogBoxButton: () => this.page.getByRole('button', { name: 'Відправити' }),
		 getApplicationAcceptedPopap: () => this.page.getByText('Ваша заявка прийнята!Ми сповістимо Вас, коли товар з\'явиться в продажіПерейти до')



 };

 async clickHECHT2636ImageBlocmagnifier() {
	await this.locators.getHECHT2636ImageBlocmagnifier().click();
 }

 async clickcloseButtonModalWindow() {
	await this.locators.getcloseButtonModalWindow().click();
 }

 async clickHECHT2636ReportAvailabilityButton() {
	await this.locators.getHECHT2636ReportAvailabilityButton().click();
 }

 async fillValidDataDialogBoxField() {
	await this.locators.getHECHT2636DialogBoxField().fill('kati@gmail.com');
 }

 async clickDialogBoxButton() {
	await this.locators.getHECHT2636DialogBoxButton().click();
 }

}

export default MiniTransporterHECHT2636Page;