'use strict';

module.exports = function enviromentService(){

  return {
    isDev:isDev,
    isProd:isProd,
    getEnv: getEnv
  };

  function isDev(){
    return !!~document.URL.indexOf('localhost');
  }

  function isProd(){
    return (isDev()) ? false : true;
  }

  function getEnv(){
    return (isDev()) ? 'DEV' : 'PROD' ;
  }

};
