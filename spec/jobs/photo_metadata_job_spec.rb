require 'rails_helper'

RSpec.describe PhotoMetadataJob, type: :job do
  let(:tenant) { Tenant.default_tenant }

  let(:photo) { create(:photo, tenant: tenant) }

  it "gets metadata on a created photo" do
    expect(described_class.perform_now(photo)).to be_truthy
  end
end
