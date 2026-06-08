Feature: Filtering images
  As a user
  I want to filter images by event or face
  So that I can find what I am looking for

  Background:
    Given I am on the main page

  Scenario: Filter based on a single event
    When I click on the event "Birthday"
    Then I should see only images related to "Birthday"

  Scenario: Filter based on a single face
    When I click on the face "Alice"
    Then I should see only images containing "Alice"

  Scenario: Filter then unfilter
    When I click on the event "Birthday"
    And I click on the event "Birthday" again
    Then I should see all images

  Scenario: Hover over an image to get a textual description
    When I hover over an image
    Then I should see a textual description
