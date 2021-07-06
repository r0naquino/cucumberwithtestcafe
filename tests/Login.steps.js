import { Given } from '@cucumber/cucumber';
import { When, Then } from 'cucumber';
import { Selector, t } from 'testcafe';
const LoginPage = require ('./page-model/Login.page')

Given('user is in login page', async (t) => {
    await t.navigateTo("https://www.saucedemo.com/");
});

When(/^user logs in using "(.*)" username and "(.*)" password$/, async (t, [username, password])=> {
    await LoginPage.inputUsername(username);
    await LoginPage.inputPassword(password);
})

When('user clicks login button', async (t) => {
    await LoginPage.clickLoginButton();
})

Then(/^user will get the "(.*)" error in login page$/, async (t, [error]) => {
    await t.expect(LoginPage.errorMessage.textContent).eql(error);
})