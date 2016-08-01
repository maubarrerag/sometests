json.array!(@comments) do |comment|
  json.extract! comment, :id, :response, :text, :user_id, :article_id
  json.url comment_url(comment, format: :json)
end
