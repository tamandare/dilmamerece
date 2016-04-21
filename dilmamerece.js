(function(angular) {
	'use strict';

	var dilmamerece = angular.module('dilmamereceModule', []);

	dilmamerece.controller('dilmamereceController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

    $scope.what = [];
		$scope.currentCategory;
		$scope.now = null
		$scope.buttonOrder = 0;

		$http.get('data/what.json').then(function(response) {
			$scope.what = response.data;
			$scope.getWhat();
		});

		$scope.getWhat = function(category) {
			var list, i;

			if (!$scope.currentCategory) $scope.currentCategory = _.random(1, 4);
			if ($scope.currentCategory == 4) $scope.currentCategory = 1;
			if ($scope.now) $scope.currentCategory++;

			list = $scope.what['category' + $scope.currentCategory].options;
			i = _.random(0, list.length - 1);
			$scope.now = list[i];

			$scope.buttonOrder = _.random(0, 1);

			console.log($scope.currentCategory);
		}

		$scope.doesDeserve = function() {
			$scope.getWhat();
		}

		$scope.doesNotDeserve = function() {
			$scope.getWhat();
		}



  }]);
})(window.angular);
