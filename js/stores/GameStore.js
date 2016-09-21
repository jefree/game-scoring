var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var games = []; // {title: 'a title', gender: 'a gender'}

var CHANGE_EVENT = 'change';

function createGame(title, gender) {
  games.push({
    title: title,
    gender: gender
  });
}

var GameStore = assign({}, EventEmitter.prototype, {
  all: function() {
    return games;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case GameConstants.GAME_CREATE:
      createGame(action);
      GameStore.emitChange();
      break;
  }
});

module.exports = GameStore;
