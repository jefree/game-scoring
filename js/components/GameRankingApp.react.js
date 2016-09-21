var React = require('react');
var GameCreator = require('./GameCreator.react');
var GameList = require('./GameList.react');

var getRankingState() {
  return {
    games: GameStore.all();
  }
}

var GameRankingApp = React.createClass({

  getInitialState: function() {
    getRankingState();
  },

  componentDidMount: function() {
    GameTodo.addChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        My app
        <GameCreator />
        <GameList />
      </div>

    );
  },

  _onChange: function() {
    this.setState(getRankingState());
  }
});

module.exports = GameRankingApp;
