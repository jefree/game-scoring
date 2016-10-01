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
      <form className="form-inline">
        <div className="form-group">
          <input value={this.state.title} onChange={this.handleTitleChange} className="form-control" placeholder="Title"/>
          <input value={this.state.gender} onChange={this.handleGenderChange} className="form-control" placeholder="Gender"/>
        </div>
        <button onClick={this.createGame} disabled={this.disableCreate()} className="btn btn-primary"> Crear </button>
      </form>
    );
  },

  handleTitleChange: function(event) {
    this.setState({title: event.target.value});
  },

  handleGenderChange: function(event) {
    this.setState({gender: event.target.value});
  },

  disableCreate: function() {
    return !this.state.title || !this.state.gender;
  },

  createGame: function(event) {
    GameActions.create(this.state);
    this.setState(this.getInitialState());
  }
});

module.exports = GameCreator;
