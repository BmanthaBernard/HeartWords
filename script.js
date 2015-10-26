function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


var wordcatApp = angular.module('wordcatApp', ['ngTouch']);
wordcatApp.controller('WordListCtrl', function($scope) {
    var list1 = ['the', 'no', 'in', 'is', 'I', 'it', 'go', 'me', 'and', 'a'];
    var list2 = ['at', 'to', 'he', 'run', 'my', 'yes', 'like', 'will', 'see', 'am'];
    var list3 = ['on', 'not', 'jump', 'we', 'can', 'you', 'into', 'she', 'ran', 'for'];
    var list4 = ['now', 'this', 'too', 'that', 'be', 'with', 'was', 'out', 'get', 'do'];
    var list5 = ['said', 'eat', 'ride', 'but', 'come', 'all', 'one', 'up', 'play', 'little'];
    var list6 = ['did', 'so', 'pretty', 'are', 'look', 'saw', 'went', 'have', 'because', 'say'];
    var list7 = ['what', 'these', 'please', 'they', 'good', 'ate', 'here', 'find', 'want', 'must'];
    var list8 = ['new', 'came', 'where', 'make', 'soon', 'well', 'brown', 'four', 'help', 'big'];
    var list9 = ['down', 'funny', 'three', 'blue', 'away', 'who', 'our', 'two', 'under', 'red'];
    var list10 = ['also', 'him', 'yellow', 'white', 'every', 'black', 'has', 'from', 'them', 'if'];
    var list11 = ['the', 'of', 'and', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'for', 'was', 'on', 'are', 'as', 'with', 'his', 'they', 'at', 'be', 'this', 'from', 'I', 'have', 'or', 'by', 'one', 'had', 'not'];
    var list12 = ['and', 'me', 'go', 'in', 'it', 'not', 'run', 'will', 'you', 'can', 'a', 'I', 'is', 'not', 'my', 'the', 'yes'];
    var list13 = ['to', 'said', 'for', 'his', 'they', 'of', 'come', 'be', 'one', 'dog', 'he', 'she', 'that', 'but', 'out', 'one', 'all', 'with', 'her', 'was'];
    var list14 = ['what', 'him', 'up', 'look', 'day', 'have', 'mother', 'then', 'when', 'do', 'we', 'so', 'are', 'little', 'at', 'your', 'like', 'get', 'thing', 'too'];
    $scope.list = 'list1';
    $scope.index = 0;

    $scope.words = list1;
    $scope.listlength = $scope.words.length
    $scope.word = $scope.words[$scope.index];

    $scope.LoadData = function() {
        $scope.index = 0; //reset index on list change
        switch ($scope.list) {
            case 'list1':
                $scope.words = shuffle(list1);
                break;
            case 'list2':
                $scope.words = list2;
                break;
            case 'list3':
                $scope.words = list3;
                break;
            case 'list4':
                $scope.words = list4;
                break;
            case 'list5':
                $scope.words = list5;
                break;
            case 'list6':
                $scope.words = list6;
                break;
            case 'list7':
                $scope.words = list7;
                break;
            case 'list8':
                $scope.words = list8;
                break;
            case 'list9':
                $scope.words = list9;
                break;
            case 'list10':
                $scope.words = list10;
                break;
            case 'list11':
                $scope.words = shuffle(list11);
                break;
            case 'list12':
                $scope.words = shuffle(list12);
                break;
            case 'list13':
                $scope.words = shuffle(list13);
                break;
            case 'list14':
                $scope.words = shuffle(list14);
                break;
        }
        $scope.listlength = $scope.words.length
        $scope.word = $scope.words[$scope.index];
    };


    $scope.Next = function() {
        if ($scope.index < ($scope.words.length - 1)) $scope.index++;
        $scope.word = $scope.words[$scope.index];
    };
    $scope.Previous = function() {
        if ($scope.index > 0) $scope.index--;
        $scope.word = $scope.words[$scope.index];
    };
    $scope.listChange = function() {
        $scope.LoadData();
    };
});
