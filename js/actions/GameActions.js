var AppDispatcher = require('../dispatcher/AppDispatcher');
var GameConstants = require('../constants/GameConstants');

var GameActions = {
  create: function(game) {
    AppDispatcher.dispatch({
      actionType: GameConstants.GAME_CREATE,
      game: game,
    });
  }
}

module.exports = GameActions;
