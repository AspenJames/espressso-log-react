class OriginSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :espressos
  belongs_to :coffee_shop
end
