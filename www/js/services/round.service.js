/**
 * Created by gabrielmuscalu on 17/02/16.
 */
'use strict';

angular
  .module('sm')
  .factory('roundService', roundService);

roundService.$inject = ['$resource', 'config'];
function roundService($resource, config) {

    return $resource(config.serverURL + '/api/rounds/:roundId', {}, {
      get: {method: 'GET', isArray: true},
      single: {method: 'GET', isArray: false}
    });
}
