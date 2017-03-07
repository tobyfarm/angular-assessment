angular.module("app").service('shopService', function($http,$q){

  this.getProducts = function(){
    return $http.get('http://practiceapi.devmounta.in/products').then(function(response){
      return response.data
    console.log(response.data)

    })
  }

  this.getProductId = function(index){
    return $http.get('http://practiceapi.devmounta.in/products/'+index).then(function(response){
      return response.data
      console.log(response.data)
    })
  }

})
