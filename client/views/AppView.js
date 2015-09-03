// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    //instantiate soneQueueView here (be sure to pass in the song queue collection stored in the AppModel)

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.playerView.on('ended', function() {
      debugger;
      this.model.get('songQueue').dequeue();
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el
    ]);
  }

});
