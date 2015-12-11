var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  //if any of the actions here get called, and if you have a store method called same name, call it
  listenables: [Actions],

  getTopics: function() {
    return Api.get('topics/defaults')
            .then(function(json) {
              this.topics = json.data;
              this.triggerChange();
            }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.topics);
  }
});
