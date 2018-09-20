class User < ApplicationRecord
  has_secure_password 
  validates :name, :email, :presence => true, :uniqueness => true

  has_many :coffee_shop_users
  has_many :coffee_shops, :through => :coffee_shop_users
  has_many :espressos
  has_many :origins, :through => :espressos

  def admin_shops
    # returns an ActiveRecord::Relation object containing
    # all coffee shops for which the user is admin
    CoffeeShop.joins(:coffee_shop_users)
      .where("coffee_shop_users.user_id = #{self.id}")
      .where("coffee_shop_users.admin = true")
  end

  def is_admin?
    self.admin_shops.length > 0
  end

  def pending_approvals
    CoffeeShop.joins(:coffee_shop_users)
      .where("coffee_shop_users.user_id = #{self.id}")
      .where("coffee_shop_users.approved = false")
  end

  def approve_user(coffee_shop, user)
    # Exit if calling user is not admin of the coffee_shop
    return false if !self.admin_shops.include?(coffee_shop)
    # Exit if passed in user is not present in the users for 
    # the passed in coffee_shop
    return false if !coffee_shop.user_exists?(user)
    # Grab the coffee_shop_user entry for passed in args
    c = CoffeeShopUser.where("coffee_shop_id = #{coffee_shop.id}")
          .where("user_id = #{user.id}")
    binding.pry
    c.update(:approved => true)
  end
end
