portfolio.controller('dogPenController', ['$scope', '$http', function($scope, $http) {
    console.log('dog app');
    //Get request to dog api
    $scope.dogSearch = function() {
        var url = "https://dog.ceo/api/breeds/image/random";
        $http.get(url)
            .then(function(response) {
                console.log(response);
                $scope.dogPic = response.data;
            });
    };
    $scope.myDogs = [{
        name: "Scooby Doo",
        picture: "https://dog.ceo/api/img/bulldog-french/n02108915_12139.jpg"
    }];
    
    //addtoPen function-adds to myDog scope
    $scope.addToPen = function(dogName) {
        $scope.myDogs.push({
            name: dogName,
            picture: $scope.dogPic.message
        });
        $scope.dogName = "";
        console.log("test");
    };
    $scope.dogSearch();
    
    //removeDog function-removes from myDogs scope
    $scope.removeDog = function(x) {
        var removedDog = $scope.myDogs.indexOf(x); /*looks for indexOf that x of that scope object (ninjas) */
        /*once index is found, array is modified to remove that element*/
        $scope.myDogs.splice(removedDog, 1); /*starts at that index [0/1/2] and splices it and removed 1 element*/
    };
    //scroll to top
    $scope.topFunction = function() {
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    };
}]);