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
end
