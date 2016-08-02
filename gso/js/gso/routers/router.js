(function () {
  'use strict'

  // Router
  // ------
  // The router translates routes in to views.
  Gso.Routers.Router = Backbone.Router.extend({

    // **Note**: Could wrap this up in functions to allow easier
    // stubbing of the underlying methods. But, there are some
    // definite Backbone.js efficiencies from using simple string
    // method names instead (like name inference, etc).
    routes: {
      '': 'structures', // notes
      'structure/:id/:action': 'structure' // note
    },

    initialize: function (opts) {
      opts || (opts = {})
      this.structuresView = opts.structuresView || gso.structuresView
      this.structureNavView = opts.structureNavView || gso.structureNavView

      // Validation.
      if (!this.structuresView) { throw new Error('No structuresView') }
      if (!this.structureNavView) { throw new Error('No structureNavView') }

      // Stash current note view for re-rendering.
      this.structureView = null
    },

    // Show notes list.
    structures: function () { // notes
      this.structuresView.render()
    },

    // Common single note edit/view.
    structure: function (structureId, action) { // note
      // Check if we are already at currently active view.
      if (this.structureView) {
        if (this.structureView.model.id === structureId) { // noteId
          // Reuse existing note view if same note.
          return this.structureView.trigger('update:' + action)
        } else {
          // Else, remove the last stored view.
          this.structureView.remove()
        }
      }

      // Try to find note in existing collection.
      // var model = this.structuresView.collection.get(structureId); // noteId
      var model = this.structuresView.collection.get(structureId) // noteId
      if (!model) {
        // Go to home page on missing model.
        return this.navigate('', { trigger: true })
      }

      // Create note and add to DOM.
      this.structureView = new Gso.Views.Structure({ model: model }, {
        action: action,
        nav: this.structureNavView
      })
      $('#structure').html(this.structureView.render().$el) // #note
    }

  })
}())
