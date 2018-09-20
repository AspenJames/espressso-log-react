class CoffeeShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :address
  has_many :users_pending_approval
  has_many :espressos
  has_many :users, :through => :coffee_shop_users

  def users_pending_approval
    object.users_pending_approval.map{|u| {"id": u.id, "name": u.name}}
  end

end
