class CoffeeShopUser < ApplicationRecord
  belongs_to :coffee_shop
  belongs_to :user
end