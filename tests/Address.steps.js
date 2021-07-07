import { Given, When, Then } from '@cucumber/cucumber';
import { Selector, t } from 'testcafe';
const AddressesPage = require('./page-model/Addresses.page');

Given('user is logged in to the application', async (t) => {
    await t.navigateTo('http://a.testaddressbook.com/sign_in');
    await t.typeText(Selector('input#session_email'), 'renewtest002@gmail.com');
    await t.typeText(Selector('input#session_password'),'renew@123');
    await t.click(Selector('input[type="submit"]'));
})

When('user goes to Addresses page', async (t) => {
    await t.click(Selector('div>a[data-test="addresses"]'));
})

When('user goes to New Address page', async (t) => {
    await AddressesPage.goToNewAddressPage();
})

When('user adds the following details', async (t, [], table) => {
    for(const { FirstName, LastName, Address1, Address2, City, State, ZipCode } of table.hashes()){
        await AddressesPage.inputNewAddressDetails(FirstName, LastName, Address1, Address2, City, State, ZipCode);
        await AddressesPage.clickOnCreateAddressButton();
    }
})

When('user deletes the address with the following details', async (t, [], table) => {
    for(const { FirstName, LastName, City, State } of table.hashes()){
        await AddressesPage.deleteAddressFromList(FirstName, LastName, City, State);
    }
})

Then('user sees the new address with the following details', async (t,[], table) => {
    for(const { FirstName, LastName, Address1, Address2, City, State, ZipCode } of table.hashes()){
        var a = await AddressesPage.verifyNewAddressDetailsDisplayed(FirstName, LastName, Address1, Address2, City, State, ZipCode);
        await t.expect(a).eql(true);
    }
})