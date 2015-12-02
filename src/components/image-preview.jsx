var React = require('react');

/* render a preview of image depending on it's type. I.E. static image, gif, video */
module.exports = React.createClass({

  getInitialState: function() {
    return {
      hovering: false
    }
  },
  render: function() {

    return <div className="image-preview"
              onMouseEnter={this.handleOnMouseEnter}
              onMouseLeave={this.handleOnMouseLeave}>
            {this.props.animated && this.state.hovering ? this.video() : this.image()}
          </div>
  },
  image: function() {
    var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';
    return <img src={link} />
  },
  video: function() {
    var link = "";
    return <div>
              <video preload="auto" autoPlay="autoPlay" loop="loop" webkit-playsinline>
                  <source src={this.props.mp4} type='video/mp4'></source>
              </video>
    </div>
  },
  handleOnMouseEnter: function(event) {
    console.log('om mouse enter');
    this.setState({hovering: true});
  },
  handleOnMouseLeave: function(event) {
    console.log('on mouse leave');
    this.setState({hovering: false});
  }


});
