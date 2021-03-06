'use strict';

/**
 * @ngdoc overview
 * @name webZApp
 * @description
 * # webZApp
 *
 * Main module of the application.
 */
angular
  .module('webZApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/sobrenosotros', {
        templateUrl: 'views/sobrenosotros.html',
        controller: 'SobrenosotrosCtrl',
        controllerAs: 'sobrenosotros'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        controllerAs: 'portfolio'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contacto'
      })
      .when('/simon', {
        templateUrl: 'views/simon.html',
        controller: 'SimonCtrl',
        controllerAs: 'simon'
      })
      .when('/condicionales', {
        templateUrl: 'views/condicionales.html',
        controller: 'CondicionalesCtrl',
        controllerAs: 'condicionales'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
