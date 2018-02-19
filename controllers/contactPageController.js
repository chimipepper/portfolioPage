portfolio.controller('contactPageController', ['$scope', function($scope) {
    console.log('contact page');
    $scope.topFunction = function() {
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    }
}]);