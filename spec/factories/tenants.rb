FactoryBot.define do
  factory :tenant do
    name { "Test Tenant" }

    subdomain { "test-tenant" }

    active { true }

    factory :default_tenant do
      initialize_with { Tenant.first_or_create }
    end
  end
end
