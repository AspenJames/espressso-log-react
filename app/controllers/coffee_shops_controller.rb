class CoffeeShopsController < ApplicationController
  
  def create
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
    @coffee_shop = CoffeeShop.find(session[:id])
  end

  def coffee_shop_params 
    params.require(:coffee_shop).permit(:name, :address)
  end
end
