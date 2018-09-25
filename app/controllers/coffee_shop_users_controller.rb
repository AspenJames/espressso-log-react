class CoffeeShopUsersController < ApplicationController
  def create 
    @user = User.find(params[:user_id])
    @coffee_shop = CoffeeShop.find(params[:coffee_shop_id])
    @csu = CoffeeShopUser.create(:user_id => @user.id, :coffee_shop_id => @coffee_shop.id, :approved => false, :admin => false)
    render :json => {"join": @csu, "coffee_shop": @coffee_shop}
  end

  def update
    @coffee_shop_user = CoffeeShopUser.find(params[:id])
  end

  def destroy
    @coffee_shop_user = CoffeeShopUser.find(params[:id])
    if @coffee_shop_user.destroy
      render :json => {"success": "#{@coffee_shop_user} deleted"}
    else 
      render :json => {"failure": "resource not deleted"}
    end
  end
end
