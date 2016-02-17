/**
 * Created by gabrielmuscalu on 17/02/16.
 */
'use strict';

angular
  .module('sm.controllers', [])
  .controller('AppController', AppController);

AppController.$inject = ['roundService'];

function AppController(roundService) {
  var vm = this;
  vm.rounds = [];

  var getRounds = function () {
      roundService.get().$promise.then(function(data){
        if (data) {
          vm.rounds = data;
        }
      });
    };

  getRounds();
}
