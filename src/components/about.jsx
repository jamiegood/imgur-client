var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var ImagePreview = require('../components/image-preview');

var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;



module.exports = React.createClass({

  render: function() {
    return <div className="topic">
              this is about
          </div>
  }
});
