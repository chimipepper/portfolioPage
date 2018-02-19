var portfolio = angular.module('portfolio', ['ui.router']);

portfolio.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('aboutme');
    $stateProvider

        .state('aboutMe', {
            url: '/aboutme',
            templateUrl: 'views/aboutMe.html',
            controller: 'aboutMeController'
        })
        .state('wikiProject', {
            url: '/wikiproject',
            templateUrl: 'views/wikiProject.html',
            controller: 'wikiProjectController'
        })
        .state('dogPen', {
            url: '/dogpen',
            templateUrl: 'views/dogPen.html',
            controller: 'dogPenController'
        })
        .state('contactPage', {
            url: '/contactpage',
            templateUrl: 'views/contactPage.html',
            controller: 'contactPageController'
        })
        .state('allProjects', {
            url: '/allprojects',
            templateUrl: 'views/allProjects.html',
            controller: 'allProjectsController'
        })
        .state('randomQuoteGenerator', {
            url: '/randomquotegenerator',
            templateUrl: 'views/randomQuoteGenerator.html',
            controller: 'randomQuoteGeneratorController'
        })
        .state('toDoList', {
            url: '/todolist',
            templateUrl: 'views/toDoList.html',
            controller: 'toDoListController'
        })
        .state('photography', {
            url: '/photography',
            templateUrl: 'views/photography.html',
            controller: 'photographyController'
        });
    //add script tags for controllers to index.html

});