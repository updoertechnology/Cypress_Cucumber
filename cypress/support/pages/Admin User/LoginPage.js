import { utils } from "cypress/support/utils";

const usernameInput = "#email"
const passwordInput = "#password"
const loginBtn = 'button[type="submit"]'

class LoginPage {

  typeUsername(username) {
    utils.enterText(usernameInput, username)
  }

  typePassword(password) {
    utils.enterText(passwordInput, password)
  }

  clickLogin() {
    utils.click(loginBtn)
  }

}

export const loginPage = new LoginPage();
