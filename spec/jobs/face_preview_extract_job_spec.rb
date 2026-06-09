require 'rails_helper'

RSpec.describe FacePreviewExtractJob, type: :job do
  let(:photo) { create(:photo_person) }

  it "operates on a created photo"
end
