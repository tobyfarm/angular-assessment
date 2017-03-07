angular.module("app").controller('productDetailsCtrl', function($scope,$state,$stateParams,shopService){
  $scope.idx = $stateParams.productID

  $scope.getProductId = shopService.getProductId
  $scope.getProductId($scope.idx).then(function(response){
    $scope.productId = response;
  })
})
