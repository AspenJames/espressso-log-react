class SessionsController < ApplicationController
  def create
    @user = User.find_by(:email => params[:email]).try(:authenticate, params[:password])
    if @user
      session[:user_id] = @user.id 
      render :json => @user
    else 
      render :json => {"errors": "Email and/or password incorrect"}
    end
  end

  def destroy
  end
end
