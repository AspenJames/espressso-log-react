class EspressosController < ApplicationController

  def index
    coffee_shop = CoffeeShop.find(params[:coffee_shop_id])
    render :json => coffee_shop.espressos
  end

  def create 
  
  end
  
  def show
    set_espresso
    render :json => @espresso 
  end

  def update
    set_espresso
  end

  def destroy
    set_espresso 
  end

  private
  def set_espresso
    @espresso = Espresso.find(session[:id])
  end

end
