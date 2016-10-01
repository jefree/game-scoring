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
      <div className="game-list">
        <h2> Game List </h2>
        <div className="col-md-4">
          <h2>Title</h2>
        </div>
        <div className="col-md-4">
          <h2>Gender</h2>
        </div>
        <div className="col-md-4">
          <h2>Actions</h2>
        </div>
        <ul>{games}</ul>
      </div>
    )
  }
});

module.exports = GameList;
