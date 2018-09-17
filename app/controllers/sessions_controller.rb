class SessionsController < ApplicationController
  def create
    @user = User.find_by(:email => params[:user][:email]).try(:authenticate, params[:user][:password])
    if @user
      session[:user_id] = @user.id 
      render :json => @user
    else 
      render :json => {"errors": "Email and/or password incorrect"}
    end
  end

  def destroy
    @user = User.find(params[:user][:id])
    session.clear
    render :json => {"message": "#{@user.name} logged out"}
  end
end
