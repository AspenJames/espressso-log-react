class CoffeeShop < ApplicationRecord
  has_many :espressos 
  has_many :origins

  has_many :coffee_shop_users
  has_many :users, :through => :coffee_shop_users
end
