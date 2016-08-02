/*global Gso, Showdown, _, $,  Backbone */
(function () {
  'use strict'

  // Structure View Pane
  // --------------
  // Render a single note pane for viewing.
  Gso.Views.StructureView = Backbone.View.extend({

    template: _.template(Gso.Templates['template-structure-view']),

    converter: new Showdown.converter(),

    initialize: function () {
      this.listenTo(this.model, 'change', this.render)
      this.listenTo(this.model, 'destroy', this.remove)
      this.render()
    },

    // Convert note data into Markdown.
    render: function () {
      // add canvas
      var canvas1 = $('#canvas_1')[0]
      // var ctx1 = canvas1.getContext('2d')
      $('#canvas_1').css('background-color', 'rgba(458, 167, 184, 0.8)')

      var ctx = canvas1.getContext('2d')
      ctx.fillStyle = 'green'
      ctx.fillRect(10, 10, 100, 100)

      // end addition

      this.$el.html(this.template({
        title: this.model.get('title'),
        text: this.converter.makeHtml(this.model.get('text'))
      }))
      return this
    }
  })
}())
