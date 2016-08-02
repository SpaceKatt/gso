/*global Gso, Backbone */
(function () {
  'use strict'
  // Structures Collection
  // ----------------
  // Uses HTML `localStorage`.
  Gso.Collections.Structures = Backbone.Collection.extend({
    model: Gso.Models.Structure,
    localStorage: new Backbone.LocalStorage(Gso.Config.storeName)
  })
}())
