var React = require('react');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var createFragment = require('react-addons-create-fragment');
var Actions = require('../actions');
var TopicStore = require('../stores/topic-store');

module.exports = React.createClass({

  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {

    Actions.getTopics();
  },
  render: function() {
    return <nav className="navbar navbar-default header">

      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Imgur Brand
        </Link>

        <ul className="nav navbar-nav navbar-right">
          {this.renderTopics()}
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="about">About</Link></li>
        </ul>
      </div>
    </nav>
  },
  renderTopics: function() {
    return this.state.topics.slice(0, 4).map(function(topic) {
      return <li key={topic.id}>
          <Link activeClassName="active" to={"/topics/" + topic.id}>
            {topic.name}
          </Link>
        </li>
    });
    //return {topics}
  },
  onChange: function(event, topics) {
    console.log("Onchange: " + topics);
    this.setState({topics: topics})
  }
})
