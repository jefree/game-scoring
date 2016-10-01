var React = require('react');

var GameItem = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    gender: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="row game-item">
        <div className="col-md-4">
          <h3>{this.props.title}</h3>
        </div>
        <div className="col-md-4">
          <h3>{this.props.gender}</h3>
        </div>
        <div className="col-md-4">
        </div>
      </div>
    );
  }
});

module.exports = GameItem;
