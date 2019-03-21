class Message < ApplicationRecord

  validates :text, :file, presence: true

  belongs_to :user
  belongs_to :group

  mount_uploader :image, ImageUploader
end
