'use strict';

/**
 * @ngdoc function
 * @name webZApp.controller:SimonCtrl
 * @description
 * # SimonCtrl
 * Controller of the webZApp
 */
angular.module('webZApp')
  .controller('SimonCtrl', function ($scope) {
    
  	$scope.borrar=function(colores){
  		$scope.colores=[];
  	}

    $scope.colores=[];
    $scope.title='Simón';

    $scope.play =function(color){
    	$scope.colores.push(color);
    }
  });
