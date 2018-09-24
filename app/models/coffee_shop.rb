class CoffeeShop < ApplicationRecord
  has_many :espressos 
  has_many :origins

  has_many :coffee_shop_users
  has_many :users, :through => :coffee_shop_users

  def users_pending_approval 
    User.joins(:coffee_shop_users)
      .where("coffee_shop_users.coffee_shop_id = #{self.id}")
      .where("coffee_shop_users.approved = false")
  end

  def user_exists?(user)
    user.coffee_shops.include?(self)
  end

  def admin
    self.users.where("admin = true")
  end
end
