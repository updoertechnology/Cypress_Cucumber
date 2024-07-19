var newEndDate = null
var newStartDate = null
export class Utils {
    generateEmailid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        result = result + "_" + "automation" + "@" + "bett.com"
        return result;
    }

    generateCost(amount) {
        var totalCost = '';
        var cost = amount.toString();
        cost = "£" + " " + cost.substring(0, 1) + "," + cost.substring(1, cost.length)
        totalCost = cost;
        console.log(totalCost)
        return totalCost;
    }

    verifyText(loacator, expectedValue) {
        cy.get(loacator).invoke('text').then(text => {
            expect(text).to.equal(expectedValue)
        })
    }

    verifyvalue(locator, expectedValue) {
        cy.get(locator).invoke('attr', 'value').then(text => {
            expect(text).to.equal(expectedValue)
        })
    }
    verifyelementsvisibility(loacator){
        cy.get(loacator).should('be.visible')
    }

    verifyclass(locator, expectedValue) {
        cy.get(locator).invoke('attr', 'class').then(text => {
            expect(text).to.equal(expectedValue)
        })
    }

    verifyContainsText(loacator, expectedValue) {
        cy.get(loacator).invoke('text').then(text => {
            expect(text).contains(expectedValue)
        })
    }

    click(locator) {
        cy.get(locator).then(locator => {
            cy.wrap(locator).click({ force: true })
        })
        return cy.wrap(locator)
    }

    enterText(locator, desiredText) {
        cy.get(locator).then(locator => {
            cy.wrap(locator).clear({ force: true }).type(desiredText)
        })
    }

    enterTextAndPressEnter(locator, desiredText) {
        cy.get(locator).then(locator => {
            cy.wrap(locator).clear().type(desiredText).type('{enter}')
        })
    }

  
    selectCheckbox() {
        cy.get('[type="checkbox"]').then(checkbox => {
            cy.wrap(checkbox).check({ force: true })
        })
    }

    verifyCSSValue(locator, cssAttr, expectedValue) {
        cy.get(locator).then(locator => {
            cy.wrap(locator).should('have.css', cssAttr, expectedValue)
        })
    }

    selectValueFromDropdown(locator, value) {
        cy.get(locator).then(locator => {
            cy.wrap(locator)
                .find('li')
                .each(listItem => {
                    const listItemText = listItem.text()
                    if (listItemText == value) {
                        cy.wrap(listItem).click()
                    }
                })
        })
    }

    acceptCookies() {
        cy.get('body').then(($body) => {
            if ($body.text().includes('Accept All Cookies')) {
                utils.clickwithText('Accept')
            }
        })
    }

    clickwithText(locator) {
        cy.contains(locator).then(locator => {
            cy.wrap(locator).click()
        })
        return cy.wrap(locator)
    }

    clickOutside() {
        cy.clickOutside()
    }

    confirmCaptcha() {
        cy.confirmCaptcha()
    }

    explicitWait(value) {
        cy.wait(value)
    }

    


    getnewDate(numberOfDays) {
        var today = new Date()
        var tempDate = today.getFullYear() + '-' +
            ('0' + (today.getMonth() + 1)).slice(-2) + '-' +
            ('0' + (today.getDate() + numberOfDays)).slice(-2)
        if (numberOfDays == 1) {
            newEndDate = tempDate + ' ' + '23:59:59'
            cy.log('newEndDate is :' + ' ' + newEndDate)
        }
        else if (numberOfDays == 2) {
            newStartDate = tempDate + ' ' + '00:00:00'
            cy.log('newStartDate is :' + ' ' + newStartDate)
        }
    }

  
    
   

    hitPOST(BaseUri, EndPoint, body) {
        return cy.request({
            method: 'POST',
            url: Cypress.env(BaseUri) + EndPoint,
            failOnStatusCode: false,
            headers: { 'Content-Type': 'application/json' },
            body: body
        }).then((response) => {
            return response
        })
    }

    generateAuthTokenForUser(userEmailId) {
        return cy.request({
            method: 'POST',
            url: Cypress.env('AUTH0_BASE_URL') + 'oauth/token',
            failOnStatusCode: false,
            headers: { 'Content-Type': 'application/json' },
            body: {
                client_id: Cypress.env('WEBAPP_CLIENT_ID'),
                client_secret: Cypress.env('WEBAPP_CLIENT_SECRET'),
                grant_type: Cypress.env('GRANT_TYPE'),
                audience: Cypress.env('AUTH0_BASE_URL') + 'api/v2/',
                username: userEmailId,
                password: Cypress.env('PASSWORD'),
                redirect_uri: Cypress.env('REDIRECT_URI')
            },
        }).then((response) => {
            return response
        })
    }

    hitGETWithToken(BaseUri, queryParams, token) {
        return cy.request({
            method: 'GET',
            url: Cypress.env(BaseUri) + queryParams,
            failOnStatusCode: false,
            headers: { 'Content-Type': 'application/json' },
            auth: {
                'bearer': token
            }
        }).then((response) => {
            return response
        })
    }

    generateApplicationId(payload) {
        return utils.hitPOST('BETT_REGISTRATION_BASE_URL', '/bett/registration/contact-details', payload)
    }

}

export const utils = new Utils()