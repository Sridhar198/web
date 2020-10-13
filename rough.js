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
    