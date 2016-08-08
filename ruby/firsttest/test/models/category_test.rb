require 'test_helper'

class CategoryTest < ActiveSupport::TestCase

  def setup
  	@category = Category.new(name: "Test")
  end

  test "category_valid" do
  	@category.save
  	assert @category.valid?
  end

  test "category_uniqueness" do
  	@category.save
  	category2 = Category.new(name: @category.name)
  	category2.save
  	assert_not category2.valid?
  end



end