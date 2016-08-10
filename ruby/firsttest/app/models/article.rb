class Article < ActiveRecord::Base
	validates :title, presence: true, length: {minimum: 3, maximum: 50}
	validates :description, presence: true, length: {minimum: 10, maximum: 300}
	validates :user_id, presence: true
	has_many :comments
	has_many :article_categories
	has_many :categories, through: :article_categories
	belongs_to :user
end
