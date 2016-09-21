var React = require('react');

var GameItem = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    gender: React.PropTypes.string.isRequired
  },

  render: function() {
    return <li> {title} : {gender} </li>;
  }
});
