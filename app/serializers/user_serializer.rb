class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :coffee_shops, :through => :coffee_shop_users
  has_many :admin_shops, :serializer => CoffeeShopSerializer
  has_many :pending_approvals, :serializer => CoffeeShopSerializer
  has_many :espressos

  def admin_shops
    object.admin_shops
  end

  def pending_approvals
    object.pending_approvals
  end
end
