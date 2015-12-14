var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var ImagePreview = require('../components/image-preview');

var Actions = require('../actions');
// var ReactRouter = require('react-router');
// var Link = ReactRouter.Link;



module.exports = React.createClass({

  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],

  getInitialState: function() {
    return {images: []}
  },

  componentWillMount: function() {
   console.log('componentWillMount');
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(nextProps) {
    console.log('componentWillReceiveProps');
    Actions.getImages(nextProps.params.id);
  },
  render: function() {
    return <div className="topic">
              {this.renderImages()}
          </div>
  },
  onChange: function(event, images) {
    this.setState({images: images});
  },
  renderImages: function() {
    return this.state.images.slice(0,20).map(function(image) {
      return <ImagePreview key={image.id} {...image} />
    });
  }


});
