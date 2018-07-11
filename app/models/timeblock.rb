class Timeblock < ApplicationRecord
  belongs_to :project

  scope :deleted, -> { where(deleted: false) }
  default_scope { order(created_at: :desc) }
end
