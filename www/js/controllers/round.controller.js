/**
 * Created by gabrielmuscalu on 17/02/16.
 */
'use strict';

angular
  .module('sm.controllers')
  .controller('RoundController', RoundController);

RoundController.$inject = ['roundService', 'gamesService', '$stateParams', '$q'];

function RoundController(roundService, gamesService, $stateParams, $q) {
  var vm = this;
  vm.round = {};
  vm.dates = [];
  vm.games = [];

  var getRound = function () {
    roundService.single({roundId: $stateParams.roundId}).$promise.then(function (data) {
      if (data) {
        vm.round = data;
      }
    });
  };

  var getDates = function () {
    gamesService.getDatesByRound({roundId: $stateParams.roundId}).$promise.then(function (data) {
      if (data.success) {
        vm.dates = data.success;
        for (var i = 0; i < data.success.length; i++) {
          getGames(data.success[i]).then(function(games){
            vm.games.push(games);
          });
        }
      }
    });
  };

  var getGames = function (date) {
    var deferred = $q.defer();
    gamesService.getByRoundAndDate({roundId: $stateParams.roundId, date: date}).$promise.then(function (data) {
      if (data.success) {
        deferred.resolve(data.success);
      }
    });
    return deferred.promise;
  };

  getRound();
  getDates();
}
