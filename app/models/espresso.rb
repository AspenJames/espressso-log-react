class Espresso < ApplicationRecord
  belongs_to :coffee_shop
  belongs_to :origin
end
