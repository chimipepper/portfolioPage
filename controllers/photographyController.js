portfolio.controller('photographyController', ['$scope', function($scope) {
    console.log('photos');
    $scope.topFunction = function() {
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    }
}]);