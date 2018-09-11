class EspressoController < ApplicationController

  def index
    render :json => Espresso.all 
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
