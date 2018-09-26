class CoffeeShopUsersController < ApplicationController
  def create 
    @user = User.find(params[:user_id])
    @coffee_shop = CoffeeShop.find(params[:coffee_shop_id])
    @csu = CoffeeShopUser.create(:user_id => @user.id, :coffee_shop_id => @coffee_shop.id, :approved => false, :admin => false)
    render :json => {"join": @csu, "coffee_shop": @coffee_shop}
  end

  def update
    # Find the record
    @csu = CoffeeShopUser.find_by(:user_id => params[:user_id], 
                    :coffee_shop_id => params[:coffee_shop_id])
    if params[:payload] == "approve"
      @csu.update(:approved => true)
      render :json => {"approved": @csu}
    elsif params[:payload] == "deny"
      @csu.destroy
      render :json => {"deleted": @csu}
    end
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
