// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngMaterial'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  // $mdThemingProvider.theme('default')
  //   .primaryPalette('pink', {
  //     'default': '400', // by default use shade 400 from the pink palette for primary intentions
  //     'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
  //     'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
  //     'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
  //   })
  //   // If you specify less than all of the keys, it will inherit from the
  //   // default shades
  //   .accentPalette('purple', {
  //     'default': '200' // use shade 200 for default, and keep all other shades the same
  //   });

  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.tooltip', {
    url: "/tooltip",
    views: {
      'menuContent': {
        templateUrl: "templates/tooltip.html"
      }
    }
  })

  .state('app.topics', {
    url: "/topics",
    views: {
      'menuContent': {
        templateUrl: "templates/expanded.html",
          controller: 'TopicsCtrl'
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});