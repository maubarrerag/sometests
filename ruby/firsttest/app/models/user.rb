class User < ActiveRecord::Base
	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
	before_save: { self.email = email.downcase }
	validates :username, presence: true, uniqueness: { case_sensitive: false }, 
	          lenght: { minimum: 8, maximum: 50 }
    validates :email, presence: true, uniqueness: { case_sensitive: false }, 
              format: { with: VALID_EMAIL_REGEX }

	has_many :comments
	has_many :articles
end
