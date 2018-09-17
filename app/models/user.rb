class User < ApplicationRecord
  has_secure_password 
  validates :name, :email, :presence => true, :uniqueness => true

  has_many :coffee_shop_users
  has_many :coffee_shops, :through => :coffee_shop_users
  has_many :espressos
  has_many :origins, :through => :espressos
end
