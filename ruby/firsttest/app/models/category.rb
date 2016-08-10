class Category < ActiveRecord::Base
   validates :name, presence: true, length: {minimum: 3, maximum: 50}, uniqueness: { case_sensitive: false }
   has_many :article_categories
   has_many :articles, through: :article_categories
end