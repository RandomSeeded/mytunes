// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  },
  dequeue: function() {
    return this.shift();
  },
  add: function(song) {
    this.push(song);
    if(this.length===1) {
      this.playFirst();
    }
  },
  playFirst: function() {
    this.at(0).play();
  }

});