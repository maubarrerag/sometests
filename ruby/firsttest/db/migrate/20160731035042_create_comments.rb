class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :response
      t.string :text
      t.references :user, index: true, foreign_key: true
      t.references :article, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
