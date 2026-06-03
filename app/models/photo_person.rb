class PhotoPerson < ApplicationRecord
  self.table_name = "photo_people"

  belongs_to :photo


end
