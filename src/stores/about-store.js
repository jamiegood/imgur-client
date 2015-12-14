var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function() {
    console.log('about store INIT');
    this.savedImage = [];

  },
  doCounter: function() {
    console.log('counter form store');

  },
  triggerChange: function() {
    this.trigger('change', 'trigger change');
  },

  getImage: function() {
    console.log('get image');
  },

  getSaved: function() {
    console.log('getSaved');
    //this.savedImage = "saved iamge";
    //return
    console.log(this.savedImage);

    return this.savedImage;
  },
  saveImage: function() {
    console.log('about store save image');
    this.savedImage.push("this is where it's hapenning");
    console.log(this.savedImage);

    this.trigger('change', this.savedImage);
    console.log('after trigger in about store');
  }
});
