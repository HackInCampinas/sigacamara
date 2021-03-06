// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.materiais', {
    url: '/materiais',
    views: {
      'menuContent': {
        templateUrl: 'templates/materiais.html',
        controller: 'MateriaisCtrl',
        controllerAs: 'vm'
      }
    }
  })
  .state('app.materia-detail', {
    url: '/materia-detail',
    views: {
      'menuContent': {
        templateUrl: 'templates/materia-detail.html',
        controller: 'MaterialDetailCtrl',
        controllerAs: 'vm'
      }
    }
  })

  .state('app.bairros', {
    url: '/bairros',
    views: {
      'menuContent': {
        templateUrl: 'templates/bairros.html',
        controller: 'BairroCtrl',
        controllerAs: 'vm'
      }
    }
  })
  .state('app.bairro', {
    url: '/bairro',
    views: {
      'menuContent': {
        templateUrl: 'templates/bairro.html',
        controller: 'BairroDetailCtrl',
        controllerAs: 'vm'
      }
    }
  })
  .state('app.vereadores', {
    url: '/vereadores',
    views: {
      'menuContent': {
        templateUrl: 'templates/vereadores.html',
        controller: 'VereadorCtrl',
        controllerAs: 'vm'
      }
    }
  })
  .state('app.vereador', {
    url: '/vereador',
    views: {
      'menuContent': {
        templateUrl: 'templates/vereador.html',
        controller: 'VereadorDetailCtrl',
        controllerAs: 'vm'
      }
    }
  })

  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller: 'MapCtrl',
        controllerAs: 'vm'
      }
    }
  })
  

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'vm'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});


moduleServices = angular.module('starter.services', []);
