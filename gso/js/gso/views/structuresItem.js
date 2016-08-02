(function () {
  'use strict'

  // Structures Item View
  // ---------------
  // A single structure within a list of structures.
  Gso.Views.StructuresItem = Backbone.View.extend({

    // Set rendered DOM element `id` property to the model's id.
    id: function () { return this.model.id },

    tagName: 'tr',

    className: 'structures-item',

    template: _.template(Gso.Templates['template-structures-item']),

    events: {
      'click .structure-view':   function () { this.viewStructure() },
      'click .structure-edit':   function () { this.editStructure() },
      'click .structure-delete': function () { this.deleteStructure() }
    },

    initialize: function (attrs, opts) {
      // Get router from options or app. Also allow to be empty
      // so that tests can `render` without.
      opts || (opts = {})
      this.router = opts.router || gso.router

      this.listenTo(this.model, {
        'change':   function () { this.render() },
        'destroy':  function () { this.remove() }
      })
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()))
      return this
    },

    viewStructure: function () {
      var loc = ['structure', this.model.id, 'view'].join('/')
      this.router.navigate(loc, { trigger: true })
    },

    editStructure: function () {
      var loc = ['structure', this.model.id, 'edit'].join('/')
      this.router.navigate(loc, { trigger: true })
    },

    deleteStructure: function () {
      // Destroying model triggers view cleanup.
      this.model.destroy()
    }

  })
}())
