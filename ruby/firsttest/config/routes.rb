Rails.application.routes.draw do

  resources :comments
  resources :users, except: [:new]
  resources :articles
  root 'pages#home'
  get 'about', to: 'pages#about'
  get 'signup', to: 'users#new'
  
end
