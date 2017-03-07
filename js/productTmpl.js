angular.module('app').directive('productTmpl',function(){
  return{
  templateUrl: "views/product-tmpl.html",
  scope:{
    product: "=",
    index:"="
  },
  controller: function($scope){
    $scope.image=false;
  }
  }
})
