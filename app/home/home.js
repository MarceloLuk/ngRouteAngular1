'use strict';

angular.module('home', ['ngRoute', 'ngOnload'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'app/home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope', 'store', '$http', 'growl', '$location','$timeout',
  function( $scope, store, $http, growl, $location, $timeout) {

  $("#changeHeader").animate({ scrollTop: 0 }, 100);

}]).directive('checkImage', function($http) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      attrs.$observe('ngSrc', function(ngSrc) {
        if(isBase64(ngSrc) == false) {
          if (ngSrc != undefined) {
            $http.get(ngSrc).success(function () {
            }).error(function () {
              element.attr('src', 'home/img/bg-card-3.png'); // set default image
            });
          }
        }
      });
    }
  };
});
