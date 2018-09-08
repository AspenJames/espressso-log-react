class CoffeeShop < ApplicationRecord
  has_secure_password 

  has_many :espressos 
  has_many :origins, :through => :espressos
end
