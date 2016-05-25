var app = angular.module('minmax', []);

// https://minmax-server.herokuapp.com/register/'

app.controller("FormController",function($scope, $http){
    $scope.formModel = {};
    $scope.consoleLog =""
    $scope.onSubmit = function(){
        console.log("Hey I'm submitted")
        console.log($scope.formModel)

        $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel)
            .success(function (data){
                console.log(":)");
            }).error(function(data){
                console(":(");
            })



        $scope.consoleLog = $scope.formModel
    }
});

