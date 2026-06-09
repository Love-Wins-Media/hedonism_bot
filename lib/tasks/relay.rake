namespace :relay do
  desc "Perform a Relay compilation"
  task compile: :environment do
    `bun run relay compile`
  end
end
