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
  find: function(id) {
    //goes through array of images and find one where id = id
    var image = _.findWhere(this.images, {id:id});

    console.log("FIND IAMGE FROM IMGSTORE: ", image);
    if(image) {
      return image;
    } else {

      console.log('FIND HERE: ');
      this.getImage(id);
      return null;
    }
  },
  getImage: function(id) {
    return Api.get('gallery/image/' + id)
            .then(function(json) {
              if(this.images) {
                this.images.push(json.data);
              } else {
                this.images = [json.data];
              }
              console.log("AM IN GETIMAGE");
              this.triggerChange();
            }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.images);
  }
});
