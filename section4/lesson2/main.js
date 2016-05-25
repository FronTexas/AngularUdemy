var app = angular.module('codecraft', []);

app.controller('ParentController', function ($scope, $rootscope) {
	//$scope.name = "Parent";
    //
	//$scope.reset = function () {
	//	$scope.name = "Parent";
	//};

});

app.controller('ChildController', function ($scope) {
	$scope.reset = function () {
			$rootscope.name = "reset by child";
		};
});


