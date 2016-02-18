/**
 * Created by gabrielmuscalu on 17/02/16.
 */
'use strict';

angular
  .module('sm')
  .factory('gamesService', gamesService);

gamesService.$inject = ['$resource', 'config'];
function gamesService($resource, config) {

  return $resource(config.serverURL + '/api/games/round/:dates/:roundId', {}, {
    getByRoundAndDate: {method: 'GET'},
    getDatesByRound: {method: 'GET', params : {dates: "dates"}}
  });
}
