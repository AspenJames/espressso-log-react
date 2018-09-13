class CreateEspressos < ActiveRecord::Migration[5.2]
  def change
    create_table :espressos do |t|
      t.datetime :roast_date
      t.datetime :brew_date
      t.integer :dose
      t.integer :yield
      t.integer :time
      t.integer :coffee_shop_id
      t.integer :origin_id
      t.integer :user_id
      t.text :notes

      t.timestamps
    end
  end
end
