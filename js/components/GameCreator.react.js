var React = require('react');
var GameActions = require('../actions/GameActions');

function createGame(event) {
  GameActions.create('title1', 'gender1');
}

var GameCreator = React.createClass({
  
  render: function() {
    return (
      <div>
        <input name="title" />
        <input name="gender" />
        <button onClick={createGame}> Crear </button>
      </div>
    );
  }
});

module.exports = GameCreator;
