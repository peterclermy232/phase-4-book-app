class Book < ApplicationRecord
    has_many :book_items
    has_many :items, through: :book_items
end
