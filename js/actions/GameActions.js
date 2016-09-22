var AppDispatcher = require('../dispatcher/AppDispatcher');
var GameConstants = require('../constants/GameConstants');

var GameActions = {
  create: function(title, gender) {
    AppDispatcher.dispatch({
      actionType: GameConstants.GAME_CREATE,
      title: title,
      gender: gender
    });
  }
}

module.exports = GameActions;
