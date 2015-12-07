var React = require('react');
var Link = require('react-router').Link;

/* render a preview of image depending on it's type. I.E. static image, gif, video */
module.exports = React.createClass({

  getInitialState: function() {
    return {
      hovering: false
    }
  },
  render: function() {

    return <Link
              to={"/images/" + this.props.id}
              className="image-preview"
              onMouseEnter={this.handleOnMouseEnter}
              onMouseLeave={this.handleOnMouseLeave}>
            {this.props.animated && this.state.hovering ? this.video() : this.image()}
            {this.props.animated && !this.state.hovering ? this.icon() : null}
            {this.state.hovering ? this.inset() : null}
          </Link>
  },
  inset: function() {
    return <div className="inset">
              Views: {this.props.views}
              <br />
              Upvotes: {this.props.ups}

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
  icon: function() {
    return <span className="glyphicon glyphicon-play"></span>
  },
  handleOnMouseEnter: function(event) {
    this.setState({hovering: true});
  },
  handleOnMouseLeave: function(event) {
    this.setState({hovering: false});
  }


});
