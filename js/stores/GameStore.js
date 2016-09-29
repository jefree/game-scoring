var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var GameConstants = require('../constants/GameConstants');

var games = []; // {title: 'a title', gender: 'a gender'}

var CHANGE_EVENT = 'change';

function isValidGame(game) {
  return game.title != '' && game.gender != '';
}

function addGame(game) {
  games.push({
    title: game.title,
    gender: game.gender
  });
}

function createGame(game) {
  if (isValidGame(game)) {
    addGame(game);
  }
}

var GameStore = assign({}, EventEmitter.prototype, {
  all: function() {
    return games;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case GameConstants.GAME_CREATE:
      createGame(action.game);
      GameStore.emitChange();
      break;
  }
});

module.exports = GameStore;
