var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var games = []; // {title: 'a title', gender: 'a gender'}

function createGame(title, gender) {
  games.push({
    title: title,
    gender: gender
  });
}

var GameStore = assign({}, EventEmitter.prototype, {
  all: function() {
    return games;
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case GameConstants.GAME_CREATE:
      createGame(action);
      break;
  }
});

module.exports = GameStore;
