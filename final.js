var myApp = angular.module("myModule", []);
myApp.controller("myController", function($scope) {
    var varieties = [
        { name: "AKW-381" , time: "55-60" , mtime: "90-95" , yield: "30-35 "},
        { name: "HI-977" , time: "55-60" , mtime: "100-105" , yield: "25-30 "},
        { name: "HD-2501" , time: "65-70" , mtime: "100-105" , yield: "30-35"}
    ];
    $scope.varieties = varieties;   
    $scope.search = function(item){
        if($scope.SearchText ==undefined){
            return true;
        }
        else {
            if(item.name.tolowerCase().indexof($scope.SearchText.tolowerCase()) !=-1)
            {
                return true;
            }
        }
         return false; 
    }
});
myApp.controller("myListController", function($scope) {
    $scope.items = ["HD 2080", "HD 7156", "HD 8256"];
    $scope.newItem = "";
    $scope.pushItem = function () {
        if($scope.newItem !="") {
            $scope.items.push($scope.newItem);
            $scope.newItem = "";
        }
    }
    $scope.deleteItem = function (index){
        $scope.items.splice(index,1);
    }
});
myApp.controller("myreqController", function($scope) {
    var web = [
        {method:"AKW-381", likes:0, dislikes:0},
        {method:"HI-977", likes:0, dislikes:0},
        {method:"HD-2501", likes:0, dislikes:0}
    ];
    $scope.web = web;

    $scope.incrementLikes = function(web) {
        web.likes++;
    }

    $scope.incrementDislikes = function(web) {
        web.dislikes++;
    }

});
myApp.controller('formCtrl', function ($scope) {
    $scope.sendForm = function () {
    $scope.msg = "Form Submitted";
    };
    });