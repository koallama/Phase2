// Ionic Starter App
//var starter = angular.module('appConfig', []);

angular.module('appConfig', []).constant('appConfig', {
    "apiAddr": "https://fast-crag-53327.herokuapp.com/"
});

//angular.module('starter.services', ['starter.config']);


// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova'])

.run(function($ionicPlatform, $rootScope, User, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

   $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error){
      $state.go("login");
   });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    resolve: { islogged: function(User){
        return User.isLogged();
      }
    }
  })
 // Each tab has its own nav history stack:

  .state('tab.home', {
      url: '/home',
      views: {
          'tab-home': {
              templateUrl: 'templates/tab-home.html',
              controller: 'HomeCtrl'
          }
      }
  })

  .state('tab.browse', {
      url: '/browse',
      views: {
          'tab-browse': {
              templateUrl: 'templates/tab-browse.html',
              controller: 'BrowseCtrl'
          }
      }
  })

  .state('tab.browse-detail', {
      url: '/browse/:id',
      views: {
          'tab-browse': {
              templateUrl: 'templates/browse-detail.html',
              controller: 'BrowseDetailCtrl'
          }
      }
  })

  .state('tab.browse-search', {
      url: '/search',
      views: {
          'tab-browse': {
              templateUrl: 'templates/tab-search.html',
              controller: 'SearchCtrl'
          }
      }
  })

  .state('tab.activity', {
      url: '/activity',
      views: {
          'tab-activity': {
              templateUrl: 'templates/tab-activity.html',
              controller: 'ActivityCtrl'
          }
      }
  })

  .state('tab.account', {
      url: '/account',
      views: {
          'tab-account': {
              templateUrl: 'templates/tab-account.html',
              controller: 'AccountCtrl'
          }
      }
  })

  .state('post', {
      url: '/post',
      templateUrl: 'templates/post.html',
      controller: 'PostCtrl'
  })

  .state('post-confirm', {
      url: '/confirm',
      templateUrl: 'templates/post-confirm.html',
      controller: 'PostConfirmCtrl',
      params: {
          imageUri: null
      }
  })

  .state('comment', {
      url: '/comment/:postId',
      templateUrl: 'templates/comment-post.html',
      controller: 'PostCommentCtrl'
  })
    ////////////
    .state('login', {
        url: '/login',
        templateUrl: '/templates/login.html',
        controller: 'LoginCtrl'
    })

    .state('register', {
        url: '/register',
        templateUrl: '/templates/register.html',
        controller: 'registerCtrl'
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

});
