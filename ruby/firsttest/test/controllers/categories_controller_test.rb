require 'test_helper'

class CategoriesControllerTest < ActionController::TestCase

  test "Should get Index" do
  	get :index
  	assert_response :success
  end

  test "Should get New" do
    get :new
    assert_response :success
  end

  test "Should get Show" do 
    get :show
    assert_response :success
  end
end