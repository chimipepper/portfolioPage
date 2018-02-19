portfolio.controller('randomQuoteGeneratorController', function($scope, quotesService, $window) {
    console.log('random quote');
    $scope.getQuote = function() {
        quotesService   //grabs quotesService which already has function to grab api and find random quote
            .getQuote() 
            .then(function(response) {
                $scope.myWelcome = response;
            });
    };
    //sends quote to twitter
    $scope.tweetQuote = function() {
        var quoteToTweet = 'https://twitter.com/intent/tweet?text=' + $scope.myWelcome.quote + '  -' + $scope.myWelcome.author;
        $window.open(quoteToTweet, '_blank');
        console.log($scope.myWelcome.quote);
    };
    //Scroll to Top
    $scope.topFunction = function() {
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    };
    //   var answer =  MathService.addNumbers(1,2)
    //   console.log(answer)
});