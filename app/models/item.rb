class Item < ApplicationRecord
    has_many :book_items
   has_many :books, through: :book_items

end
