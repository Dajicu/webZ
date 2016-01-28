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
    
  	

    $scope.colores=[];
    $scope.title='Simón';
    $scope.acumuladorV = 0;
    $scope.acumuladorR = 0;
    $scope.acumuladorAm = 0;
    $scope.acumuladorAz = 0;

    $scope.play =function(color){
    	
      switch(color){

        case 'verde':
          $scope.acumuladorV++;
          break;

        case 'rojo':
          $scope.acumuladorR++;
          break;

        case 'amarillo':
          $scope.acumuladorAm++;
          break;

        case 'azul':  
          $scope.acumuladorAz++;
          break;
          
      }
    $scope.colores.push(color);
    }
 
    $scope.borrar=function(colores){
          $scope.colores=[];
          $scope.acumuladorV = 0;
          $scope.acumuladorR = 0;
          $scope.acumuladorAz = 0;
          $scope.acumuladorAm = 0;
        }



 });






   