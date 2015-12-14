var React = require('react');
var Reflux = require('reflux');
// var ImageStore = require('../stores/image-store');
var AboutStore = require('../stores/about-store');
//var Actions = require('../actions');

var ReactRouter = require('react-router').Link;

var Link = ReactRouter.Link;
//


module.exports = React.createClass({

  mixins: [
    Reflux.listenTo(AboutStore, 'onChange')
  ],

  getInitialState: function() {
    return {images: []}
  },
  componentWillMount: function() {
   console.log('ABOUT:: componentWillMount');
    //Actions.getSaved();
    console.log("ABOUT: Actions.getSaved() :", AboutStore.getSaved());

    this.setState({images: AboutStore.getSaved()});
    console.log("After set state: ",  AboutStore.getSaved(), this.state.images);
  },
  render: function() {

    console.log('ABOUT RENDER:: ', this.state.images);

    return <div className="topic">
              this is about page here, sam was here

              <div onClick={this.handleOnClick}>CLick me</div>

            This is image:
            {this.state.images}
          </div>
  },

  handleOnClick: function(event) {
    Actions.doCounter();
    console.log(event);
  },
  onChange: function(event, info) {
    console.log(event);
    console.log(info);
    console.log('about cmp save image');
    this.setState({images: info});
  }
});
