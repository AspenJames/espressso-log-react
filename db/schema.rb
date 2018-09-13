# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_09_13_184223) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "coffee_shop_users", force: :cascade do |t|
    t.integer "coffee_shop_id"
    t.integer "user_id"
    t.boolean "admin"
    t.boolean "approved"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "coffee_shops", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "espressos", force: :cascade do |t|
    t.datetime "roast_date"
    t.datetime "brew_date"
    t.integer "dose"
    t.integer "yield"
    t.integer "time"
    t.integer "coffee_shop_id"
    t.integer "origin_id"
    t.integer "user_id"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "origins", force: :cascade do |t|
    t.string "name"
    t.integer "coffee_shop_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
