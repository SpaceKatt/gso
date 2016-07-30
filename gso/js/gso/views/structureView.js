(function () {
  'use strict';

  // Structure View Pane
  // --------------
  // Render a single note pane for viewing.
  Gso.Views.StructureView = Backbone.View.extend({

    template: _.template(Gso.Templates["template-structure-view"]), 

    converter: new Showdown.converter(),

    initialize: function () {
      this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, "destroy", this.remove);
      this.render();
    },

    // Convert note data into Markdown.
    render: function () {
      this.$el.html(this.template({
        title: this.model.get("title"),
        text: this.converter.makeHtml(this.model.get("text"))
      }));
      return this;
    }
  });
}());
