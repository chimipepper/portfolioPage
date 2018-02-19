portfolio.controller('allProjectsController', ['$scope', function($scope) {
    console.log('all my projects');
    $scope.topFunction = function() {
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    }
}]);