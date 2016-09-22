var React = require('react');

var GameItem = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    gender: React.PropTypes.string.isRequired
  },

  render: function() {
    return (<li> {this.props.title} : {this.props.gender} </li>);
  }
});

module.exports = GameItem;
