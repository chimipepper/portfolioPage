portfolio.controller('aboutMeController', ['$scope', function($scope) {
    console.log('test');
    $scope.topFunction = function() {
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    };
}]);