Rails.application.routes.draw do

  devise_for :users
  root 'groups#index'


  resources :users, only: [:index, :edit, :update]
  # get 'users/update'
  # get 'users/:id/edit' => "users#edit"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get "group/new" => "groups#new"
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end


