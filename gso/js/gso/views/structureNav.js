/*global Gso, Backbone */
(function () {
  'use strict'

  // Structure Navigation Bar View
  // ------------------------
  // Controls structure nav bar and emits navigation events.
  //
  // Listens to: events that trigger menu DOM updates.
  // * `nav:update:view`
  // * `nav:update:edit`
  //
  // Emits: events on menu clicks.
  // * `nav:view`
  // * `nav:edit`
  // * `nav:delete`
  Gso.Views.StructureNav = Backbone.View.extend({

    el: '#structure-nav',

    events: {
      'click .structure-view': 'clickView',
      'click .structure-edit': 'clickEdit',
      'click .structure-delete': 'clickDelete'
    },

    initialize: function () {
      // Defaults for nav.
      this.$('li').removeClass('active')

      // Update the navbar UI for view/edit (not delete).
      this.on({
        'nav:update:view': this.updateView,
        'nav:update:edit': this.updateEdit
      })
    },

    // Handlers for updating nav bar UI.
    updateView: function () {
      this.$('li').not('.structure-view').removeClass('active')
      this.$('.structure-view').addClass('active')
    },
    updateEdit: function () {
      this.$('li').not('.structure-edit').removeClass('active')
      this.$('.structure-edit').addClass('active')
    },

    // Handlers for emitting nav events.
    clickView: function () {
      this.trigger('nav:update:view nav:view')
      return false
    },
    clickEdit: function () {
      this.trigger('nav:update:edit nav:edit')
      return false
    },
    clickDelete: function () {
      this.trigger('nav:update:delete nav:delete')
      return false
    }

  })
}())
