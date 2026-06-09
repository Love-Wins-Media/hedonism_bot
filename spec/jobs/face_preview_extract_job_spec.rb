require 'rails_helper'

RSpec.describe FacePreviewExtractJob, type: :job do
  let(:photo) { create(:photo_person) }

  it "should operate on a created photo" do
    FacePreviewExtractJob.perform_now(photo)
  end
end
