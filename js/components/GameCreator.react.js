var React = require('react');
var GameActions = require('../actions/GameActions');

var GameCreator = React.createClass({
  getInitialState: function() {
    return {
      title: "",
      gender: ""
    };
  },
  render: function() {
    return (
      <div>
        <input value={this.state.title} onChange={this.handleTitleChange}/>
        <input value={this.state.gender} onChange={this.handleGenderChange}/>
        <button onClick={this.createGame}> Crear </button>
      </div>
    );
  },

  handleTitleChange: function(event) {
    this.setState({title: event.target.value});
  },

  handleGenderChange: function(event) {
    this.setState({gender: event.target.value});
  },

  createGame: function(event) {
    GameActions.create(this.state);
  }
});

module.exports = GameCreator;
