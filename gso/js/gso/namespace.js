
// Set up global application namespace using object literals.
//
// For more on JavaScript namespacing, see:
// * http://rmurphey.com/blog/2009/10/15/
//          using-objects-to-organize-your-code/
// * http://addyosmani.com/blog/essential-js-namespacing/
// * http://addyosmani.github.com/backbone-fundamentals/#namespacing

// Class names.
//
// Lazily creates:
//
//    Gso: {
//      Config: {},
//      Models: {},
//      Collections: {},
//      Routers: {},
//      Views: {},
//      Templates: {},
//      MathLib: {}
//    }
//
var Gso = Gso || {}
Gso.Config || (Gso.Config = {})
Gso.Models || (Gso.Models = {})
Gso.Collections || (Gso.Collections = {})
Gso.Routers || (Gso.Routers = {})
Gso.Views || (Gso.Views = {})
Gso.Templates || (Gso.Templates = {})
Gso.MathLib || (Gso.MathLib = {})

// Application instance.
var gso = gso || {}
