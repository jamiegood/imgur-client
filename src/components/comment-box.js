var React = require('react');


module.exports = React.createClass({

  render: function() {

    return <div>
        <ul className="list-group">
          {this.renderComments()}
        </ul>
      </div>
  },

  renderComments: function() {

    return this.props.comments.slice(0, 20).map(function(comment) {
        return <li className="list-group-item comment-box" key={comment.id}>
          <span className="badge">{comment.ups}</span>
          <h5>Comment</h5>
          {comment.comment}
        </li>
    });

  }
});
