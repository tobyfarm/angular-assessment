angular.module("app", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider
  .otherwise('/')

  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: "views/home.html"
    })
    .state('about',{
      url:'/about',
      templateUrl: "views/about.html"
    })
    .state('blog',{
      url:'/blog',
      templateUrl: "views/blog.html"
    })
    .state('shop',{
      url:'/shop',
      templateUrl:"views/shop.html"
    })
    .state('details',{
      url:'/details/:productID',
      templateUrl:"views/product-details.html",
      controller: "productDetailsCtrl"
    })





})
