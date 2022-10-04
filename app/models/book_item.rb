class BookItem < ApplicationRecord
  belongs_to :book
  belongs_to :item
end
