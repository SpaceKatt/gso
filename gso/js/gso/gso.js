/* global Gso, gso, $, Backbone */
// Wrap closure in jQuery "ready" function, to ensure that the DOM
// is fully available for the rest of our application.
$(function () {
  'use strict'

  // Initialize application components.
  // The collection object comes first as views depend on it.
  gso.collection = new Gso.Collections.Structures()

  // Views come next. Lazy dependency on router internally, meaning
  // that by the time we start using view methods, the `app.router`
  // object must exist. In practice, this isn't a big deal, because
  // the router is the ingress point that handles a request and
  // actually binds it to a view, allowing the view methods to be
  // called.
  gso.structuresView = new Gso.Views.Structures({
    collection: gso.collection
  })
  gso.structureNavView = new Gso.Views.StructureNav()

  // Router has dependencies on `app.*View` objects, so comes
  // after.
  gso.router = new Gso.Routers.Router()

  // Wait until we have our initial collection from the backing
  // store before firing up the router.
  gso.collection.once('reset', function () {
    Backbone.history.start()
  })

  // Now fetch collection data, kicking off everything.
  gso.collection.fetch({ reset: true })
})
