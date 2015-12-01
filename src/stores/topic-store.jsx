var Api = require('../utils/api');
var Reflux = require('reflux');

module.exports = Reflux.createStore({
  getTopics: function() {
    return Api.get('topics/defaults')
            .then(function(json) {
              console.log(json.data);
              this.topics = json.data;
              this.triggerChange();
            }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.topics);

  }
});
