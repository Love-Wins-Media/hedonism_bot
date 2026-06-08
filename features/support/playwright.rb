require 'playwright'

Around do |scenario, block|
  Playwright.create(playwright_cli_executable_path: './node_modules/.bin/playwright') do |playwright|
    @browser = playwright.chromium.launch(headless: true)
    @context = @browser.new_context
    @page = @context.new_page
    
    block.call # This runs the scenario
    
    @page.close
    @context.close
    @browser.close
  end
end
