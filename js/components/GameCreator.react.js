var React = require('react');

var GameCreator = React.createClass({
  
  render: function() {
    return (
      <div>
        <input name="title" />
        <input name="gender" />
        <button> Crear </button>
      </div>
    );
  }
});

module.exports = GameCreator;
