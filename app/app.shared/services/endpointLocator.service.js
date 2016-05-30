'use strict';

module.exports = function endpointLocatorService(enviromentService){

  var ENV = enviromentService.getEnv();

  return {
    locate : locate,
  };

  function locate(endpoint, param ){
    return (ENV === 'DEV') ? getDevEndpoints(endpoint, param) : getProductionEndpoints(endpoint, param);
  }

  function getDevEndpoints(endpoint, param){
    /*jshint maxcomplexity:false*/
    switch(endpoint) {
      case 'home': return '/mocks/home.json';
      default : return endPointNotFound(endpoint);
    }
  }

  function getProductionEndpoints(endpoint, param){
    /*jshint maxcomplexity:false*/
    switch(endpoint) {
      case 'home': return '/homeService';
      default : return endPointNotFound(endpoint);
    }
  }

  function endPointNotFound(endpoint){
    return false;
  }

};
