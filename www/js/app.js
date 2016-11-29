// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform, $cordovaNativeAudio) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);

      // Preload the different audio snippets
      $cordovaNativeAudio.preloadSimple('send', 'audio/send.mp3');
      $cordovaNativeAudio.preloadSimple('rate', 'audio/rate.mp3');
      $cordovaNativeAudio.preloadSimple('1', 'audio/star1.mp3');
      $cordovaNativeAudio.preloadSimple('2', 'audio/star2.mp3');
      $cordovaNativeAudio.preloadSimple('3', 'audio/star3.mp3');
      $cordovaNativeAudio.preloadSimple('4', 'audio/star4.mp3');
      $cordovaNativeAudio.preloadSimple('5', 'audio/star5.mp3');

    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('AppCtrl', function($scope, $ionicGesture, $cordovaNativeAudio) {

  // Set the default star rating
  $scope.score = {
    value: 3
  };

  var element = angular.element(document.querySelector('#content'));

  $ionicGesture.on('swipeup', function(e){
    $scope.$apply(function() {
      $cordovaNativeAudio.play('rate');

      // Delay 1 second and play star sound
      setTimeout(function() {
        $cordovaNativeAudio.play($scope.score.value.toString());
      }, 1000);
    })    
  }, element);

});
