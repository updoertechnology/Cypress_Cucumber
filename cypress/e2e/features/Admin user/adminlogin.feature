Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given Navigate to Admin Base Url
    Scenario: Success Login

        When User is on Login page
        And User Enters Username
        And User Enters Password
        And Click on login button
        Then Verify the Admin Url

