/*jslint maxlen: 200 */
// Underscore Templates

Gso.Templates["template-structures-item"] = //template-notes-item
  "<td class=\"structure-name\">" + //note-name
  "  <div class=\"structure-title structure-view\"><%= title %></div>" + //note-title note-view\
  "</td>" +
  "<td class=\"structure-action\">" + //note-action
  "  <div class=\"btn-group btn-group-default pull-right\">" +
  "    <button class=\"btn btn-default structure-edit\">" + //note-edit
  "      <span class=\"glyphicon glyphicon-pencil\"></span>" +
  "    </button>" +
  "    <button class=\"btn btn-default structure-delete\">" + //note-delete
  "      <span class=\"glyphicon glyphicon-trash\"></span>" +
  "    </button>" +
  "  </div>" +
  "</td>";

Gso.Templates["template-structure"] = //template-note
  "<div id=\"structure-pane-view\" class=\"pane\">" + //note-pane-view
  "  <div id=\"structure-pane-view-content\"></div>" + //note-pane-view-content
  "</div>" +
  "<div id=\"structure-pane-edit\" class=\"pane\">" + //note-pane-edit
  "  <form id=\"structure-form-edit\" role=\"form\">" + //note-form-edit
  "    <div class=\"form-group\">" +
  "      <input id=\"input-title\" class=\"form-control\"" +
  "             type=\"text\" placeholder=\"title\"" +
  "             value=\"<%= title %>\">" +
  "    </div>" +
  "    <div class=\"form-group\">" +
  "      <textarea id=\"input-text\" class=\"form-control\"" +
  "                rows=\"15\"><%= text %></textarea>" +
  "    </div>" +
  "  </form>" +
  "</div>";

Gso.Templates["template-structure-view"] = //template-note-view
  "<div class=\"well well-small\">" +
  "  <h2 id=\"pane-title\"><%= title %></h2>" +
  "</div>" +
  "<div id=\"pane-text\"><%= text %></div>";
