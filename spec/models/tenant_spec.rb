require 'rails_helper'

RSpec.describe Tenant, type: :model do
  it "has a valid factory" do
    expect(build(:tenant)).to be_valid
  end

  it "is invalid without a name" do
    expect(build(:tenant, name: nil)).not_to be_valid
  end

  it "is invalid without a subdomain" do
    expect(build(:tenant, subdomain: nil)).not_to be_valid
  end

  it "is invalid with a duplicate subdomain" do
    create(:tenant, subdomain: "test")
    expect(build(:tenant, subdomain: "test")).not_to be_valid
  end
end
