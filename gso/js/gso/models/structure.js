(function () {
  'use strict';

  // Structure Model
  // ----------
  Gso.Models.Structure = Backbone.Model.extend({

    defaults: function () {
      return {
        title: "",
        text: "*Edit your note!*",
        createdAt: new Date()
      };
    }

  });
}());
