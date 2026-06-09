class Folder
  include ActiveModel::API
  include GlobalID::Identification

  attr_accessor :id, :photos

  def initialize(id, photos)
    raise ArgumentError, "Folder ID cannot be nil" if id.nil?

    @id = id
    @photos = photos || []
  end

  def self.find(id)
    photos = Photo.find_by(folder_date: id)
    new(id, photos)
  end
end
