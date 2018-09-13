class Origin < ApplicationRecord
  has_many :espressos 
  has_many :users, :through => :espressos
  belongs_to :coffee_shop
end
