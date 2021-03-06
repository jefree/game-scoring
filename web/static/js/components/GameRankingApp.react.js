var React = require('react');
var GameCreator = require('./GameCreator.react');
var GameList = require('./GameList.react');
var GameStore = require('../stores/GameStore');

function getRankingState() {
  return {
    games: GameStore.all()
  }
}

var GameRankingApp = React.createClass({

  getInitialState: function() {
    return getRankingState();
  },

  componentDidMount: function() {
    GameStore.addChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className="container">
        <h1>My App</h1>
        <GameCreator />
        <GameList games={this.state.games}/>
      </div>

    );
  },

  _onChange: function() {
    this.setState(getRankingState());
  }
});

module.exports = GameRankingApp;
