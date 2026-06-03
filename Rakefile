# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative "config/application"
require 'rubocop/rake_task'
require "steep/rake_task"

Rails.application.load_tasks

RuboCop::RakeTask.new

Steep::RakeTask.new do |t|
  t.check.severity_level = :error
  t.watch.verbose
end
