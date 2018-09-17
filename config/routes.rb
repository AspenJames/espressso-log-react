Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :coffee_shops, :only => [:create, :update, :show, :destroy] do
      resources :espressos, :only => [:create, :update, :show, :index, :destory]
      resources :origins, :only => [:create, :update, :show, :index, :destory]
    end

    resources :users, :only => [:create, :update, :show, :index, :destroy]

    post '/login' => 'sessions#create'
    post '/logout' => 'sessions#destroy'
  end
end
