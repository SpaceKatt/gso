(function () {
  'use strict';

  // Structure View
  // ---------
  // A single structure.
  //
  // Contains:
  // * Gso.Views.StructureNav: Helper view for navigation events.
  // * Gso.Views.StructureView: Child view for rendering Markdown.
  //
  Gso.Views.Structure = Backbone.View.extend({

    id: "structure-panes", 

    template: _.template(Gso.Templates["template-structure"]),

    events: {
      "blur   #structure-form-edit": "saveStructure",
      "submit #structure-form-edit": function () { return false; }
    },

    initialize: function (attrs, opts) {
      // Default to empty options.
      opts || (opts = {});

      // Add member variables.
      //
      // Router can be set directly (e.g., tests), or use global.
      // The `gso.router` object *does* exist at this point.
      this.nav = opts.nav;
      this.router = opts.router || gso.router;

      // Verification.
      if (!this.router) { throw new Error("No router"); }

      // Add our custom listeners.
      this._addListeners();

      // Render HTML, update to action, and show structure.
      this.$el.html(this.template(this.model.toJSON()));
      this.update(opts.action || "view");
      this.render();

      // Add in viewer child view (which auto-renders).
      this.structureView = new Gso.Views.StructureView({
        el: this.$("#structure-pane-view-content"),
        model: this.model
      });
    },

    // Helper listener initialization method.
    _addListeners: function () {
      // Model controls view rendering and existence.
      this.listenTo(this.model, {
        "destroy": function () { this.remove(); },
        "change":  function () { this.render().model.save(); }
      });

      // Navbar controls/responds to panes.
      this.listenTo(this.nav, {
        "nav:view":   function () { this.viewStructure(); },
        "nav:edit":   function () { this.editStructure(); },
        "nav:delete": function () { this.deleteStructure(); }
      });

      // Respond to update events from router.
      this.on({
        "update:view": function () { this.render().viewStructure(); },
        "update:edit": function () { this.render().editStructure(); }
      });
    },

    // Rendering the note is simply showing the active pane.
    // All HTML should already be rendered during initialize.
    render: function () {
      $(".region").not(".region-structure").hide();
      $(".region-structure").show();
      return this;
    },

    remove: function () {
      // Remove child, then self.
      this.structureView.remove();
      Backbone.View.prototype.remove.call(this);
    },

    // Update internal "action" state (view or edit).
    update: function (action) {
      action = action || this.action || "view";
      var paneEl = "#structure-pane-" + action,
        loc = "structure/" + this.model.id + "/" + action;

      // Ensure menu bar is updated.
      this.nav.trigger("nav:update:" + action);

      // Show active pane.
      this.$(".pane").not(paneEl).hide();
      this.$(paneEl).show();

      // Store new action and navigate.
      if (this.action !== action) {
        this.action = action;
        this.router.navigate(loc, { replace: true });
      }
    },

    // Activate "view" or "edit" structure panes.
    viewStructure: function () {
      this.update("view");
    },
    editStructure: function () {
      this.update("edit");
    },

    // Delete model (causes view removal) and navigate to
    // "all structures" list page.
    deleteStructure: function () {
      if (confirm("Delete note?")) {
        this.model.destroy();
        this.router.navigate("", { trigger: true, replace: true });
      }
    },

    // Save structure (triggering model change).
    saveStructure: function () {
      this.model.set({
        title: this.$("#input-title").val().trim(),
        text: this.$("#input-text").val().trim()
      });
    }

  });
}());
