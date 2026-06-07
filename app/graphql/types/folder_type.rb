module Types
  class FolderType < Types::BaseObject
    implements GraphQL::Types::Relay::Node

    field :name, String, null: false

    field :faces, Types::FaceType.connection_type, null: false, description: "Faces in the folder"
    field :photos, Types::PhotoType.connection_type, null: false, description: "Photos in the folder"
  end
end
