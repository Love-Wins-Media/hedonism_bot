module Types
  class FaceType < Types::BaseObject
    implements GraphQL::Types::Relay::Node

    field :photos, Types::PhotoType.connection_type, null: false
    field :label, String, null: false
    field :photo_count, Integer, null: false
    field :thumbnail_url, String, null: false

    def photo_count
      @object.photos.count
    end

    def thumbnail_url
      nil
    end
  end
end
