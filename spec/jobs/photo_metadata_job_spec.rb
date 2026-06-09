require 'rails_helper'

RSpec.describe PhotoMetadataJob, type: :job do
  let(:tenant) { Tenant.default_tenant }

  let(:photo) { create(:photo, tenant: tenant) }

  it "should get metadata on a created photo" do
    PhotoMetadataJob.perform_now(photo)
  end
end
