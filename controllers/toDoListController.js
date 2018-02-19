portfolio.controller ('toDoListController',['$scope', function($scope){
    console.log('testinggg')
    //remove errand from toDos scope
    $scope.removeErrand= function(x){
        var removedErrand= $scope.toDos.indexOf(x); /*looks for indexOf that x of that scope object (toDos) */
        /*once index is found, array is modified to remove that element*/
    $scope.toDos.splice(removedErrand,1); /*starts at that index [0/1/2] and splices it and removed 1 element*/
    };
    
    //add errand to toDos scope
    $scope.addErrand=function(){
        $scope.toDos.push({    /*input needs to be saved as an object cuz it's going into an array*/
            errand:$scope.newerrand.errand,
            time:$scope.newerrand.time,
        });
        /*input forms need to clear out once input data has been added (still within same function) -->set variables to empty strings*/
        $scope.newerrand.errand="";
        $scope.newerrand.time="";
    };
    
    $scope.toDos= [
        {
            errand:"feed the cat",
            time: 8
        },
        {
            errand:"go on a run",
            time: 9
        },
        {
            errand:"clean your room",
            time: 2
        },
        {
            errand:"eat dinner",
            time: 8
        }
        ];
        
        //Scroll to Top
        $scope.topFunction = function() {
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    };
}]);