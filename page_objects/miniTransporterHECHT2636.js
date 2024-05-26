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
		getApplicationAcceptedPopap: () => this.page.getByText('Ваша заявка прийнята!Ми сповістимо Вас, коли товар з\'явиться в продажіПерейти до'),
		getGoCatalogButton: () => this.page.getByRole('button', { name: 'Перейти до каталогу' }),
		getCloseDialogBoxButton: () => this.page.locator('#modal-root').getByRole('button').first(),
		getExampleMessageFieldEmail: () => this.page.getByText('Приклад example@mail.com'),
		getBreadcrumbProduct: () => this.page.locator('span').filter({ hasText: 'Міні транспортер HECHT' }),
		getBreadcrumbSubCategory: () => this.page.getByRole('link', { name: 'Інші товари' }),
		getBreadcrumbCatalog: () => this.page.getByRole('link', { name: 'Каталог' }),

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

	async clickGoCatalogButton() {
		await this.locators.getGoCatalogButton().click();
	}

	async clickCloseDialogBoxButton() {
		await this.locators.getCloseDialogBoxButton().click();
	}

	async fillWithoutUsernameDialogBoxField() {
		await this.locators.getHECHT2636DialogBoxField().fill('@gmail.com');
	}

	async fillWithoutDomainPart() {
		await this.locators.getHECHT2636DialogBoxField().fill('kati@gmail.');
	}

	async fillWithTwoDots() {
		await this.locators.getHECHT2636DialogBoxField().fill('kati@gmail..com');
	}

	async fillWithoutDotDomainPart() {
		await this.locators.getHECHT2636DialogBoxField().fill('kati@gmailcom');
	}

	async fillWithTwoAt() {
		await this.locators.getHECHT2636DialogBoxField().fill('kati@@gmail.com');
	}

	async fillInsteadDomain() {
		await this.locators.getHECHT2636DialogBoxField().fill('kati@gmail@123');
	}

	async fillOnlyOneLetterDomainPart() {
		await this.locators.getHECHT2636DialogBoxField().fill('kati@gmail@c');
	}

	async fillCirilicUserName() {
		await this.locators.getHECHT2636DialogBoxField().fill('katiю@gmail@com');
	}
	async fillCyrillicCharacterDomainPart() {
		await this.locators.getHECHT2636DialogBoxField().fill('kati@gmail.coы');
	}

	async fillWithoutAt() {
		await this.locators.getHECHT2636DialogBoxField().fill('katigmail.com');
	}

	async fillWithSpaceDomainPart() {
		await this.locators.getHECHT2636DialogBoxField().fill('kati@gmail.co m');
	}

	async fillSpaceInUserName() {
		await this.locators.getHECHT2636DialogBoxField().fill('ka ti@gmail.com');
	}

	async fillWithoutFilling() {
		await this.locators.getHECHT2636DialogBoxField().fill(' ');
	}

	async clickBreadcrumbSubCategory() {
		await this.locators.getBreadcrumbSubCategory().click();
	}

	async clickBreadcrumbCatalog() {
		await this.locators.getBreadcrumbCatalog().click();
	}

	async fillCaseIntensitive() {
		await this.locators.getHECHT2636DialogBoxField().fill('kaAtI@gmail.com');
	}
	
}

export default MiniTransporterHECHT2636Page;