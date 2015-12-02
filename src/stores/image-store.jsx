var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  //if any of the actions here get called, and if you have a store method called same name, call it
  listenables: [Actions],

  getImages: function(topicId) {
    return Api.get('topics/' + topicId)
            .then(function(json) {
              //if bool is true reject from this.images
              this.images = _.reject(json.data, function(image) {
                return image.is_album;
              });
              this.triggerChange();
              console.log("GETIMAGES");
            }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.images);
  }
});
