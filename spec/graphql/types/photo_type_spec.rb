require 'rails_helper'

RSpec.describe Types::PhotoType, type: :graphql do
  before do
    mock_tenant
    5.times do
      create(:photo, tenant: tenant)
    end
  end

  let(:tenant) { Tenant.default_tenant }

  let(:query) do
    <<~GQL
      query {
        photos {
          id
        }
      }
    GQL
  end

  it "types photos" do
    execute_graphql(query)
    expect(data["photos"].length).to be(5)
  end
end
