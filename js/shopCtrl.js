angular.module("app").controller('shopCtrl', function($scope,$state,$stateParams,shopService){


  $scope.getProducts = shopService.getProducts
  $scope.getProducts().then(function(response){

$scope.products = response;

  })


})
