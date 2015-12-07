var React = require('react');


module.exports = React.createClass({

  render: function() {

    return <div>
      I am a comment box
        <ul>
          {this.renderComments()}
        </ul>
      </div>
  },

  renderComments: function() {

    return this.props.comments.map(function(comment) {
        console.log(comment);
        return <div key={comment.id}>{JSON.stringify(comment)}</div>
    });

  }
});
