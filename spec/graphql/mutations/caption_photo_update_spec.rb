require 'rails_helper'

RSpec.describe "GraphQL CaptionPhotoUpdate Mutation", type: :request do
  before :each do
    mock_tenant
  end

  it "updates a caption" do
    tenant = Tenant.default_tenant
    photo = create(:photo, tenant: tenant)
    
    mutation = <<~GQL
      mutation {
        photoCaptionUpdate(id: "#{photo.id}", caption: "New Caption") {
          photo {
            id
            caption
          }
        }
      }
    GQL
    post "/graphql", params: { query: mutation }
    expect(response).to have_http_status(:ok)
    json = JSON.parse(response.body)
    expect(json["data"]["photoCaptionUpdate"]["photo"]["caption"]).to eq("New Caption")
  end
end
