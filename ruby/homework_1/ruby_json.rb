require 'pp'
require_relative 'user'

user = User.new 'foo@bar.com', 'Foo Bar', 'permissions.json'

pp user 

user.save()
