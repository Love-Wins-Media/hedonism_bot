require 'rails_helper'

RSpec.describe "GraphQL CaptionPhotoUpdate Mutation", type: :graphql do
  before do
    mock_tenant
  end

  let(:tenant) do
    Tenant.default_tenant
  end

  let(:photo_id) do
    create(:photo, tenant: tenant).to_gid_param
  end

  let(:update_query) do
    <<~GQL
      mutation {
        photoCaptionUpdate(id: "#{photo_id}", caption: "New Caption") {
          photo {
            id
            caption
          }
        }
      }
    GQL
  end

  describe "a valid request" do
    before do
      execute_graphql(update_query, variables: { id: photo_id })
    end


    it "updates a caption" do
      expect(data[:photoCaptionUpdate][:photo][:id]).to eq(photo_id)
    end
  end
end
