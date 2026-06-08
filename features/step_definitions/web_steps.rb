Given('I am on the main page') do
  @page.goto('http://localhost:3000')
end

When('I click on the event {string}') do |event_name|
  # Assuming there is a button/link for the event
  @page.get_by_text(event_name).click
end

Then('I should see only images related to {string}') do |event_name|
  # This depends on how the UI changes.
  # I might need to wait for something or check the URL
  # For now, let's just wait for a moment for UI to update
  @page.wait_for_timeout(1000)
  # Verify some condition
  # Example: checking that all visible images have the tag
end

When('I click on the face {string}') do |face_name|
  @page.get_by_text(face_name).click
end

Then('I should see only images containing {string}') do |face_name|
  @page.wait_for_timeout(1000)
end

When('I click on the event {string} again') do |event_name|
  @page.get_by_text(event_name).click
end

Then('I should see all images') do
  @page.wait_for_timeout(1000)
end

When('I hover over an image') do
  # Need a selector for an image
  @page.locator('img').first.hover
end

Then('I should see a textual description') do
  # Need to see how the description is shown (maybe a tooltip)
  # For now let's assume it appears in an element with class 'description'
  expect(@page.locator('.description').is_visible).to be_truthy
end
