var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var CommentStore = require('../stores/comment-store');

var Actions = require('../actions');
var createFragment = require('react-addons-create-fragment')
var CommentBox = require('./comment-box');
//var About = require('./about');

module.exports = React.createClass({

  mixins: [
    Reflux.listenTo(ImageStore, 'onChange'),
    Reflux.listenTo(CommentStore, 'onChange'),
  ],

  getInitialState: function() {
    return {
      image: null,
      comments: null
    }
  },
  componentWillMount: function() {

    //calls getimage in comment store and image store
    Actions.getImage(this.props.params.id);
  },
  render: function() {
    return <div className="image-detail">{this.state.image ? this.renderContent() : null}</div>
  },
  onChange: function() {
    //console.log(event, image);
    this.setState({
      image: ImageStore.find(this.props.params.id),
      comments: CommentStore.comment

    });
  },
  renderContent: function() {
    return <div className="image-detail">
              <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4>{this.state.image.title}</h4>
                  </div>
                  <div className="panel-body">
                    {this.renderImage()}
                  </div>
                  <div className="panel-footer">
                    {this.state.image.description}
                    <button className="default" onClick={this.handleSave}>Save</button>
                  </div>

              </div>
              <h3>Comments</h3>

              {this.renderComments()}
             </div>
  },

  handleSave: function() {
    console.log('clicked save');
    Actions.saveImage();

  },
  renderImage: function() {
     if(this.state.image.animated) {
       return <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
         <source src={this.state.image.mp4} type="video/mp4"></source>
       </video>
     } else {
       return <img src={this.state.image.link} />
     }
  },
  renderComments: function() {
    if(!this.state.comments) {
      return null;
    }

    return <CommentBox comments={this.state.comments} />
  }


});
