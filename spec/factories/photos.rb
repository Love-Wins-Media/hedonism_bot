FactoryBot.define do
  factory :photo do
    tenant { Tenant.default_tenant }
    venue
    image_hash { SecureRandom.hex(16) }
    status { "processed" }
    folder_date { Date.today }
    taken_at { Date.yesterday }

    after(:create) do |photo|
      raw_photo = Rails.root.join('spec/fixtures/DSC00001.ARW')
      processed_photo = Rails.root.join('spec/fixtures/DSC00001.HIF')
      photo.raw_image.attach(io: File.open(raw_photo), filename: 'DSC00001.ARW', content_type: 'image/x-sony-arw')
      photo.images.attach(io: File.open(processed_photo), filename: 'DSC00001.HIF', content_type: 'image/heif')
    end
  end
end
