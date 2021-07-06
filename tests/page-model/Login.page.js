'use strict';

import { Selector, t } from "testcafe";

class LoginPage {
    
    get userName () { return Selector('#user-name')};
    get passWord () { return Selector('#password')} ;
    get loginButton () {return Selector('#login-button')};
    get errorMessage () { return Selector('h3[data-test = "error"]')};

    async inputUsername(username){
        if (username == "") {
            return;
        }
        await t.typeText(this.userName, username);
    }

    async inputPassword(password){
        if (password == ""){
            return;
        }
        await t.typeText(this.passWord, password);
    }

    async clickLoginButton() {
        await t.click(this.loginButton);
    }
}

module.exports = new LoginPage();