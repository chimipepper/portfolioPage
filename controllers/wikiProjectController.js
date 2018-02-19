portfolio.controller('wikiProjectController', ['$scope', '$http',function($scope, $http) {
    console.log('wikipage');
    $scope.searchWiki = function() {
        $scope.results = [];
        //GET request with searchInput
        var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&formatversion=2&generator=prefixsearch&gpssearch=" + $scope.searchInput + "&gpslimit=100&prop=pageimages%7Cpageterms&piprop=thumbnail&pithumbsize=50&pilimit=100&redirects=&wbptterms=description&origin=*";
        $http.get(url)
            .then(function(response) {
                $scope.resultsFirst = response.data.query;
                $scope.results = $scope.resultsFirst.pages;
                console.log(response)
            });
    };
    //GET request for random article-different endpoint
    $scope.randomArticleSearch = function() {
        var randomArticleUrl = "https://en.wikipedia.org/w/api.php?action=query&rnnamespace=0&format=json&list=random&rnlimit=1&origin=*";
        $http.get(randomArticleUrl)
            .then(function(response) {
                $scope.articleResults = response.data.query.random[0];
                // $scope.articleResults1=$scope.resultsFirst.title;
                console.log($scope.articleResults);
            });
    };
    //Scroll to Top
    $scope.topFunction = function() {
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    };
}]);