var wordcatApp = angular.module('wordcatApp', ['ngTouch']);
wordcatApp.controller('WordListCtrl', function ($scope) {
    $scope.words = [{
        'name': 'the',
            'list': '1'
    }, {
        'name': 'no',
            'list': '1'
    }, {
        'name': 'in',
            'list': '1'
    }, {
        'name': 'is',
            'list': '1'
    }, {
        'name': 'I',
            'list': '1'
    }, {
        'name': 'it',
            'list': '1'
    }, {
        'name': 'go',
            'list': '1'
    }, {
        'name': 'me',
            'list': '1'
    }, {
        'name': 'and',
            'list': '1'
    },{
        'name': 'a',
            'list': '1'
    }
	];
    $scope.index = 0;
    $scope.word = $scope.words[$scope.index].name;
    $scope.Next = function () {
        console.log('next fired');
        if ($scope.index < ($scope.words.length - 1)) $scope.index++;
        $scope.word = $scope.words[$scope.index].name;
    };
    $scope.Previous = function () {
        console.log('previous fired');
        if ($scope.index > 0) $scope.index--;
        $scope.word = $scope.words[$scope.index].name;
    };
});
console.log('script ran');