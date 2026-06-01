class CreatePhotos < ActiveRecord::Migration[8.1]
  def change
    create_table :photos do |t|
      t.references :tenant, null: false, foreign_key: true
      t.string :original_filename
      t.string :content_type
      t.bigint :byte_size
      t.datetime :taken_at
      t.date :folder_date, comment: "Date the photo was taken, used as folder grouping key"
      t.string :status, null: false, default: "pending"
      t.integer :faces_detected
      t.jsonb :face_data, null: false, default: {}
      t.jsonb :exif_metadata, null: false, default: {}
      t.string :processing_error

      t.timestamps
    end

    add_index :photos, [ :tenant_id, :folder_date ]
    add_index :photos, [ :tenant_id, :status ]
  end
end
