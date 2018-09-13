class OriginsController < ApplicationController

  def index 
    render :json => Origin.all 
  end

  def create 
  end

  def show 
    set_origin
    render :json => @origin 
  end

  def update 
    set_origin
  end

  def destroy
    set_origin
  end

  private 
  def set_origin
    @origin = Origin.find(session[:id])
  end
end
