class EspressoSerializer < ActiveModel::Serializer
  attributes :id, :roast_date, :brew_date, :dose, :yield, :time, :notes
  belongs_to :origin
  belongs_to :user
end
