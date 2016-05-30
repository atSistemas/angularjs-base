'use strict';

module.exports = function commentService($http, endpointLocatorService) {

  return {
    getData: getData
  };

  function getData(params) {
    var endpoint = endpointLocatorService.locate('home');
    return $http.get(endpoint)
      .then(responseHandler)
      .catch(errorHandler);
  }

  function responseHandler(response){
    return response.data;
  }

  function errorHandler(error){
    console.log('[ERR]:',error);
    return error;
  }

};
