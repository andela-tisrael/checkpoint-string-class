angular.module('StringClass', [])
  .controller('StringCtrl', ['$scope', ($scope) => {
    $scope.options = [
      { id: 0, label: 'hasVowels'},
      { id: 1, label: 'toUpper'},
      { id: 2, label: 'toLower'},
      { id: 3, label: 'ucFirst'},
      { id: 4, label: 'isQuestion'},
      { id: 5, label: 'word'},
      { id: 6, label: 'wordCount'},
      { id: 7, label: 'inverseCase'},
      { id: 8, label: 'alternatingCase'},
      { id: 9, label: 'getMiddle'},
      { id: 10, label: 'numberWords'},
      { id: 11, label: 'isDigit' },
      { id: 12, label: 'doubleCheck' },
      { id: 13, label: 'toCurrency' },
      { id: 14, label: 'fromCurrency' }
    ];

    $scope.showResult = (stringQuery, selectedMethod) => {
      if (selectedMethod === undefined) {
        $scope.result = 'Select a Method';
      }
      else if (stringQuery === undefined) {
        $scope.result = 'Type in a String in the input box';
      }
      else {
        $scope.result = applyMethod(selectedMethod.label, stringQuery);
      }
    };

    let applyMethod = (method, query) => {
      return query[method]();
    };
  }]);