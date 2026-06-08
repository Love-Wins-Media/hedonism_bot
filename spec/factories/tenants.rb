FactoryBot.define do
  factory :tenant do
    name { "Test Tenant" }
    sequence(:subdomain) { |n| "tenant#{n}" }
    active { true }
  end
end
