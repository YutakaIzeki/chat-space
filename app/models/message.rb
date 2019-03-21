class Message < ApplicationRecord

  # validates :content, presence: true

  belongs_to :user
  belongs_to :group

  mount_uploader :image, ImageUploader
end
