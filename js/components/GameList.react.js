var React = require('react');

var GameList = React.createClass({

  propTypes: {
    games: React.PropTypes.object.isRequired
  },

  render: function() {
    var games = this.props.games.map(function() {
      return <GameItem title=game.title gender=game.gender />
    });

    return (
      <div>
        <h2> Game List </h2>
        <ul> {games} </ul>
      </div>
    )
  }
});

module.exports = GameList;
