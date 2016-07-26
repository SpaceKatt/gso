(function () {
  'use strict';

  // Notes Collection
  // ----------------
  // Uses HTML `localStorage`.
  Gso.Collections.Structures = Backbone.Collection.extend({

    model: Gso.Models.Structure,

    localStorage: new Backbone.LocalStorage(Gso.Config.storeName)

  });
}());
