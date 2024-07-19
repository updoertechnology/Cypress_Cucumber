import { utils } from "cypress/support/utils";

const usernameInput = "#email"
const passwordInput = "#password"
const loginBtn = 'button[type="submit"]'

class CommonPage {

  verifyUsernameField() {
    utils.verifyelementsvisibility(usernameInput)
  }

  verifyPasswordField() {
    utils.verifyelementsvisibility(passwordInput)
  }

  verifyLoginBtn() {
    utils.verifyelementsvisibility(loginBtn)
  }

}

export const commpnpage = new CommonPage();
