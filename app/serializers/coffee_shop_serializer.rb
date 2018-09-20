class CoffeeShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :address
  has_many :users_pending_approval, :serializer => UserSerializer
  has_many :espressos
  has_many :users, :through => :coffee_shop_users

  def users_pending_approval
    object.users_pending_approval
  end

end
