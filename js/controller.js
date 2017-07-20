angular.module("trivia").controller("controller", function($scope,services){
    $scope.getQ = function() {
        $scope.getQ = services.getQ().then(function(response) {
            $scope.getQ = response.data;
            console.log(response.data)
        })
    }
        $scope.getQ()
})


//  {{item.question}} <br>
//       {{item.animal}} <br>
//       {{item.options}} <br>
//       {{item.correct_answer}} <br>
//       {{item.id}}<br>
//       {{item.difficulty}}<br>