class Folder
  include ActiveModel::API

  attr_accessor :name, :photos

  def initialize(name, photos)
    @name = name
    @photos = photos
  end

  def to_gid_param
    self.name
  end
end