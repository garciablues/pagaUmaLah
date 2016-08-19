angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('quemVaiParticipar', {
    url: '/page1',
    templateUrl: 'templates/quemVaiParticipar.html',
    controller: 'quemVaiParticiparCtrl'
  })

  .state('pegadorDaRodada', {
    url: '/page3',
    templateUrl: 'templates/pegadorDaRodada.html',
    controller: 'pegadorDaRodadaCtrl'
  })

  .state('histRico', {
    url: '/page4',
    templateUrl: 'templates/histRico.html',
    controller: 'histRicoCtrl'
  })

  .state('pGinaInicial', {
    url: '/page5',
    templateUrl: 'templates/pGinaInicial.html',
    controller: 'pGinaInicialCtrl'
  })
  
  .state('teste', {
    url: '/page6',
    templateUrl: 'templates/teste.html',
    controller: 'testeCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});