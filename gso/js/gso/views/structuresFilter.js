(function () {
  'use strict';

  // Structures Filter View
  // -----------------
  // Controls search filter and emits filter events.
  Gso.Views.StructuresFilter = Backbone.View.extend({

    el: ".navbar-search",

    events: {
      // Disable form submission.
      "submit": function () { return false; },

      // Call filter on any data change.
      "change   .search-query": "filterStructures", //filterNotes"
      "keypress .search-query": "filterStructures",
      "keyup    .search-query": "filterStructures"
    },

    initialize: function () {
      this._query = this.$(".search-query").val().trim();

      // Apply filter for any newly added notes.
      //
      // **Note**: This implicitly depends on the list element
      // existing in the DOM, which means the NotesView has to add
      // collection listeners **first**. A better approach would be
      // to have the Notes view emit its own "notes:add" event after
      // adding the DOM element.
      //
      this.listenTo(this.collection, "structures:add", function (model) { //notes:add
        // We wrap this call in a function (rather than passing
        // `this.filterNote` straight to the `listenTo`) so that
        // we actually can stub this method using Sinon.JS.
        this.filterStructure(model); //filterNote
      });
    },

    // Get/set query state.
    //
    // Only updates value on *defined* parameter, so `query()` is
    // a "get" and everything else is a set.
    //
    // The main purpose of exposing this as a top-level method is
    // to give good abstractions to hook and set in. There are, of
    // course other ways to design your classes to be testable,
    // but (modestly) exposing this internal state is quite useful
    // for our tests.
    //
    query: function (val) {
      if (!_.isUndefined(val)) { this._query = val; }
      return this._query;
    },

    // Return true if query token occurs in value.
    isMatch: function (query, value) {
      // Empty query matches everything.
      if (_.isEmpty(query)) { return true; }

      // Find lower-cased matches.
      value = value.toLowerCase();
      query = query.toLowerCase();

      return value.indexOf(query) > -1;
    },

    // Show or hide note based on filter value.
    //
    // Note that we could also take the "query" value as a parameter
    // avoiding having to infer it here. However, just taking a
    // model as the only parameter allows us to also use this method
    // as a collection callback, which will naturally give us the
    // model as a parameter.
    //
    filterStructure: function (model) { //filterNote:
      var $structure = $("#" + model.id), //$note
        match = this.isMatch(this.query(), model.get("title"));

      // Show matches, else hide.
      match ? $structure.show() : $structure.hide(); //note.show()  $note.hide()
    },

    // Apply filter to all notes in collection.
    filterStructures: function () { //filterNotes:
      var query = this.$(".search-query").val().trim();

      // If query changed, store and apply to collection.
      if (query !== this.query()) {
        this.query(query);
        this.collection.each(this.filterStructure, this); //filterNote
      }
    }

  });
}());
