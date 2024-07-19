import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { commpnpage } from "@pages/Common Pages/LoginPage";


When("User is on Login page", () => {
   commpnpage.verifyUsernameField()
   commpnpage.verifyPasswordField()
   commpnpage.verifyLoginBtn()

   });


