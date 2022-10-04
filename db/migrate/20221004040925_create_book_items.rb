class CreateBookItems < ActiveRecord::Migration[7.0]
  def change
    create_table :book_items do |t|
      t.references :book, null: false, foreign_key: true
      t.references :item, null: false, foreign_key: true
      t.string :genre
      t.integer :position

      t.timestamps
    end
  end
end
