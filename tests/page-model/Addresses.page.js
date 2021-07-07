import { Selector, t } from "testcafe";

class AddressesPage{

    get newAddressButton() { return Selector('div>a[data-test="create"]')}
    get firstName() { return Selector('input#address_first_name')}
    get lastName() { return Selector('input#address_last_name')}
    get address1() { return Selector('input#address_street_address')}
    get address2() { return Selector('input#address_secondary_address')}
    get city() { return Selector('input#address_city')}
    get stateDropDown() { return Selector('select#address_state')}
    get stateValue() { return Selector('select#address_state>option')}
    get zipCode() { return Selector('input#address_zip_code')}
    get createAddressButton() { return Selector('input[value="Create Address"]')}
    get firstNameDetails() {return Selector('span[data-test="first_name"]')}
    get lastNameDetails() { return Selector('span[data-test="last_name"]')}
    get streetAddressDetails() { return Selector('span[data-test="street_address"]')}
    get secondaryAddressDetails() { return Selector('span[data-test="secondary_address"]')}
    get cityDetails() { return Selector('span[data-test="city"]')}
    get stateDetails() { return Selector('span[data-test="state"]')}
    get zipCodeDetails() { return Selector('span[data-test="zip_code"]')}
    get listButton() { return Selectort('a[data-test="list"]')}

    async goToNewAddressPage(){
        await t.click(this.newAddressButton);
    }

    async inputNewAddressDetails(firstname, lastname, address1, address2, city, state, zip){
        await t.typeText(this.firstName, firstname);
        await t.typeText(this.lastName, lastname);
        await t.typeText(this.address1, address1);
        await t.typeText(this.address2, address2);
        await t.typeText(this.city, city);
        await t.click(this.stateDropDown);
        await t.click((this.stateValue).withAttribute('value', state));
        await t.typeText(this.zipCode, zip);
    }

    async clickOnCreateAddressButton(){
        await t.click(this.createAddressButton);
    }

    async verifyNewAddressDetailsDisplayed(firstname, lastname, address1, address2, city, state, zip){
        return await this.firstNameDetails.withText(firstname).exists
            == await this.lastNameDetails.withText(lastname).exists
            == await this.streetAddressDetails.withText(address1).exists
            == await this.secondaryAddressDetails.withText(address2).exists
            == await this.cityDetails.withText(city).exists
            == await this.stateDetails.withText(state).exists
            == await this.zipCodeDetails.withText(zip).exists 
    }

    async deleteAddressFromList(firstname, lastname, city, state){
        var item = Selector('tbody>tr>td').withText(firstname).sibling('td').withText(lastname).sibling('td').withText(city).sibling('td').withText(state);
        await t.setNativeDialogHandler(() => true);
        await t.click(item.parent().find('a[data-method="delete"]'));
        await t.pressKey('enter');
    }
}

module.exports = new AddressesPage();