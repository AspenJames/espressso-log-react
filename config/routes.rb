Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :coffee_shops, :only => [:create, :update, :show, :destroy] do
    resources :espressos, :only => [:create, :update, :show, :index, :destory]
    resources :origins, :only => [:create, :update, :show, :index, :destory]
  end
end
