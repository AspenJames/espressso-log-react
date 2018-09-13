class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :coffee_shops, :through => :coffee_shop_users
  has_many :espressos
end
