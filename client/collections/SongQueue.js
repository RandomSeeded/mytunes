// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on("add", function() {
      if(this.models.length === 1)
        this.playFirst();
    });
    this.on("ended", function(song) {
      debugger;
      this.dequeue(song);
      if (this.models.length > 0 ) { this.playFirst(); }
    });
    this.on("dequeue", function(song) {
      this.dequeue(song);
    })
  },
  dequeue: function(song) {
    if (!song) { this.shift(); }
    this.remove(song);
  },
  playFirst: function() {
    this.models[0].play();
  }

});