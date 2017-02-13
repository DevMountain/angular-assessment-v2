// INITIALIZE APP
// ============================================================
var app = angular.module("assessment", ['ui.router']);

// CONFIG
// ============================================================
angular.module("assessment")
	.config(function($stateProvider, $urlRouterProvider) {

		// INITIALIZE STATES
		// ============================================================
		$stateProvider

  		// MacBook HOME STATE
      .state('home', {
        url: '/home',
        templateUrl: "../views/home.html"
      })

      .state('about', {
        url: '/about',
        templateUrl: "../views/about.html"
      })

      .state('blog', {
        url: '/blog',
        templateUrl: "../views/blog.html"
      })

      .state('pets', {
        url: '/pets',
        templateUrl: "../views/pets.html",
        controller: "petsCtrl"
      })

      .state('bio', {
        url: '/bio/:id',
        templateUrl: "../views/pet-bio.html",
        controller: "bioCtrl"
      });




		// ASSIGN OTHERWISE
		// ============================================================
		$urlRouterProvider.otherwise('home');
	});
