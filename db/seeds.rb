# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


############ Create Users ############

User.create([
  {# id=1
    :name => "Joleen Manager",
    :email => "joleen@cafe.com",
    :password => "password"
  },
  {# id=2
    :name => "Joe Barista",
    :email => "joe@cafe.com",
    :password => "password"
  },
  {# id=3
    :name => "Steve NewHire",
    :email => "steve@cafe.com",
    :password => "password"
  }
])

############ Create Coffee Shop ############

CoffeeShop.create(
  # id=1
  :name => "Cafe Code",
  :address => "111 Coffee Ave, Seattle WA 98101"  
)

########### Create Joins ############

CoffeeShopUser.create([
  {# id=1
    :coffee_shop_id => 1,
    :user_id => 1,
    :admin => true,
    :approved => true
  },
  {# id=2 
    :coffee_shop_id => 1,
    :user_id => 2,
    :admin => false,
    :approved => true
  },
  {# id=3
    :coffee_shop_id => 1,
    :user_id => 3,
    :admin => false,
    :approved => false
  }
])

########### Create Origin ############

Origin.create(
  # id=1
  :name => "Guatemala La Bolsa",
  :coffee_shop_id => 1
)

############ Create Espressos ############

Espresso.create([
  {# id=1
    :roast_date => DateTime.new(2018,9,4),
    :brew_date => DateTime.new(2018,9,10),
    :dose => 18,
    :yield => 35,
    :time => 28,
    :coffee_shop_id => 1,
    :origin_id => 1,
    :user_id => 1
  },
  {# id=2
    :roast_date => DateTime.new(2018,9,04),
    :brew_date => DateTime.new(2018,9,11),
    :dose => 18,
    :yield => 32,
    :time => 30,
    :coffee_shop_id => 1,
    :origin_id => 1,
    :user_id => 2
  }
])
