/*namespace*/
/*global App:true, app:true */
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
//    GSO: {
//      Config: {},
//      Models: {},
//      Collections: {},
//      Routers: {},
//      Views: {},
//      Templates: {},
//      MathLib: {}
//    }
//
var GSO = GSO   || {};
GSO.Config      || (GSO.Config = {});
GSO.Models      || (GSO.Models = {});
GSO.Collections || (GSO.Collections = {});
GSO.Routers     || (GSO.Routers = {});
GSO.Views       || (GSO.Views = {});
GSO.Templates   || (GSO.Templates = {});
GSO.MathLib     || (GSO.MathLib = {});

// Application instance.
var gso = gso || {};
