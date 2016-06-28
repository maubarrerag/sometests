require 'json'

class User
  attr_accessor :email, :name, :permissions

  def initialize(*args)
  	@email = args[0]
  	@name = args[1]
  	@permissions = User.get_template(args[2])
  end
  
  def save()
    self_json = {email: self.email, name: self.name, permissions: self.permissions}.to_json
    open('users.json','a') do |file|
    	file.puts self_json
    end
  end

  def self.get_template(template)
  	file = File.read template
  	JSON.load(file, nil, symbolize_names: true)
  end

end