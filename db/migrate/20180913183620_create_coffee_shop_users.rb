class CreateCoffeeShopUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :coffee_shop_users do |t|
      t.integer :coffee_shop_id
      t.integer :user_id 
      t.boolean :admin
      t.boolean :approved

      t.timestamps
    end
  end
end
