var AppDispatcher = require('../dispatcher/AppDispatcher');
var GameConstants = require('../constants/GameConstants');

var GameActions = {
  create: function() {
    AppDispatcher.dispatch({
      actionType: GameConstants.GAME_CREATE,
      title: title,
      gender: gender
    });
  }
}
