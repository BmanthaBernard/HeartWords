
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
	  if (index < ($scope.words.length -1)) index++;
  }
  $scope.Previous = function(){
	  if (index>0) index--;
  }
});
console.log('script ran');