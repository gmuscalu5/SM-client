/**
 * Created by gabrielmuscalu on 17/02/16.
 */
'use strict';

angular
  .module('sm.controllers')
  .controller('RoundController', RoundController);

RoundController.$inject = ['roundService', '$stateParams'];

function RoundController(roundService, $stateParams) {
  var vm = this;
  vm.round = {};
  var getRound = function () {
    roundService.single({roundId: $stateParams.roundId}).$promise.then(function(data){
      if (data) {
        vm.round = data;
      }
    });
  };

  getRound();
}
