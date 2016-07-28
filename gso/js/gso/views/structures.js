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

    el: "#structures", //notes

    events: {
      "click    #structure-create": function () { //note-create
        this.createStructure(); //createNote()
      },
      "keypress #structure-new-input": function (ev) { //note-new-input
        this.enterStructure(ev); //enterNote
      }
    },

    initialize: function () {
      // Cache view and just show on re-render.
      this.$input = this.$("#structure-new-input"); //#note-new-input

      // Add notes when we get data.
      //
      // **Note**: This has to come **before** the filter view
      // instantiation which relies on `addNote` creating a DOM
      // element first in its events. Brittle, but simpler for this
      // demonstration.
      //
      this.listenTo(this.collection, {
        "reset":     function ()  { this.addStructures(); }, //addNotes()
        "structure:add": function (m) { this.addStructure(m); } //addNote(m) note:add
      });

      // Create helper filter view.
      this.filterView = new Gso.Views.StructuresFilter({
        collection: this.collection
      });

      // Need the collection to be fetched to kick off adding notes.
      // This is currently done in "app.js"
    },

    render: function () {
      // Show appropriate region.
      $(".region").not(".region-structures").hide(); //.region-notes
      $(".region-structures").show();
      return this;
    },

    // Add single child note view to front of notes list.
    addStructure: function (model) { //addNote:
      var view = new Gso.Views.StructuresItem({ model: model });

      this.$("#structures-list tr") //#notes-list tr
        .filter(":last")
        .after(view.render().$el);
    },

    // Clear and add all notes to notes list.
    addStructures: function () { //addNotes:
      // Clear existing child note items.
      this.$("#structures-list tr.structures-item").remove(); //#notes-list tr.notes-item

      // Add all notes from collection, sorted old to new.
      this.collection.chain()
        .sortBy(function (m) { return m.get("createdAt"); })
        .each(this.addStructure, this); //this.addNote
    },

    // Create note on enter key.
    enterStructure: function (ev) { //enterNote:
      if (ev.which === ENTER) {
        this.createStructure(); //createNote();
      }
    },

    createStructure: function () { // createNote:
      // Get value, then reset note input.
      var input = this.$input.val().trim();
      this.$input.val("");

      if (input) {
        this.create(input);
      }
    },

    create: function (title) {
      var coll = this.collection;

      // Add new model to collection, and corresponding note
      // to DOM after model is saved.
      coll.create({ title: title }, {
        success: function (colData, modelData) {
          // Trigger event on model retrieved from collection.
          coll.trigger("structures:add", coll.get(modelData.id)); //notes:add"
        }
      });
    }

  });
}());
