
//testear

//que se lanza el metodo init
//que se llama al metodo getData
//que context.data tiene el valor del json (mirar lo que te he pasado )

'use strict';

module.exports = function homeController(homeService){

  var context = this;
  context.init = init;
  context.getData = getData;
  init();

  function init(){
    context.data = context.getData();
    return true;
  }

  function getData(){
    return homeService.getData();
  }

};
