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

    }
}export default OrderPlacementIndividualPage;



