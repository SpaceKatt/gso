(function () {
  'use strict';

  var ENTER = 13;

  // Structures View
  // ----------
  // Displays a list of structures.
  //
  // Contains:
  // * Gso.Views.StructuresFilter: Helper view for query filter.
  // * Gso.Views.StructuresItem: Child view for single note listing.
  //
  Gso.Views.Structures = Backbone.View.extend({

    el: "#structures",

    events: {
      "click    #structure-create": function () {
        this.createStructure();
      },
      "keypress #structure-new-input": function (ev) {
        this.enterStructure(ev);
      }
    },

    initialize: function () {
      // Cache view and just show on re-render.
      this.$input = this.$("#structure-new-input");

      // Add structures when we get data.
      //
      // **Note**: This has to come **before** the filter view
      // instantiation which relies on `addStructure` creating a DOM
      // element first in its events. Brittle, but simpler for this
      // demonstration.
      //
      this.listenTo(this.collection, {
        "reset":     function ()  { this.addStructures(); },
        "structures:add": function (m) { this.addStructure(m); }
      });

      // Create helper filter view.
      this.filterView = new Gso.Views.StructuresFilter({
        collection: this.collection
      });

      // Need the collection to be fetched to kick off adding structures.
      // This is currently done in "gso.js"
    },

    render: function () {
      // Show appropriate region.
      $(".region").not(".region-structures").hide();
      $(".region-structures").show();
      return this;
    },

    // Add single child note view to front of notes list.
    addStructure: function (model) {
      var view = new Gso.Views.StructuresItem({ model: model });

      this.$("#structures-list tr")
        .filter(":last")
        .after(view.render().$el);
    },

    // Clear and add all notes to notes list.
    addStructures: function () {
      // Clear existing child note items.
      this.$("#structures-list tr.structures-item").remove();

      // Add all notes from collection, sorted old to new.
      this.collection.chain()
        .sortBy(function (m) { return m.get("createdAt"); })
        .each(this.addStructure, this);
    },

    // Create note on enter key.
    enterStructure: function (ev) {
      if (ev.which === ENTER) {
        this.createStructure();
      }
    },

    createStructure: function () { 
      // Get value, then reset note input.
      var input = this.$input.val().trim();
      this.$input.val("");
      if (input) {
        this.create(input);
      }
    },

    create: function (title) {
      var coll = this.collection;

      // Add new model to collection, and corresponding structure
      // to DOM after model is saved.
      coll.create({ title: title }, {

        success: function (colData, modelData) {
          // Trigger event on model retrieved from collection.
          coll.trigger("structures:add", coll.get(modelData.id));
        }
      });
    }

  });
}());
