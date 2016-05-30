'use strict';
/*
var socketIO;// = require('socket.io-client');

module.exports = function socketService(endpointLocatorService) {

  var socket;
  var socketURL = '';

  return {
    init: init,
    send: send,
    listen: listen
  };

  function init() {
    socket = socketIO(socketURL);
  }

  function addListener(socket, eventName, callback) {
    return socket.on(eventName, function () {
      if (callback) callback.apply(socket, arguments);
    });
  }

  function addSender(eventName, data, callback) {
    return socket.emit(eventName, data, function () {
      if (callback) callback.apply(socket, arguments);
    });
  }

  function listen(eventName, callback) {
    if (socket) return addListener(socket, eventName, callback);
  }

  function send(eventName, data) {
    return addSender(eventName, data);
  }
};*/
