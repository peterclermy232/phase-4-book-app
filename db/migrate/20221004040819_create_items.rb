class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.integer :type
      t.string :name
      t.string :author
      t.string :genre
      t.string :url

      t.timestamps
    end
  end
end
