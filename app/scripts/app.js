'use strict';

var app = angular.module('phase3TestApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ]);


app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'views/firstPage.html',
          controller: 'PostsCtrl'
      })
      .when('/page2', {
          templateUrl: 'views/secondPage.html',
          controller: 'PostViewCtrl'
      })
      .when('/page2/:postId', {
          templateUrl: 'views/secondPage.html',
          controller: 'PostViewCtrl'
      })

        .when('/page3', {
          templateUrl: 'views/thirdPage.html',
          controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

.constant('FIREBASE_URL', 'https://phase3test.firebaseio.com/');

