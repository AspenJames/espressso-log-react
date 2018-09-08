class Origin < ApplicationRecord
  has_many :espressos 
  has_many :coffee_shops, :through => :espressos
end
