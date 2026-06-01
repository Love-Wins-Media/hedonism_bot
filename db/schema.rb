# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2026_05_31_173040) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.string "name", null: false
    t.bigint "record_id", null: false
    t.string "record_type", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.string "content_type"
    t.datetime "created_at", null: false
    t.string "filename", null: false
    t.string "key", null: false
    t.text "metadata"
    t.string "service_name", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "people", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.float "embedding", default: [], array: true
    t.integer "embedding_dimensions"
    t.string "embedding_model"
    t.string "external_ref"
    t.jsonb "metadata", default: {}, null: false
    t.string "name"
    t.bigint "tenant_id", null: false
    t.datetime "updated_at", null: false
    t.index ["tenant_id", "external_ref"], name: "index_people_on_tenant_id_and_external_ref", unique: true, where: "(external_ref IS NOT NULL)"
    t.index ["tenant_id", "name"], name: "index_people_on_tenant_id_and_name"
    t.index ["tenant_id"], name: "index_people_on_tenant_id"
  end

  create_table "photo_people", force: :cascade do |t|
    t.jsonb "bounding_box", default: {}, null: false
    t.float "confidence"
    t.datetime "created_at", null: false
    t.float "embedding", default: [], array: true
    t.bigint "person_id", null: false
    t.bigint "photo_id", null: false
    t.datetime "updated_at", null: false
    t.index ["person_id"], name: "index_photo_people_on_person_id"
    t.index ["photo_id", "person_id"], name: "index_photo_people_on_photo_id_and_person_id", unique: true
    t.index ["photo_id"], name: "index_photo_people_on_photo_id"
  end

  create_table "photo_versions", force: :cascade do |t|
    t.bigint "byte_size"
    t.string "checksum"
    t.string "content_type"
    t.datetime "created_at", null: false
    t.string "format", comment: "e.g. jpeg, png, webp, avif, heic"
    t.integer "height"
    t.jsonb "metadata", default: {}, null: false
    t.bigint "photo_id", null: false
    t.datetime "updated_at", null: false
    t.string "variant", null: false, comment: "e.g. original, thumbnail, small, medium, large, web"
    t.integer "width"
    t.index ["photo_id", "variant", "format"], name: "index_photo_versions_on_photo_id_and_variant_and_format", unique: true
    t.index ["photo_id"], name: "index_photo_versions_on_photo_id"
  end

  create_table "photos", force: :cascade do |t|
    t.bigint "byte_size"
    t.string "content_type"
    t.datetime "created_at", null: false
    t.jsonb "exif_metadata", default: {}, null: false
    t.jsonb "face_data", default: {}, null: false
    t.integer "faces_detected"
    t.date "folder_date", comment: "Date the photo was taken, used as folder grouping key"
    t.string "original_filename"
    t.string "processing_error"
    t.string "status", default: "pending", null: false
    t.datetime "taken_at"
    t.bigint "tenant_id", null: false
    t.datetime "updated_at", null: false
    t.bigint "venue_id"
    t.index ["tenant_id", "folder_date"], name: "index_photos_on_tenant_id_and_folder_date"
    t.index ["tenant_id", "status"], name: "index_photos_on_tenant_id_and_status"
    t.index ["tenant_id", "venue_id"], name: "index_photos_on_tenant_id_and_venue_id"
    t.index ["tenant_id"], name: "index_photos_on_tenant_id"
    t.index ["venue_id"], name: "index_photos_on_venue_id"
  end

  create_table "tenants", force: :cascade do |t|
    t.boolean "active", default: true, null: false
    t.string "api_key", null: false
    t.datetime "created_at", null: false
    t.string "name", null: false
    t.string "subdomain", null: false
    t.datetime "updated_at", null: false
    t.index ["api_key"], name: "index_tenants_on_api_key", unique: true
    t.index ["subdomain"], name: "index_tenants_on_subdomain", unique: true
  end

  create_table "venues", force: :cascade do |t|
    t.string "address"
    t.datetime "created_at", null: false
    t.text "description"
    t.float "latitude"
    t.float "longitude"
    t.jsonb "metadata", default: {}, null: false
    t.string "name", null: false
    t.string "slug"
    t.bigint "tenant_id", null: false
    t.datetime "updated_at", null: false
    t.index ["tenant_id", "name"], name: "index_venues_on_tenant_id_and_name"
    t.index ["tenant_id", "slug"], name: "index_venues_on_tenant_id_and_slug", unique: true
    t.index ["tenant_id"], name: "index_venues_on_tenant_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "people", "tenants"
  add_foreign_key "photo_people", "people"
  add_foreign_key "photo_people", "photos"
  add_foreign_key "photo_versions", "photos"
  add_foreign_key "photos", "tenants"
  add_foreign_key "photos", "venues"
  add_foreign_key "venues", "tenants"
end
