Feature: Apply for freelance on Testlio website

  Scenario: User applies for freelance on Testlio website
    Given I am on the Google homepage
    When I search for "Testlio"
    And I click on the Testlio link
    And I click on "Apply to freelance"
    Then I should see the freelance application form
