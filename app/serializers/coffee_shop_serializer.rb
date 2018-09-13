class CoffeeShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :address
  has_many :espressos
  has_many :users, :through => :coffee_shop_users
end
