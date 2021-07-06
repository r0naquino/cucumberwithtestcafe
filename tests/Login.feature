Feature: Login page
  As a user I am able to be able to login with valid login and will get errors for invalid logins

  Scenario Outline: User tries to log in to the application with invalid username and password
    Given user is in login page
    When user logs in using "<username>" username and "<password>" password
    And user clicks login button
    Then user will get the "<error>" error in login page

    Examples:
        | username      | password      | error                                                                     |
        | invalid       | secret_sauce  | Epic sadface: Username and password do not match any user in this service |
        | standard_user | invalid       | Epic sadface: Username and password do not match any user in this service |
        |               | secret_sauce  | Epic sadface: Username is required                                        |
        | standard_user |               | Epic sadface: Password is required                                        |
