class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render :json => @user
    else
      render :json => {'errors': @user.errors.full_messages}
    end
  end

  def show
    set_user
    render :json => @user
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
