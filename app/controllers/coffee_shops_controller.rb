class CoffeeShopsController < ApplicationController
  
  def index 
    render :json => CoffeeShop.all
  end

  def create
    @coffee_shop = CoffeeShop.new(coffee_shop_params)
    if @coffee_shop.save 
      CoffeeShopUser.create(:coffee_shop_id => @coffee_shop.id, :user_id => session[:user_id], :admin => true, :approved => true);
      render :json => @coffee_shop
    else
      render :json => {"errors": @coffee_shop.errors.full_messages}
    end
  end

  def show
    set_coffee_shop
    render :json => @coffee_shop
  end

  def update
    set_coffee_shop
  end

  def destroy 
    set_coffee_shop
  end

  private 
  def set_coffee_shop 
    @coffee_shop = CoffeeShop.find(params[:id])
  end

  def coffee_shop_params 
    params.require(:coffee_shop).permit(:name, :address)
  end
end
