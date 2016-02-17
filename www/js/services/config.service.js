/**
 * Created by gabrielmuscalu on 17/02/16.
 */
angular
  .module('sm')
  .service('config', config);

function config () {
  return {
    serverURL: 'http://127.0.0.1:9000'
  }
}
