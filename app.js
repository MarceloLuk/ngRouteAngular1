'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.utils.masks',
  'angular-growl',
  'angular-storage',
  'ui.bootstrap',
  'angular-loading-bar',
  'home',
  'ngOnload',
]).

config(['$locationProvider', '$routeProvider', 'cfpLoadingBarProvider', 'growlProvider', function($locationProvider, $routeProvider, cfpLoadingBarProvider, growlProvider) {

  $routeProvider.otherwise({redirectTo: '/home'});

  cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
  cfpLoadingBarProvider.spinnerTemplate = '<div id="loader-wrapper"><div id="loader"></div></div>';
  growlProvider.globalTimeToLive(5000);

}])
.controller('appCtrl', [ '$scope', '$http', 'growl','store', '$location',
  function($scope, $http, growl, store, $location) {


  }]);

