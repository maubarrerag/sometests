require 'test_helper'

class CategoryTest < ActiveSupport::TestCase

  def setup
  	@category = Category.new(name: "Test")
  end

  test "category_valid" do
  	@category.save
  	assert @category.valid?
  end

end