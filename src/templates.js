(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/create-issue.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<form method=\"post\"  id=\"new_issue\" class=\"js-new-issue-form\" onsubmit=\"return gira.createIssue()()\" accept-charset=\"UTF-8\" data-issue-id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "number"), env.autoesc);
output += "\"><div style=\"margin:0;padding:0;display:inline\"></div>\n  <div class=\"columns discussion-timeline-cols\">\n    <div class=\"column main\">\n\t\t\t<div class=\"discussion-bubble composer\">\n\t\t\t\t<a href=\"https://github.com/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"login", env.autoesc), env.autoesc);
output += "\"><img width=\"48\" height=\"48\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"avatar_url", env.autoesc), env.autoesc);
output += "\" class=\"discussion-bubble-avatar\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"full_name", env.autoesc), env.autoesc);
output += "\"></a>\n\n\t\t\t\t<div class=\"discussion-bubble-content bubble\">\n\t\t\t\t\t<div class=\"discussion-bubble-inner\">\n\n\t\t\t\t\t\t<div class=\"discussion-topic\">\n\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t<div class=\"discussion-topic-header\">\n\t\t\t\t\t\t\t\t<dl class=\"form\">\n\t\t\t\t\t\t\t\t\t<div class=\"fieldWithErrors\"><label for=\"issue_title\" class=\"discussion-title-label\">Title</label></div>\n\t\t\t\t\t\t\t\t\t<dd><div class=\"fieldWithErrors\"><input type=\"text\" tabindex=\"1\" size=\"30\" required=\"required\" placeholder=\"Title\" name=\"issue[title]\" id=\"issue_title\" class=\"required title js-auto-save\" autofocus=\"autofocus\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.autoesc);
output += "\"></div></dd>\n\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t</div> <!-- /.topic-comment-header -->\n\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"composer-infobar js-infobar\">\n\n\t\t\t\t\t\t\t\t<div class=\"assignee infobar-widget\">\n\t\t\t\t\t\t\t\t\t<span class=\"css-truncate text js-assignee-infobar-item-wrapper\">\n\t\t\t\t\t\t\t\t\t\t";
if(runtime.contextOrFrameLookup(context, frame, "assignee")) {
output += "\n\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "assignee")),"login", env.autoesc), env.autoesc);
output += " \n\t\t\t\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t\t\tNo one\n\t\t\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t\t\tis assigned\n\t\t\t\t\t\t\t\t\t</span>\n\n\n\t\t\t\t\t\t\t\t\t<div class=\"select-menu js-menu-container js-select-menu js-composer-assignee-picker \">\n\t\t\t\t\t\t\t\t\t\t<span aria-label=\"Assign someone to this issue\" role=\"button\" class=\"minibutton select-menu-button icon-only js-menu-target\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"octicon octicon-gear\"></span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-modal-holder js-menu-content js-navigation-container\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-modal\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"select-menu-title\">Assign someone to this issue</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"octicon octicon-remove-close js-menu-close\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> <!-- /.select-menu-header -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-error-shell\"><span class=\"select-menu-error js-select-menu-error\">Sorry, an error occurred</span></div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-filters\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-text-filter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" aria-label=\"Type or choose a name\" placeholder=\"Filter people\" class=\"js-filterable-field js-navigation-enable\" id=\"assignee-filter-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> <!-- /.select-menu-filters -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-list\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div aria-label=\"Clear assignee\" role=\"button\" class=\"select-menu-clear-item select-menu-item js-navigation-item js-clear-assignee js-no-current-assignee\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"\" name=\"issue[assignee]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"select-menu-item-icon octicon octicon-remove-close\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item-text\">Clear assignee</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> <!-- /.select-menu-item -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div role=\"menu\" data-filterable-type=\"fuzzy\" data-filterable-for=\"assignee-filter-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div role=\"menuitem\" class=\"select-menu-item js-navigation-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "assignee")),"login", env.autoesc), env.autoesc);
output += "\" name=\"issue[assignee]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"select-menu-item-icon octicon octicon-check\"></span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item-gravatar js-select-menu-item-gravatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"avatar\"><img width=\"20\" height=\"20\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "assignee")),"avatar_url", env.autoesc), env.autoesc);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "assignee")),"login", env.autoesc), env.autoesc);
output += "\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "assignee")),"login", env.autoesc), env.autoesc);
output += " <span class=\"description\"></span></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-no-results\">Nothing to show</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div> <!-- /.select-menu-list -->\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t</div> <!-- /.select-menu-modal -->\n\t\t\t\t\t\t\t\t\t\t</div> <!-- /.select-menu-modal-holder -->\n\t\t\t\t\t\t\t\t\t</div> <!-- /.select-menu -->\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"milestone infobar-widget\">\n\t\t\t\t\t\t\t\t\t<span class=\"css-truncate text js-composer-milestone-title\">\n\t\t\t\t\t\t\t\t\t\tNo milestone\n\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t<div class=\"select-menu js-menu-container js-select-menu js-composer-milestone-picker\">\n\t\t\t\t\t\t\t\t\t\t<span aria-label=\"Set milestone\" role=\"button\" class=\"minibutton select-menu-button icon-only js-menu-target\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"octicon octicon-gear\"></span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-modal-holder js-menu-content js-navigation-container\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-modal\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"select-menu-title\">Set milestone</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"octicon octicon-remove-close js-menu-close\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> <!-- /.select-menu-header -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-error-shell\"><span class=\"select-menu-error js-select-menu-error\">Sorry, an error occurred</span></div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-filters\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-text-filter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" autocomplete=\"off\" placeholder=\"Filter milestones\" class=\"js-filterable-field js-navigation-enable\" id=\"context-milestone-filter-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-tabs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"select-menu-tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"js-select-menu-tab\" data-tab-filter=\"tab-open\" href=\"#\">Open</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"select-menu-tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"js-select-menu-tab\" data-tab-filter=\"tab-closed\" href=\"#\">Closed</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div><!-- /.select-menu-tabs -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div><!-- /.select-menu-filters -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div data-tab-filter=\"tab-open\" class=\"select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-clear-item select-menu-item js-navigation-item js-clear-milestone\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"clear\" name=\"milestone\" id=\"milestone_clear\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"select-menu-item-icon octicon octicon-remove-close\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item-text\">Clear this milestone</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> <!-- /.select-menu-item -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div role=\"menu\" data-filterable-type=\"substring\" data-filterable-for=\"context-milestone-filter-field\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div role=\"menuitem\" class=\"select-menu-item js-navigation-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "milestone")),"number", env.autoesc), env.autoesc);
output += "\" name=\"milestone\" id=\"milestone_";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "milestone")),"number", env.autoesc), env.autoesc);
output += "\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"select-menu-item-icon octicon octicon-check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"js-milestone-title js-select-button-text\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "milestone")),"title", env.autoesc), env.autoesc);
output += "</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "milestone")),"duo_on", env.autoesc)) {
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"description\">Due in ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "milestone")),"due_on", env.autoesc), env.autoesc);
output += " days</span>";
;
}
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> <!-- /.select-menu-item -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"new\" name=\"milestone\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"milestone_title\" class=\"js-new-item-value\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"octicon octicon-milestone select-menu-item-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Create and assign to new milestone:</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"description js-new-item-name js-milestone-title\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div> <!-- /.select-menu-list -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div data-tab-filter=\"tab-closed\" class=\"select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div role=\"menu\" data-filterable-type=\"substring\" data-filterable-for=\"context-milestone-filter-field\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-no-results\">Nothing to show</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> <!-- /.select-menu-list -->\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fieldWithErrors\"><input type=\"hidden\" name=\"issue[milestone_id]\" id=\"issue_milestone_id\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"new_milestone_title\" id=\"new_milestone_title\">\n\t\t\t\t\t\t\t\t\t\t\t</div> <!-- /.select-menu-modal -->\n\t\t\t\t\t\t\t\t\t\t</div> <!-- /.select-menu-modal-holder -->\n\t\t\t\t\t\t\t\t\t</div> <!-- /.select-menu -->\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t<div class=\"comment-content\">\n\n\t\t\t\t\t\t\t\t<dl class=\"form body\">\n\t\t\t\t\t\t\t\t\t<dd>\n\n\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t<div data-preview-url=\"https://api.github.com/markdown?mode=gfm\" class=\"js-previewable-comment-form previewable-comment-form write-selected\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"comment-form-head tabnav\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"tabnav-tabs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"tabnav-tab write-tab js-write-tab selected\" href=\"#write_bucket_\">Write</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"tabnav-tab preview-tab js-preview-tab\" href=\"#preview_bucket_\">Preview</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabnav-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabnav-widget text\">Comments are parsed with <a target=\"_blank\" class=\"gfm-help\" href=\"https://help.github.com/articles/github-flavored-markdown\">GitHub Flavored Markdown</a></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"display:none\" class=\"comment-form-error js-comment-form-error\">    There was an error creating your Issue: \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div data-model=\"assets\" class=\"write-content js-write-bucket js-uploadable-container upload-enabled is-default\" id=\"write_bucket_\">\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"enable-fullscreen js-enable-fullscreen tooltipped\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tleftwards \" href=\"#fullscreen_issue_body\" original-title=\"Zen Mode\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"octicon octicon-screen-full\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea data-suggester=\"_new_preview_suggester\" class=\"comment-form-textarea js-comment-field js-size-to-fit js-quote-selection-target  input-with-fullscreen-icon\" placeholder=\"Leave a comment\" id=\"issue_body\" tabindex=\"1\" name=\"issue[body]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "body"), env.autoesc);
output += "</textarea>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"drag-and-drop\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tAttach images by dragging &amp; dropping or\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"manual-file-chooser js-manual-file-chooser\" multiple=\"multiple\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"manual-file-chooser-text\">selecting them</a>.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"loading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"16\" height=\"16\" src=\"https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif\" alt=\"Octocat-spinner-32\"> Uploading your images…\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error bad-file\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUnfortunately we don't support that file type yet. Please use PNG, GIF, or JPG.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error too-big\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tYowza, that's a big file. Please submit an image file smaller than 5MB.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error bad-browser\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis browser doesn't support image attachments.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error failed-request\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tSomething went really wrong and we can't process that image.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"preview-content js-preview-bucket\" id=\"preview_bucket_\">\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div data-body-version=\"\" class=\"comment js-comment js-task-list-container\" id=\"openstruct-70192145241500\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"comment-content\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"edit-comment-hide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"comment-body markdown-body  js-comment-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Nothing to preview</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"suggester-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div data-url=\"/jcouyang/gira/suggestions/issue\" id=\"_new_preview_suggester\" class=\"suggester js-navigation-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t</dl>\n\n\t\t\t\t\t\t\t</div> <!-- /.comment-content -->\n\t\t\t\t\t\t</div> <!-- /.comment -->\n\n\n\t\t\t\t\t</div> <!-- /.discussion-bubble-content -->\n\t\t\t\t</div> <!-- /.discussion-bubble-inner -->\n\n\t\t\t\t<div class=\"form-actions\">\n\n\t\t\t\t\t<button data-disable-with=\"\" data-disable-invalid=\"\" tabindex=\"1\" class=\"button primary\" type=\"submit\">\n\t\t\t\t\t\tSubmit new issue\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t</div> <!-- /.discussion-bubble -->\n\n    </div>\n    <div class=\"column sidebar\">\n      \n\t\t\t<h3>Add Labels</h3>\n\t\t\t<ul class=\"js-composer-labels color-label-list filter-list small\">\n\t\t\t\t\n\t\t\t\t<li data-name=\"0+Backlog\">\n\t\t\t\t\t<a class=\"filter-item color-label labelstyle-CCCCCC\" href=\"#\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"issue[labels][]\" id=\"issue_labels_0+Backlog\" value=\"0+Backlog\" style=\"display: none\">\n\t\t\t\t\t\t<span style=\"background-color: #CCCCCC\" class=\"color\">&nbsp;</span>\n\t\t\t\t\t\t<span class=\"name\">0+Backlog</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li data-name=\"0-Backlog\">\n\t\t\t\t\t<a class=\"filter-item color-label labelstyle-ededed\" href=\"#\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"issue[labels][]\" id=\"issue_labels_0-Backlog\" value=\"0-Backlog\" style=\"display: none\">\n\t\t\t\t\t\t<span style=\"background-color: #ededed\" class=\"color\">&nbsp;</span>\n\t\t\t\t\t\t<span class=\"name\">0-Backlog</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li data-name=\"1-Ready\">\n\t\t\t\t\t<a class=\"filter-item color-label labelstyle-CCCCCC\" href=\"#\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"issue[labels][]\" id=\"issue_labels_1-Ready\" value=\"1-Ready\" style=\"display: none\">\n\t\t\t\t\t\t<span style=\"background-color: #CCCCCC\" class=\"color\">&nbsp;</span>\n\t\t\t\t\t\t<span class=\"name\">1-Ready</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li data-name=\"2-Working\">\n\t\t\t\t\t<a class=\"filter-item color-label labelstyle-CCCCCC\" href=\"#\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"issue[labels][]\" id=\"issue_labels_2-Working\" value=\"2-Working\" style=\"display: none\">\n\t\t\t\t\t\t<span style=\"background-color: #CCCCCC\" class=\"color\">&nbsp;</span>\n\t\t\t\t\t\t<span class=\"name\">2-Working</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li data-name=\"3-done\">\n\t\t\t\t\t<a class=\"filter-item color-label labelstyle-CCCCCC\" href=\"#\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"issue[labels][]\" id=\"issue_labels_3-done\" value=\"3-done\" style=\"display: none\">\n\t\t\t\t\t\t<span style=\"background-color: #CCCCCC\" class=\"color\">&nbsp;</span>\n\t\t\t\t\t\t<span class=\"name\">3-done</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li data-name=\"bug\">\n\t\t\t\t\t<a class=\"filter-item color-label labelstyle-fc2929\" href=\"#\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"issue[labels][]\" id=\"issue_labels_bug\" value=\"bug\" style=\"display: none\">\n\t\t\t\t\t\t<span style=\"background-color: #fc2929\" class=\"color\">&nbsp;</span>\n\t\t\t\t\t\t<span class=\"name\">bug</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li data-name=\"duplicate\">\n\t\t\t\t\t<a class=\"filter-item color-label labelstyle-cccccc\" href=\"#\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"issue[labels][]\" id=\"issue_labels_duplicate\" value=\"duplicate\" style=\"display: none\">\n\t\t\t\t\t\t<span style=\"background-color: #cccccc\" class=\"color\">&nbsp;</span>\n\t\t\t\t\t\t<span class=\"name\">duplicate</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li data-name=\"enhancement\">\n\t\t\t\t\t<a class=\"filter-item color-label labelstyle-84b6eb\" href=\"#\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"issue[labels][]\" id=\"issue_labels_enhancement\" value=\"enhancement\" style=\"display: none\">\n\t\t\t\t\t\t<span style=\"background-color: #84b6eb\" class=\"color\">&nbsp;</span>\n\t\t\t\t\t\t<span class=\"name\">enhancement</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li data-name=\"invalid\">\n\t\t\t\t\t<a class=\"filter-item color-label labelstyle-e6e6e6\" href=\"#\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"issue[labels][]\" id=\"issue_labels_invalid\" value=\"invalid\" style=\"display: none\">\n\t\t\t\t\t\t<span style=\"background-color: #e6e6e6\" class=\"color\">&nbsp;</span>\n\t\t\t\t\t\t<span class=\"name\">invalid</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li data-name=\"question\">\n\t\t\t\t\t<a class=\"filter-item color-label labelstyle-cc317c\" href=\"#\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"issue[labels][]\" id=\"issue_labels_question\" value=\"question\" style=\"display: none\">\n\t\t\t\t\t\t<span style=\"background-color: #cc317c\" class=\"color\">&nbsp;</span>\n\t\t\t\t\t\t<span class=\"name\">question</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li data-name=\"wontfix\">\n\t\t\t\t\t<a class=\"filter-item color-label labelstyle-ffffff\" href=\"#\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"issue[labels][]\" id=\"issue_labels_wontfix\" value=\"wontfix\" style=\"display: none\">\n\t\t\t\t\t\t<span style=\"background-color: #ffffff\" class=\"color\">&nbsp;</span>\n\t\t\t\t\t\t<span class=\"name\">wontfix</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\n\t\t\t</ul>\n\n    </div>\n  </div>\n</form>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/create-label.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"edit-color-label-form new-label-form js-new-label-form js-label-editor open\">\n        <h4 class=\"new-label-form-title\">New label</h4>\n\n        <form method=\"post\" id=\"new_label_form\" accept-charset=\"UTF-8\" onsubmit=\"return gira.createLabel()()\"><div style=\"margin:0;padding:0;display:inline\">\n\t\t\t\t\t</div>\n\n          <input type=\"text\" data-hotkey=\"l\" placeholder=\"New label name\" class=\"name-input js-name-input\" name=\"label\">\n\n          \n<ul class=\"color-chooser js-color-chooser\">\n    <li>\n      <span data-hex-color=\"e11d21\" style=\"background-color: #e11d21 !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-e11d21\">\n      </span>\n    </li>\n    <li>\n      <span data-hex-color=\"eb6420\" style=\"background-color: #eb6420 !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-eb6420\">\n      </span>\n    </li>\n    <li>\n      <span data-hex-color=\"fbca04\" style=\"background-color: #fbca04 !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-fbca04\">\n      </span>\n    </li>\n    <li>\n      <span data-hex-color=\"009800\" style=\"background-color: #009800 !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-009800\">\n      </span>\n    </li>\n    <li>\n      <span data-hex-color=\"006b75\" style=\"background-color: #006b75 !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-006b75\">\n      </span>\n    </li>\n    <li>\n      <span data-hex-color=\"207de5\" style=\"background-color: #207de5 !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-207de5\">\n      </span>\n    </li>\n    <li>\n      <span data-hex-color=\"0052cc\" style=\"background-color: #0052cc !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-0052cc\">\n      </span>\n    </li>\n    <li>\n      <span data-hex-color=\"5319e7\" style=\"background-color: #5319e7 !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-5319e7\">\n      </span>\n    </li>\n</ul>\n\n          \n<ul class=\"color-chooser js-color-chooser\">\n    <li>\n      <span data-hex-color=\"f7c6c7\" style=\"background-color: #f7c6c7 !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-f7c6c7\">\n      </span>\n    </li>\n    <li>\n      <span data-hex-color=\"fad8c7\" style=\"background-color: #fad8c7 !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-fad8c7 selected\" data-last=\"true\">\n      </span>\n    </li>\n    <li>\n      <span data-hex-color=\"fef2c0\" style=\"background-color: #fef2c0 !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-fef2c0\">\n      </span>\n    </li>\n    <li>\n      <span data-hex-color=\"bfe5bf\" style=\"background-color: #bfe5bf !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-bfe5bf\">\n      </span>\n    </li>\n    <li>\n      <span data-hex-color=\"bfdadc\" style=\"background-color: #bfdadc !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-bfdadc\">\n      </span>\n    </li>\n    <li>\n      <span data-hex-color=\"c7def8\" style=\"background-color: #c7def8 !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-c7def8\">\n      </span>\n    </li>\n    <li>\n      <span data-hex-color=\"bfd4f2\" style=\"background-color: #bfd4f2 !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-bfd4f2\">\n      </span>\n    </li>\n    <li>\n      <span data-hex-color=\"d4c5f9\" style=\"background-color: #d4c5f9 !important;\" class=\"color-cooser-color js-color-cooser-color labelstyle-d4c5f9\">\n      </span>\n    </li>\n</ul>\n\n\n          <div class=\"color-editor js-color-editor\">\n            <div class=\"color-editor-bg js-color-editor-bg\" style=\"background-color: rgb(250, 216, 199);\"></div>\n\n            <input type=\"text\" name=\"color\" placeholder=\"#FF0000\" maxlength=\"7\" class=\"color-editor-input js-color-editor-input hexfield\" style=\"color: rgb(125, 108, 100); border-color: rgb(250, 216, 199);\">\n\n            <button class=\"js-label-editor-submit minibutton\" type=\"submit\">Create</button>\n            <span class=\"invalid-color-indicator\">?</span>\n          </div>\n</form>\n      </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/gira.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"contrib-details grid lala\">\n\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "issuesWithLabel");
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("issues", t_4);
output += "\n  <div class=\"col\" id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),0, env.autoesc), env.autoesc);
output += "\">\n    <span class=\"num\">";
output += runtime.suppressValue(env.getFilter("title").call(context, env.getFilter("removeIndex").call(context, runtime.memberLookup((t_4),0, env.autoesc))), env.autoesc);
output += "</span>\n\t\t<span class=\"lbl\">\n\t\t\t";
frame = frame.push();
var t_7 = runtime.memberLookup((t_4),1, env.autoesc);
if(t_7) {for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("issue", t_8);
output += "\n\t\t\t<div class=\"blankslate\" draggable=\"true\"  id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"number", env.autoesc), env.autoesc);
output += "\" data-label=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),0, env.autoesc), env.autoesc);
output += "\">\n\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"html_url", env.autoesc), env.autoesc);
output += "\" target=\"_blank\" class=\"octicon octicon-link-external right\"></a>\n\t\t\t<a href=\"#create-new-issue\" rel=\"facebox\" class=\"popable\" data-issue-id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"number", env.autoesc), env.autoesc);
output += "\">\t\n\t\t\t\t<h4 class=\"list-group-item-name\">#";
output += runtime.suppressValue(runtime.memberLookup((t_8),"number", env.autoesc), env.autoesc);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"title", env.autoesc), env.autoesc);
output += "</h4>\n\t\t\t</a>\n\t\t<!-- \t\t";
if(runtime.memberLookup((t_4),0, env.autoesc) == runtime.contextOrFrameLookup(context, frame, "last_label")) {
output += " -->\n\t\t<!-- <a type=\"button\" class=\"close close-issue left\">           <span class=\"octicon octicon-remove-close\"></span>         </a> -->\n\t\t<!-- \t";
;
}
output += " -->\n\t\t\t\t\t<span class=\"labels\">\n\t\t\t\t\t\t";
frame = frame.push();
var t_11 = runtime.memberLookup((t_8),"labels", env.autoesc);
if(t_11) {for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("label", t_12);
output += "\n\t\t\t\t\t\t<span class=\"label labelstyle-";
output += runtime.suppressValue(runtime.memberLookup((t_12),"color", env.autoesc), env.autoesc);
output += "\" style=\"background-color:#";
output += runtime.suppressValue(runtime.memberLookup((t_12),"color", env.autoesc), env.autoesc);
output += "\"\n\t\t\t\t\t\t\t\t\tdata-name=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name", env.autoesc), env.autoesc);
output += "\">";
output += runtime.suppressValue(env.getFilter("removeIndex").call(context, runtime.memberLookup((t_12),"name", env.autoesc)), env.autoesc);
output += "</span>\n\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t</span>\n\t\t\t\t\t";
if(runtime.memberLookup((t_8),"assignee", env.autoesc)) {
output += "\n\t\t\t\t\t<span class=\"assignee tooltipped downwards yours right\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"assignee", env.autoesc)),"url", env.autoesc), env.autoesc);
output += "\" original-title=\"Assigned to ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"assignee", env.autoesc)),"login", env.autoesc), env.autoesc);
output += "\">\n      <img width=\"16\" height=\"16\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"assignee", env.autoesc)),"avatar_url", env.autoesc), env.autoesc);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"assignee", env.autoesc)),"login", env.autoesc), env.autoesc);
output += "\">\n\t\t\t\t\t</span>\n\t\t\t\t\t";
;
}
output += "\n\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t</span>\n  </div>\n\t";
;
}
}
frame = frame.pop();
output += "\n</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/header.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"container clearfix\">\n\t\t<a href=\"/\" class=\"header-logo-invertocat tooltipped downwards\" original-title=\"Github Issues Really Awesome\">\n\t\t\t<span class=\"mega-octicon octicon-octoface\"></span>\n\t\t\t<span class=\"mega-octicon octicon-issue-reopened\"></span>\n\t\t\t<img width=\"40\" height=\"40\" align=\"absmiddle\" src=\"https://a248.e.akamai.net/assets.github.com/images/icons/emoji/metal.png\" alt=\":metal:\" title=\":metal:\" class=\"emoji\">\n\t\t</a>\n\n\t\t<ul id=\"user-links\">\n\t\t\t";
if(runtime.contextOrFrameLookup(context, frame, "user")) {
output += "\n\t\t\t<li>\n\t\t\t\t<a class=\"name\" href=\"#\">\n\t\t\t\t\t<img width=\"20\" height=\"20\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"avatar_url", env.autoesc), env.autoesc);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"name", env.autoesc), env.autoesc);
output += "\"> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"name", env.autoesc), env.autoesc);
output += "\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a aria-label=\"Sign out\" id=\"logout\" data-method=\"post\" href=\"#\" class=\"tooltipped downwards\" original-title=\"Sign out\">\n\t\t\t\t\t<span class=\"octicon octicon-log-out\"></span>\n\t\t\t\t</a>\n      </li>\n\t\t\t";
;
}
else {
output += "\n\t\t\t<div class=\"header-actions\">\n        <a href=\"https://github.com/login/oauth/authorize?client_id=666dc0b3b994cc362ca2&scope=public_repo,user\" class=\"button primary\" id=\"signin\">Sign in</a>\n\t\t\t</div>\n      ";
;
}
output += "\n\t\t</ul>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/index.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\t<a href=\"https://github.com/jcouyang/gira\"><img style=\"position: absolute; top: 0; right: 0; border: 0;z-index:9999\" src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png\" alt=\"Fork me on GitHub\"></a>\n\t<div data-pjax-container=\"\" class=\"context-loader-container\" id=\"site-container\">\n\t\t<div class=\"marketing-section marketing-section-signup\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<form method=\"post\" class=\"form-signup-home js-form-signup-home\" autocomplete=\"off\" action=\"/join\" accept-charset=\"UTF-8\">\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<img width=\"320px\" src=\"https://github-camo.global.ssl.fastly.net/dbf5c065a2351c45eff08176351af29716fe7bec/687474703a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f626c6f672f323031312f6973737565732d6e6578742f746e672e706e67\">\n\t\t\t\t\t<div style=\"margin: 10px 0px 0px; padding: 0px; display: block;\"></div>        \n\t\t\t\t\t<a href=\"https://github.com/login/oauth/authorize?client_id=666dc0b3b994cc362ca2&amp;scope=public_repo,user\" class=\"button primary button-block\">Sign in GIRA with Github Account</a>\n\t\t\t\t\t\n\t\t\t\t</form>\n\t\t\t\t<h1 class=\"heading\">Github Issues Really Awesome!</h1>\n\t\t\t\t<p class=\"subheading\">GIRA provide you instant Github project visibility, GIRA will show you the real power of Github Issues. GIRA is build using pure Github API with pure JavaScript, and hosted on Github Pages.</p>\n\t\t\t</div><!-- /.container -->\n\n\t\t\t<div class=\"marketing-section-depth\"></div>\n\t\t</div><!-- /.jumbotron -->\n\n\t\t<div class=\"marketing-section marketing-benefits\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"marketing-header\">\n\t\t\t\t\t<h1>Why you’ll love GIRA.</h1>\n\t\t\t\t\t<p class=\"lead\">Powerful features to make software development management more collaborative.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"one-third column\">\n\t\t\t\t\t\t<div class=\"teaser-icon\">\n\t\t\t\t\t\t\t<span class=\"mega-octicon octicon-cloud-upload\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3>Safe and FREE.</h3>\n\t\t\t\t\t\t<p>GIRA is build using pure Github API with pure JavaScript witch hosted on Github Pages, so all of your data is stored right in Github and your browser.</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"one-third column\">\n\t\t\t\t\t\t<div class=\"teaser-icon\">\n\t\t\t\t\t\t\t<span class=\"mega-octicon octicon-mark-github\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3>Lightweight Kanban Right with Github.</h3>\n\t\t\t\t\t\t<p>Fully customizable task board gives developers instant feedback into the status of tasks thoughout your progress. And Awesome builtin features from Github like Commits + Issues and Email + Issues</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"one-third column\">\n\t\t\t\t\t\t<div class=\"teaser-icon\">\n\t\t\t\t\t\t\t<span class=\"mega-octicon octicon-milestone\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3>Builtin Github Milestones Support.</h3>\n\t\t\t\t\t\t<p>You've always been able to add labels to an issue or assign someone to the issue, now you can it to a milestone. See example of twitter bootstrap.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div><!-- /.container -->\n\t\t</div><!-- /.marketing-section -->\n\n\t\t<!-- /.marketing-section -->\n\n\t\t<!-- /.marketing-section -->\n\t\t<div class=\"marketing-section marketing-section-enterprise\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"marketing-header\">\n\t\t\t\t\t<h1>Bring GIRA right to work.</h1>\n\t\t\t\t\t<p class=\"lead\">Try input your username/repo . Or jcouyang/gira for example. Select a milestone and see what is going on.</p>\n\t\t\t\t\t<dl class=\"form\">\n\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t<input type=\"text\"  placeholder=\"Github username\" class=\"textfield\" name=\"username\" style=\"background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QsPDhss3LcOZQAAAU5JREFUOMvdkzFLA0EQhd/bO7iIYmklaCUopLAQA6KNaawt9BeIgnUwLHPJRchfEBR7CyGWgiDY2SlIQBT/gDaCoGDudiy8SLwkBiwz1c7y+GZ25i0wnFEqlSZFZKGdi8iiiOR7aU32QkR2c7ncPcljAARAkgckb8IwrGf1fg/oJ8lRAHkR2VDVmOQ8AKjqY1bMHgCGYXhFchnAg6omJGcBXEZRtNoXYK2dMsaMt1qtD9/3p40x5yS9tHICYF1Vn0mOxXH8Uq/Xb389wff9PQDbQRB0t/QNOiPZ1h4B2MoO0fxnYz8dOOcOVbWhqq8kJzzPa3RAXZIkawCenHMjJN/+GiIqlcoFgKKq3pEMAMwAuCa5VK1W3SAfbAIopum+cy5KzwXn3M5AI6XVYlVt1mq1U8/zTlS1CeC9j2+6o1wuz1lrVzpWXLDWTg3pz/0CQnd2Jos49xUAAAAASUVORK5CYII=&quot;); padding-right: 0px; background-repeat: no-repeat; background-attachment: scroll; background-position: right center; cursor: auto;\" autocomplete=\"off\">\n\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\t\t\t\t\t<a class=\"button blue\" href=\"#main_content\" id=\"try-gira\">Try GIRA</a><span class=\"lead\">  or  </span><a class=\"button primary\" href=\"https://github.com/login/oauth/authorize?client_id=666dc0b3b994cc362ca2&amp;scope=public_repo,user\">Sign In</a>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div><!-- /.container -->\n\t\t\t\n\t\t</div>\n\t\t<div id=\"main_content\" class=\"marketing-section gira-example container\">\n\t\t\t<div class=\"box box-small\">\n\t\t\t\t<div class=\"pagehead repohead\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<h1></h1>\n\t\t\t\t\t\t<a id=\"new-issue\" href=\"#create-new-issue\" rel=\"facebox\" class=\"right button primary popable\">New Issue</a>\n\t\t\t\t\t\t<a id=\"new-label\" href=\"#create-new-label\" rel=\"facebox\" class=\"right button popable\">New Lane</a>\n\t\t\t\t\t\t<div class=\"sidebar-milestone-widget right\">\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t<div id=\"contributions-calendar\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/milestones.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"select-menu is-showing-clear-item js-menu-container js-select-menu\">\n\n  <span class=\"minibutton select-menu-button icon-only js-menu-target\">\n    <span class=\"octicon octicon-gear\"></span>\n  </span>\n\n  <div class=\"select-menu-modal-holder js-menu-content js-milestone-issue-filter js-navigation-container js-select-menu-pane\" data-pjax=\"\" aria-hidden=\"true\" style=\"right:0;\">\n    <div class=\"select-menu-modal\">\n      <div class=\"select-menu-header\">\n        <span class=\"select-menu-title\">Filter issues by milestone</span>\n        <span class=\"octicon octicon-remove-close js-menu-close\"></span>\n      </div> <!-- /.select-menu-header -->\n\n      <div class=\"select-menu-filters\">\n        <div class=\"select-menu-text-filter\">\n          <input type=\"text\" id=\"issues-list-sidebar-milestones-filter\" class=\"js-filterable-field js-navigation-enable\" placeholder=\"Filter milestones\">\n        </div>\n      </div> <!-- /.select-menu-filters -->\n\n      <div class=\"select-menu-list\" data-filterable-for=\"issues-list-sidebar-milestones-filter\" data-filterable-type=\"substring\">\n\n        <a class=\"select-menu-item select-menu-clear-item js-navigation-open js-navigation-item\" href=\"#\" data-milestone=\"\">\n          <span class=\"select-menu-item-icon octicon octicon-remove-close\"></span>\n          <span class=\"select-menu-item-text\" data-milestone=\"\">Clear milestone filter</span>\n        </a> <!-- /.select-menu-item -->\n\n        <!-- <a class=\"select-menu-item js-navigation-open js-navigation-item\" href=\"/jcouyang/gira/issues?milestone=none&amp;page=1&amp;state=open\" data-milestone=\"\"> -->\n        <!--   <span class=\"select-menu-item-icon octicon octicon-check\"></span> -->\n        <!--   <span class=\"select-menu-item-text js-select-button-text\" data-milestone=\"\">Issues with no milestone</span> -->\n        <!-- </a> <\\!-- /.select-menu-item -\\-> -->\n\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "milestones");
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("milestone", t_4);
output += "\n        <a class=\"select-menu-item js-navigation-item js-navigation-open ";
output += runtime.suppressValue((runtime.memberLookup((t_4),"number", env.autoesc) == runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "selected")),"number", env.autoesc)?"selected":""), env.autoesc);
output += " last-visible\" href=\"#\" data-milestone=";
output += runtime.suppressValue(runtime.memberLookup((t_4),"number", env.autoesc), env.autoesc);
output += ">\n          <span class=\"select-menu-item-icon octicon octicon-check\"></span>\n          <span class=\"select-menu-item-text \" data-milestone=\"2\">\n            <h4>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title", env.autoesc), env.autoesc);
output += "</h4>\n\t\t\t\t\t\t";
if(runtime.memberLookup((t_4),"due_on", env.autoesc)) {
output += "\n            <span class=\"description\">Due in ";
output += runtime.suppressValue(env.getFilter("dayFromNow").call(context, runtime.memberLookup((t_4),"due_on", env.autoesc)), env.autoesc);
output += " days</span>\n\t\t\t\t\t\t";
;
}
output += "\n          </span>\n        </a> <!-- /.select-menu-item -->\n\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n        <div class=\"select-menu-no-results js-not-filterable\">Nothing to show</div>\n      </div> <!-- /.select-menu-list -->\n    </div> <!-- /.select-menu-modal -->\n  </div> <!-- /.select-menu-modal-holder -->\n</div> <!-- /.select-menu -->\n\n";
if(runtime.contextOrFrameLookup(context, frame, "selected")) {
output += "\n<div class=\"info\">\n  <div class=\"info-main\">\n    Milestone: <span class=\"css-truncate css-truncate-target\"><span class=\"title\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "selected")),"title", env.autoesc), env.autoesc);
output += "</span>\n  </span></div>\n  <span class=\"progress-bar\" style=\"padding-top: 0px; margin-top: 0px;\"><span class=\"progress\" style=\"width: ";
output += runtime.suppressValue(100 / (1 + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "selected")),"open_issues", env.autoesc) / runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "selected")),"closed_issues", env.autoesc)), env.autoesc);
output += "%\">&nbsp;</span></span>\n  <div class=\"info-secondary right\">\n    <span class=\"open\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "selected")),"open_issues", env.autoesc), env.autoesc);
output += " open issues</span>\n\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "selected")),"due_on", env.autoesc)) {
output += "\n    <span class=\"due\"> · Due in ";
output += runtime.suppressValue(env.getFilter("dayFromNow").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "selected")),"due_on", env.autoesc)), env.autoesc);
output += " days</span>\n\t\t";
;
}
output += "\n  </div>\n</div>\n";
;
}
else {
output += "\n<strong class=\"sidebar-milestone-widget-text\">No milestone selected</strong>\n";
;
}
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/repo-selector.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<span class=\"repo-label\">\n\t<a href=\"https://github.com/";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "checked"), env.autoesc);
output += "/";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "checkedRepo"), env.autoesc);
output += "\" target=\"_blank\">public <span class=\"octicon octicon-link-external\"></a></span>\n</span>\n\t<span class=\"mega-octicon octicon-repo\"></span> <span class=\"author\">\n\t";
if(runtime.contextOrFrameLookup(context, frame, "username")) {
output += "\n\t<a rel=\"author\" itemprop=\"url\" class=\"url fn\" href=\"/";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "username"), env.autoesc);
output += "\"><span itemprop=\"title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "username"), env.autoesc);
output += "</span></a>\n\t<span class=\"repohead-name-divider\">/</span>\n\t<strong><a class=\"js-current-repository js-repo-home-link\" href=\"/";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "username"), env.autoesc);
output += "/";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "repo"), env.autoesc);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "repo"), env.autoesc);
output += "</a></strong>\n\t";
;
}
else {
output += "\n\t<div class=\"repo-selector js-repo-selector \">\n\n\t\t<div class=\"repo-entry-form\">\n\t\t\t<div class=\"entry-content\">\n\n\t\t\t\t<div class=\"select-menu owner-select-menu js-menu-container js-select-menu js-owner-container js-owner-select\">\n\t\t\t\t\t<span class=\"minibutton select-menu-button js-menu-target\">\n\t\t\t\t\t\t<span class=\"js-select-button\">\n              ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "checked"), env.autoesc);
output += "\n            </span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div aria-hidden=\"true\" class=\"select-menu-modal-holder js-menu-content js-navigation-container\">\n\t\t\t\t\t\t<div class=\"select-menu-modal\">\n\t\t\t\t\t\t\t<div class=\"select-menu-header\">\n\t\t\t\t\t\t\t\t<span class=\"select-menu-title\">Choose another owner</span>\n\t\t\t\t\t\t\t\t<span class=\"octicon octicon-remove-close js-menu-close\"></span>\n\t\t\t\t\t\t\t</div> <!-- /.select-menu-header -->\n\t\t\t\t\t\t\t<div class=\"select-menu-list\">\n\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "owners");
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("owner", t_4);
output += "\n\t\t\t\t\t\t\t\t<div class=\"select-menu-item js-navigation-item ";
output += runtime.suppressValue((runtime.memberLookup((t_4),"login", env.autoesc) == runtime.contextOrFrameLookup(context, frame, "checked")?"selected":""), env.autoesc);
output += "\">\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" checked=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"login", env.autoesc) == runtime.contextOrFrameLookup(context, frame, "checked"), env.autoesc);
output += "\" id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"login", env.autoesc), env.autoesc);
output += "\" name=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"login", env.autoesc), env.autoesc);
output += "\" value=\"hubot\">\n\t\t\t\t\t\t\t\t\t<span class=\"select-menu-item-icon octicon octicon-check\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item-gravatar js-select-menu-item-gravatar\">\n\t\t\t\t\t\t\t\t\t\t<img width=\"20\" height=\"20\" alt=\"hubot\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"avatar_url", env.autoesc), env.autoesc);
output += "\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item-text js-select-button-text\">\n\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((t_4),"login", env.autoesc), env.autoesc);
output += "\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div> <!-- /.select-menu-item -->\n\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t\t</div> <!-- /.select-menu-list -->\n\t\t\t\t\t\t</div> <!-- /.select-menu-modal -->\n\t\t\t\t\t</div> <!-- /.select-menu-modal-holder -->\n\t\t\t\t</div> <!-- /.select-menu -->\n\n\t\t\t\t<div class=\"nwo-slash\">/</div>\n\n\t\t\t\t<div class=\"target-repo-menu select-menu js-menu-container js-select-menu js-target-repo-menu owner-is-active\" data-owner=\"hubot\">\n\t\t\t\t\t<span class=\"minibutton select-menu-button js-menu-target\">\n\t\t\t\t\t\t<span class=\"js-select-button\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "checkedRepo"), env.autoesc);
output += "</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div aria-hidden=\"true\" class=\"select-menu-modal-holder js-menu-content js-navigation-container\">\n\t\t\t\t\t\t<div class=\"select-menu-modal\">\n\t\t\t\t\t\t\t<div class=\"select-menu-header\">\n\t\t\t\t\t\t\t\t<span class=\"select-menu-title\">Choose repository</span>\n\t\t\t\t\t\t\t\t<span class=\"octicon octicon-remove-close js-menu-close\"></span>\n\t\t\t\t\t\t\t</div> <!-- /.select-menu-header -->\n\t\t\t\t\t\t\t<div class=\"select-menu-list\">\n\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "repos");
if(t_7) {for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("repo", t_8);
output += "\n\t\t\t\t\t\t\t\t<div class=\"select-menu-item js-navigation-item ";
output += runtime.suppressValue((runtime.memberLookup((t_8),"name", env.autoesc) == runtime.contextOrFrameLookup(context, frame, "checkedRepo")?"selected":""), env.autoesc);
output += "\">\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id", env.autoesc), env.autoesc);
output += "\" name=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"name", env.autoesc), env.autoesc);
output += "\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"full_name", env.autoesc), env.autoesc);
output += "\" checked=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"name", env.autoesc) == runtime.contextOrFrameLookup(context, frame, "checkedRepo"), env.autoesc);
output += "\"/>\n\t\t\t\t\t\t\t\t\t<span class=\"select-menu-item-icon octicon octicon-check\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item-text js-select-button-text\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"name", env.autoesc), env.autoesc);
output += "</div>\n\t\t\t\t\t\t\t\t</div> <!-- /.select-menu-item -->\n\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t\t</div> <!-- /.select-menu-list -->\n\t\t\t\t\t\t</div> <!-- /.select-menu-modal -->\n\t\t\t\t\t</div> <!-- /.select-menu-modal-holder -->\n\t\t\t\t</div> <!-- /.select-menu -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t";
;
}
output += "\n\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
