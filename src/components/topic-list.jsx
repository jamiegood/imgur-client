var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var createFragment = require('react-addons-create-fragment');

module.exports = React.createClass({

  //whenever topicstore emits an event, then call onChange
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      topics: []
    }
  },
  onChange: function(event, topics) {
    console.log(topics);

    this.setState({topics: topics});
  },
  //componentWillMount runs first, but only once.
  //other components that use this, can't access this
  componentWillMount: function() {
    TopicStore.getTopics();
  },
  render: function(){
    return <div className="list-group">
      Topic list
      {this.renderTopics()}
    </div>
  },
  renderTopics: function() {
    var topics = this.state.topics.map(function(topic) {
      return <li>{createFragment(topic)}</li>
    });

    return <div>{topics}</div>
  }
});
