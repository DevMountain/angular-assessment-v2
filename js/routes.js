assessment.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
          .state('home',{
            url:'/',
            templateUrl: './views/home.html'
          })
          .state('pets',{
              url:'/pets',
              templateUrl: './views/pets.html',
              controller: 'mainCtrl'
          })
          .state('blog',{
              url:'/blog',
              templateUrl: './views/blog.html'
          })
          .state('about',{
              url:'/about',
              templateUrl: './views/about.html'
          })
          .state('bio',{
              url:'/bio/:id',
              templateUrl: './views/pet-bio.html',
              controller: 'mainCtrl'
          });

          $urlRouterProvider
              .otherwise('/');
});
