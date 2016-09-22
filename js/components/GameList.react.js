var React = require('react');
var GameItem = require('./GameItem.react');

var GameList = React.createClass({

  propTypes: {
    games: React.PropTypes.array.isRequired
  },

  render: function() {
    var games = this.props.games.map((game, i) =>
      <GameItem key={i} title={game.title} gender={game.gender} />
    );

    return (
      <div>
        <h2> Game List </h2>
        <ul>{games}</ul>
      </div>
    )
  }
});

module.exports = GameList;
