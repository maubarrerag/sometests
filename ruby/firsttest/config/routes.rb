Rails.application.routes.draw do

  resources :comments
  resources :users
  resources :articles
  root 'pages#home'
  get 'about', to: 'pages#about'
  
end
