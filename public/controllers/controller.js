/*
* @Author: YADONG
* @Date:   2017-05-12 23:02:28
<<<<<<< HEAD
* @Last Modified by:   fengzimu
* @Last Modified time: 2017-05-14 15:36:01
*/

'use strict';
var app = angular.module("app", []);
app.controller("AppCtrl", ['$scope', function($scope){
	console.log("Say hi from controller");
    $scope.say = "Hi, First node Demo";
}]);
