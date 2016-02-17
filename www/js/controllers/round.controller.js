/**
 * Created by gabrielmuscalu on 17/02/16.
 */
'use strict';

angular
  .module('sm.controllers')
  .controller('RoundController', RoundController);

RoundController.$inject = ['roundService', 'gamesService','$stateParams'];

function RoundController(roundService, gamesService, $stateParams) {
  var vm = this;
  vm.round = {};
  vm.games = [];

  var getRound = function () {
    roundService.single({roundId: $stateParams.roundId}).$promise.then(function(data){
      if (data) {
        vm.round = data;
      }
    });
  };

  var getGames = function () {
    gamesService.getByRound({roundId: $stateParams.roundId}).$promise.then(function(data){
      if (data.success) {
        vm.games = data.success;
        console.log(vm.games)
      }
    });
  };

  getRound();
  getGames();
}
