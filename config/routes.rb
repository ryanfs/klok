Rails.application.routes.draw do

root to: 'timeblocks#index'
resources :projects
resources :timeblocks
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
