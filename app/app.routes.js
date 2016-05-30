'use strict';

module.exports = function($stateProvider, $urlRouterProvider) {

  $stateProvider.
    state('home', {
      url: '/home',
      controller: 'homeController as context',
      templateUrl: 'app.modules/home/templates/home.html'
    }
  );

  $urlRouterProvider
  .when( '/' ,'/home')
  .otherwise( 'home' );

};
