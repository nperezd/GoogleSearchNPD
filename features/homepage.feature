Feature: Google Homepage Search

   As a user, I want to be able to search things by using Google's search page

  Background: 
    Given I'm on the "Homepage" page
  
#   Scenario: User clicks on About option
#      When I click on About
#      Then I go to Google's About page
  
#   Scenario: User clicks on Store option
#      When I click on Store
#      Then I go to Google's Store page
  
  Scenario: User clicks on Gmail option
      And I haven't signed in yet
     When I click on Gmail
     Then I go to the account selection page
  
  Scenario: User clicks on Images option
     When I click on Images
     Then I go to Google's Images page
  
  Scenario: User clicks on Google Apps Icon
     When I click on Google Apps Icon
     Then All Google apps list is displayed
  
  Scenario: User clicks on Sign In Button and signs in to his Google Account
      And I haven't signed in yet
     When I click on the Sign In Button
     Then I go to the account selection page
     When I click on an account
     Then I'm prompted for my password
     When I type it in in the Password Field on click on the Next Button
     Then I go to the homepage
  
  Scenario: User clicks on Google Account Icon
      And I have already signed in
     When I click on the Google Account Icon
     Then The account information popup is displayed
  
  Scenario: User clicks on Google Search button with an empty search field
     When I click on the Google Search button without typing anything into the search field
     Then I remain on the homepage
  
  Scenario: User clicks on the Feeling Lucky button
      And I hover the mouse over the I'm Feeling Lucky button
     When I click the I'm Feeling Lucky button
     Then I go to a random result page
  
  Scenario: User clicks on the search field
     When I click on the Search field
     Then A list with the last 10 performed searches is displayed
     When I click on Remove
     Then That search is deleted from the list
