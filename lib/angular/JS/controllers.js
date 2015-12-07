var myAPP = angular.module('myApp',[]);

myApp.controllers('MyController', function MyController($scope){

  $scope.author = {

    'name'='Alex Ramm',
    'title'='Staff Author',
    'company'='Staff ORG'
  }
})
