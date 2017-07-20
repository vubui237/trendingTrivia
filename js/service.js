angular.module("trivia").service("services", function($http) {
    this.getQ = function() {
        return $http({
            method: "GET",
            url: "https://practiceapi.devmountain.com/api/trivia/questions/"
        })
    }


})