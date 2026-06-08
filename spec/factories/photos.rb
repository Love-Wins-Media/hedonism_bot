FactoryBot.define do
  factory :photo do
    tenant
    venue
    image_hash { SecureRandom.hex(16) }
    status { "processed" }
    folder_date { Date.today }

    after(:create) do |photo|
      puts "Attaching file from: #{Rails.root.join('spec/fixtures/test.jpg')}"
      photo.images.attach(io: File.open(Rails.root.join('spec/fixtures/test.jpg')), filename: 'test.jpg', content_type: 'image/jpeg')
      puts "Attached: #{photo.images.attached?}"
    end
  end
end
