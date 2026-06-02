class Person < ApplicationRecord
  belongs_to :tenant
  has_many :photo_people, dependent: :destroy
  has_many :photos, through: :photo_people

  validate :embedding_dimensions_match

  before_validation :set_embedding_dimensions

  scope :for_tenant, ->(tenant) { where(tenant: tenant) }
  scope :with_embedding, -> { where.not(embedding: []) }
end
