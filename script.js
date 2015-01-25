
var wordcatApp = angular.module('wordcatApp', []);
wordcatApp.controller('WordListCtrl', function ($scope) {
  $scope.words = [
    {'name': 'with','list':'1'},
    {'name': 'cat','list':'1'},
	{'name': 'dog','list':'1'}
  ];
  $scope.index = 0;
  $scope.word = $scope.words[$scope.index].name;
  $scope.Next = function(){
	  console.log('next fired');
	  if ($scope.index < ($scope.words.length -1)) $scope.index++;
	    $scope.word = $scope.words[$scope.index].name;
  }
  $scope.Previous = function(){
	  console.log('previous fired');
	  if ($scope.index>0) $scope.index--;
	    $scope.word = $scope.words[$scope.index].name;
  }
});
console.log('script ran');