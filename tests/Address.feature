Feature: Address book test cases
All test cases for address book

Background: User is logged in to the application
Given user is logged in to the application

Scenario Outline: User is adding a new address
When user goes to Addresses page
And user goes to New Address page
And user adds the following details
|FirstName   |LastName   |Address1  |Address2  |City  |State  |ZipCode|
|<firstname> |<lastname> |<address1>|<address2>|<city>|<state>|<zip>  |
Then user sees the new address with the following details
|FirstName   |LastName   |Address1  |Address2  |City  |State  |ZipCode|
|<firstname> |<lastname> |<address1>|<address2>|<city>|<state>|<zip>  |
When user goes to Addresses page
And user deletes the address with the following details
|FirstName  |LastName  |City  |State  |
|<firstname>|<lastname>|<city>|<state>|

Examples:
|firstname|lastname|address1     |address2      |city   |state  |zip  |
|Grant    |Hill    |First Address|Second Address|Atlanta|GA     |34512|