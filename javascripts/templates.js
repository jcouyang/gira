(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/create-issue.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<style type=\"text/css\" media=\"screen\">\n    span.labelstyle-CCCCCC, .linked-labelstyle-CCCCCC {\n        background-color: #CCCCCC !important;\n        color: #333333 !important;\n    }\n\n    .labelstyle-CCCCCC.selected {\n        background-color: #CCCCCC !important;\n        color: #333333 !important;\n    }\n\n    .label-select-menu .labelstyle-CCCCCC.selected {\n        background: rgba(204, 204, 204, 0.12) !important;\n        color: #999999 !important;\n    }\n\n    span.labelstyle-ededed, .linked-labelstyle-ededed {\n        background-color: #ededed !important;\n        color: #333333 !important;\n    }\n\n    .labelstyle-ededed.selected {\n        background-color: #ededed !important;\n        color: #333333 !important;\n    }\n\n    .label-select-menu .labelstyle-ededed.selected {\n        background: rgba(237, 237, 237, 0.12) !important;\n        color: #999999 !important;\n    }\n\n    span.labelstyle-fc2929, .linked-labelstyle-fc2929 {\n        background-color: #fc2929 !important;\n        color: #fff !important;\n    }\n\n    .labelstyle-fc2929.selected {\n        background-color: #fc2929 !important;\n        color: #fff !important;\n    }\n\n    .label-select-menu .labelstyle-fc2929.selected {\n        background: rgba(252, 41, 41, 0.12) !important;\n        color: #991818 !important;\n    }\n\n    span.labelstyle-cccccc, .linked-labelstyle-cccccc {\n        background-color: #cccccc !important;\n        color: #333333 !important;\n    }\n\n    .labelstyle-cccccc.selected {\n        background-color: #cccccc !important;\n        color: #333333 !important;\n    }\n\n    .label-select-menu .labelstyle-cccccc.selected {\n        background: rgba(204, 204, 204, 0.12) !important;\n        color: #999999 !important;\n    }\n\n    span.labelstyle-84b6eb, .linked-labelstyle-84b6eb {\n        background-color: #84b6eb !important;\n        color: #1c2733 !important;\n    }\n\n    .labelstyle-84b6eb.selected {\n        background-color: #84b6eb !important;\n        color: #1c2733 !important;\n    }\n\n    .label-select-menu .labelstyle-84b6eb.selected {\n        background: rgba(132, 182, 235, 0.12) !important;\n        color: #557699 !important;\n    }\n\n    span.labelstyle-e6e6e6, .linked-labelstyle-e6e6e6 {\n        background-color: #e6e6e6 !important;\n        color: #333333 !important;\n    }\n\n    .labelstyle-e6e6e6.selected {\n        background-color: #e6e6e6 !important;\n        color: #333333 !important;\n    }\n\n    .label-select-menu .labelstyle-e6e6e6.selected {\n        background: rgba(230, 230, 230, 0.12) !important;\n        color: #999999 !important;\n    }\n\n    span.labelstyle-cc317c, .linked-labelstyle-cc317c {\n        background-color: #cc317c !important;\n        color: #fff !important;\n    }\n\n    .labelstyle-cc317c.selected {\n        background-color: #cc317c !important;\n        color: #fff !important;\n    }\n\n    .label-select-menu .labelstyle-cc317c.selected {\n        background: rgba(204, 49, 124, 0.12) !important;\n        color: #99245c !important;\n    }\n\n    span.labelstyle-ffffff, .linked-labelstyle-ffffff {\n        background-color: #ffffff !important;\n        color: #333333 !important;\n    }\n\n    .labelstyle-ffffff.selected {\n        background-color: #ffffff !important;\n        color: #333333 !important;\n    }\n\n    .label-select-menu .labelstyle-ffffff.selected {\n        background: rgba(255, 255, 255, 0.12) !important;\n        color: #999999 !important;\n    }\n</style>\n<form method=\"post\" id=\"new_issue\" class=\"js-new-issue-form\" onsubmit=\"return gira.createIssue()()\"\n      accept-charset=\"UTF-8\" data-issue-id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "number"), env.autoesc);
output += "\">\n<div style=\"margin:0;padding:0;display:inline\"></div>\n<div class=\"columns discussion-timeline-cols\">\n<div class=\"column main\">\n<div class=\"discussion-bubble composer\">\n<a href=\"https://github.com/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"login", env.autoesc), env.autoesc);
output += "\"><img width=\"48\" height=\"48\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"avatar_url", env.autoesc), env.autoesc);
output += "\"\n                                                 class=\"discussion-bubble-avatar\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"full_name", env.autoesc), env.autoesc);
output += "\"></a>\n\n<div class=\"discussion-bubble-content bubble\">\n<div class=\"discussion-bubble-inner\">\n\n<div class=\"discussion-topic\">\n\n\n<div class=\"discussion-topic-header\">\n    <dl class=\"form\">\n        <div class=\"fieldWithErrors\"><label for=\"issue_title\" class=\"discussion-title-label\">Title</label></div>\n        <dd>\n            <div class=\"fieldWithErrors\"><input type=\"text\" tabindex=\"1\" size=\"30\" required=\"required\"\n                                                placeholder=\"Title\" name=\"issue[title]\" id=\"issue_title\"\n                                                class=\"required title js-auto-save\" autofocus=\"autofocus\"\n                                                value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.autoesc);
output += "\"></div>\n        </dd>\n    </dl>\n</div>\n<!-- /.topic-comment-header -->\n\n\n<div class=\"composer-infobar js-infobar\">\n\n<div class=\"assignee infobar-widget\">\n\t\t\t\t\t\t\t\t\t<span class=\"css-truncate text js-assignee-infobar-item-wrapper\">\n\t\t\t\t\t\t\t\t\t\t";
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
output += "\n\t\t\t\t\t\t\t\t\t\tis assigned\n\t\t\t\t\t\t\t\t\t</span>\n\n\n    <div class=\"select-menu js-menu-container js-select-menu js-composer-assignee-picker \">\n\t\t\t\t\t\t\t\t\t\t<span aria-label=\"Assign someone to this issue\" role=\"button\"\n                                              class=\"minibutton select-menu-button icon-only js-menu-target\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"octicon octicon-gear\"></span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\n        <div class=\"select-menu-modal-holder js-menu-content js-navigation-container\">\n\n            <div class=\"select-menu-modal\">\n                <div class=\"select-menu-header\">\n                    <span class=\"select-menu-title\">Assign someone to this issue</span>\n                    <span class=\"octicon octicon-remove-close js-menu-close\"></span>\n                </div>\n                <!-- /.select-menu-header -->\n\n\n                <div class=\"select-menu-error-shell\"><span class=\"select-menu-error js-select-menu-error\">Sorry, an error occurred</span>\n                </div>\n\n                <div class=\"select-menu-filters\">\n                    <div class=\"select-menu-text-filter\">\n                        <input type=\"text\" aria-label=\"Type or choose a name\" placeholder=\"Filter people\"\n                               class=\"js-filterable-field js-navigation-enable\" id=\"assignee-filter-field\">\n                    </div>\n                </div>\n                <!-- /.select-menu-filters -->\n\n\n                <div class=\"select-menu-list\">\n\n                    <div aria-label=\"Clear assignee\" role=\"button\"\n                         class=\"select-menu-clear-item select-menu-item js-navigation-item js-clear-assignee js-no-current-assignee\">\n                        <input type=\"radio\" value=\"\" name=\"issue[assignee]\">\n                        <span class=\"select-menu-item-icon octicon octicon-remove-close\"></span>\n\n                        <div class=\"select-menu-item-text\">Clear assignee</div>\n                    </div>\n                    <!-- /.select-menu-item -->\n\n                    <div role=\"menu\" data-filterable-type=\"fuzzy\" data-filterable-for=\"assignee-filter-field\">\n                        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "assignees");
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("assignee", t_4);
output += "\n                        <div role=\"menuitem\" class=\"select-menu-item js-navigation-item\">\n                            <input type=\"radio\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"login", env.autoesc), env.autoesc);
output += "\" name=\"issue[assignee]\">\n                            <span class=\"select-menu-item-icon octicon octicon-check\"></span>\n\n                            <div class=\"select-menu-item-gravatar js-select-menu-item-gravatar\">\n                                    <span class=\"avatar\"><img width=\"20\" height=\"20\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"avatar_url", env.autoesc), env.autoesc);
output += "\"\n                                                              alt=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"login", env.autoesc), env.autoesc);
output += "\"></span>\n                            </div>\n\n                            <div class=\"select-menu-item-text\">\n                                <h4>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"login", env.autoesc), env.autoesc);
output += " <span class=\"description\"></span></h4>\n                            </div>\n                        </div>\n                        ";
;
}
}
frame = frame.pop();
output += "\n                    </div>\n\n                    <div class=\"select-menu-no-results\">Nothing to show</div>\n\n                </div>\n                <!-- /.select-menu-list -->\n\n\n            </div>\n            <!-- /.select-menu-modal -->\n        </div>\n        <!-- /.select-menu-modal-holder -->\n    </div>\n    <!-- /.select-menu -->\n\n</div>\n\n<div class=\"milestone infobar-widget\">\n\t\t\t\t\t\t\t\t\t<span class=\"css-truncate text js-composer-milestone-title\">\n                                        ";
if(runtime.contextOrFrameLookup(context, frame, "milestone")) {
output += "\n                                        <strong class=\"css-truncate-target\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "milestone")),"title", env.autoesc), env.autoesc);
output += "</strong>\n                                        ";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t\t\tNo milestone\n                                        ";
;
}
output += "\n\t\t\t\t\t\t\t\t\t</span>\n\n    <div class=\"select-menu js-menu-container js-select-menu js-composer-milestone-picker ";
if(runtime.contextOrFrameLookup(context, frame, "milestone")) {
output += "is-showing-clear-item";
;
}
output += "\">\n\t\t\t\t\t\t\t\t\t\t<span aria-label=\"Set milestone\" role=\"button\"\n                                              class=\"minibutton select-menu-button icon-only js-menu-target\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"octicon octicon-gear\"></span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\n        <div class=\"select-menu-modal-holder js-menu-content js-navigation-container\">\n\n            <div class=\"select-menu-modal\">\n                <div class=\"select-menu-header\">\n                    <span class=\"select-menu-title\">Set milestone</span>\n                    <span class=\"octicon octicon-remove-close js-menu-close\"></span>\n                </div>\n                <!-- /.select-menu-header -->\n\n\n                <div class=\"select-menu-error-shell\"><span class=\"select-menu-error js-select-menu-error\">Sorry, an error occurred</span>\n                </div>\n\n                <div class=\"select-menu-filters\">\n                    <div class=\"select-menu-text-filter\">\n                        <input type=\"text\" autocomplete=\"off\" placeholder=\"Filter milestones\"\n                               class=\"js-filterable-field js-navigation-enable\" id=\"context-milestone-filter-field\">\n                    </div>\n                    <div class=\"select-menu-tabs\">\n                        <ul>\n                            <li class=\"select-menu-tab\">\n                                <a class=\"js-select-menu-tab\" data-tab-filter=\"tab-open\" href=\"#\">Open</a>\n                            </li>\n                            <li class=\"select-menu-tab\">\n                                <a class=\"js-select-menu-tab\" data-tab-filter=\"tab-closed\" href=\"#\">Closed</a>\n                            </li>\n                        </ul>\n                    </div>\n                    <!-- /.select-menu-tabs -->\n                </div>\n                <!-- /.select-menu-filters -->\n\n                <div data-tab-filter=\"tab-open\"\n                     class=\"select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket\">\n\n                    <div class=\"select-menu-clear-item select-menu-item js-navigation-item js-clear-milestone\">\n                        <input type=\"radio\" value=\"\" name=\"milestone\" id=\"milestone_clear\">\n                        <span class=\"select-menu-item-icon octicon octicon-remove-close\"></span>\n\n                        <div class=\"select-menu-item-text\">Clear this milestone</div>\n                    </div>\n                    <!-- /.select-menu-item -->\n\n                    <div role=\"menu\" data-filterable-type=\"substring\"\n                         data-filterable-for=\"context-milestone-filter-field\">\n\n                        ";
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "milestones");
if(t_7) {for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("one_milestone", t_8);
output += "\n                        <div role=\"menuitem\"\n                             class=\"select-menu-item js-navigation-item ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "milestone")),"number", env.autoesc) == runtime.memberLookup((t_8),"number", env.autoesc)) {
output += "selected";
;
}
output += "\">\n                            <input type=\"radio\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"number", env.autoesc), env.autoesc);
output += "\" name=\"milestone\"\n                                   id=\"milestone_";
output += runtime.suppressValue(runtime.memberLookup((t_8),"number", env.autoesc), env.autoesc);
output += "\">\n                            <span class=\"select-menu-item-icon octicon octicon-check\"></span>\n\n                            <div class=\"select-menu-item-text\">\n                                <h4 class=\"js-milestone-title js-select-button-text\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"title", env.autoesc), env.autoesc);
output += "</h4>\n                                ";
if(runtime.memberLookup((t_8),"duo_on", env.autoesc)) {
output += "\n                                <span class=\"description\">Due in ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"due_on", env.autoesc), env.autoesc);
output += " days</span>";
;
}
output += "\n                            </div>\n                        </div>\n                        <!-- /.select-menu-item -->\n                        ";
;
}
}
frame = frame.pop();
output += "\n                    </div>\n\n                    <div class=\"select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form\">\n                        <input type=\"radio\" value=\"new\" name=\"milestone\">\n                        <input type=\"hidden\" name=\"milestone_title\" class=\"js-new-item-value\">\n\n                        <span class=\"octicon octicon-milestone select-menu-item-icon\"></span>\n\n                        <div class=\"select-menu-item-text\">\n                            <h4>Create and assign to new milestone:</h4>\n                            <span class=\"description js-new-item-name js-milestone-title\"></span>\n                        </div>\n                    </div>\n\n                </div>\n                <!-- /.select-menu-list -->\n\n                <div data-tab-filter=\"tab-closed\"\n                     class=\"select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket\">\n\n                    <div role=\"menu\" data-filterable-type=\"substring\"\n                         data-filterable-for=\"context-milestone-filter-field\">\n\n                    </div>\n\n                    <div class=\"select-menu-no-results\">Nothing to show</div>\n                </div>\n                <!-- /.select-menu-list -->\n\n\n                <div class=\"fieldWithErrors\"><input type=\"hidden\" name=\"issue[milestone_id]\"\n                                                    id=\"issue_milestone_id\"></div>\n                <input type=\"hidden\" name=\"new_milestone_title\" id=\"new_milestone_title\">\n            </div>\n            <!-- /.select-menu-modal -->\n        </div>\n        <!-- /.select-menu-modal-holder -->\n    </div>\n    <!-- /.select-menu -->\n\n</div>\n</div>\n\n\n<div class=\"comment-content\">\n\n    <dl class=\"form body\">\n        <dd>\n\n\n            <div data-preview-url=\"#\" class=\"js-previewable-comment-form previewable-comment-form write-selected\">\n                <div class=\"comment-form-head tabnav\">\n                    <ul class=\"tabnav-tabs\">\n                        <li><a class=\"tabnav-tab write-tab js-write-tab selected\" href=\"#write_bucket_\">Write</a></li>\n                        <li><a id='jk-preview' class=\"tabnav-tab preview-tab js-preview-tab\" href=\"#preview_bucket_\">Preview</a>\n                        </li>\n                    </ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabnav-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabnav-widget text\">Comments are parsed with <a\n                                                            target=\"_blank\" class=\"gfm-help\"\n                                                            href=\"https://help.github.com/articles/github-flavored-markdown\">GitHub\n                                                        Flavored Markdown</a></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                </div>\n\n                <div style=\"display:none\" class=\"comment-form-error js-comment-form-error\"> There was an error creating\n                    your Issue:\n                </div>\n                <div data-model=\"assets\" class=\"write-content upload-enabled is-default\" id=\"write_bucket_\">\n\n                    <a class=\"enable-fullscreen js-enable-fullscreen tooltipped\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tleftwards \" href=\"#fullscreen_issue_body\"\n                       original-title=\"Zen Mode\">\n                        <span class=\"octicon octicon-screen-full\"></span>\n                    </a>\n\n                    <textarea data-suggester=\"_new_preview_suggester\"\n                              class=\"comment-form-textarea js-comment-field js-size-to-fit js-quote-selection-target  input-with-fullscreen-icon\"\n                              placeholder=\"Leave a comment\" id=\"issue_body\" tabindex=\"1\"\n                              name=\"issue[body]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "body"), env.autoesc);
output += "</textarea>\n\n\n                    <p class=\"drag-and-drop\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tAttach images by dragging &amp; dropping or\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\"\n                                                               class=\"manual-file-chooser js-manual-file-chooser\"\n                                                               multiple=\"multiple\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"manual-file-chooser-text\">selecting them</a>.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"loading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"16\" height=\"16\"\n                                                             src=\"https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif\"\n                                                             alt=\"Octocat-spinner-32\"> Uploading your images…\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error bad-file\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUnfortunately we don't support that file type yet. Please use PNG, GIF, or JPG.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error too-big\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tYowza, that's a big file. Please submit an image file smaller than 5MB.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error bad-browser\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis browser doesn't support image attachments.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error failed-request\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tSomething went really wrong and we can't process that image.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                    </p>\n\n                </div>\n                <div class=\"preview-content js-preview-bucket\" id=\"preview_bucket_\">\n\n\n                    <div data-body-version=\"\" class=\"comment js-comment js-task-list-container\"\n                         id=\"openstruct-70192145241500\">\n\n                        <div class=\"comment-content\">\n\n                            <div class=\"edit-comment-hide\">\n                                <div class=\"comment-body markdown-body  js-comment-body\">\n                                    <p>Nothing to preview</p>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n\n                </div>\n\n\n                <div class=\"suggester-container\">\n                    <div data-url=\"/jcouyang/gira/suggestions/issue\" id=\"_new_preview_suggester\"\n                         class=\"suggester js-navigation-container\">\n                    </div>\n                </div>\n            </div>\n\n        </dd>\n    </dl>\n\n</div>\n<!-- /.comment-content -->\n</div>\n<!-- /.comment -->\n\n\n</div>\n<!-- /.discussion-bubble-content -->\n</div>\n<!-- /.discussion-bubble-inner -->\n\n<div class=\"form-actions\">\n\n    <button data-disable-with=\"\" data-disable-invalid=\"\" tabindex=\"1\" class=\"button primary\" type=\"submit\">\n        Submit new issue\n    </button>\n</div>\n\n</div>\n<!-- /.discussion-bubble -->\n\n</div>\n<div class=\"column sidebar\">\n\n    <h3>Add Labels</h3>\n    <ul class=\"js-composer-labels color-label-list filter-list small\">\n\n        ";
frame = frame.push();
var t_11 = runtime.contextOrFrameLookup(context, frame, "all_labels");
if(t_11) {for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("one_label", t_12);
output += "\n        <li data-name=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name", env.autoesc), env.autoesc);
output += "\" style=\"";
if(env.getFilter("hasIndex").call(context, runtime.memberLookup((t_12),"name", env.autoesc))) {
output += "display: none;";
;
}
output += "\">\n            <a class=\"filter-item color-label labelstyle-";
output += runtime.suppressValue(runtime.memberLookup((t_12),"color", env.autoesc), env.autoesc);
output += "\" href=\"#\">\n\n                <input type=\"checkbox\" name=\"issue[labels][]\" id=\"issue_labels_";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name", env.autoesc), env.autoesc);
output += "\"\n                       value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name", env.autoesc), env.autoesc);
output += "\" style=\"display: none\">\n                <span style=\"background-color:  #";
output += runtime.suppressValue(runtime.memberLookup((t_12),"color", env.autoesc), env.autoesc);
output += "\" class=\"color\">&nbsp;</span>\n                <span class=\"name\">";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name", env.autoesc), env.autoesc);
output += "</span>\n            </a>\n        </li>\n        ";
;
}
}
frame = frame.pop();
output += "\n    </ul>\n\n</div>\n</div>\n</form>\n";
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
output += "<div class=\"edit-color-label-form new-label-form js-new-label-form js-label-editor open\">\n    <h4 class=\"new-label-form-title\">New label</h4>\n\n    <form method=\"post\" id=\"new_label_form\" accept-charset=\"UTF-8\">\n        <div style=\"margin:0;padding:0;display:inline\">\n        </div>\n\n        <input type=\"text\" data-hotkey=\"l\" placeholder=\"New label name\" class=\"name-input js-name-input\" name=\"label\">\n\n\n        <ul class=\"color-chooser js-color-chooser\">\n            <li>\n      <span data-hex-color=\"e11d21\" style=\"background-color: #e11d21 !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-e11d21\">\n      </span>\n            </li>\n            <li>\n      <span data-hex-color=\"eb6420\" style=\"background-color: #eb6420 !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-eb6420\">\n      </span>\n            </li>\n            <li>\n      <span data-hex-color=\"fbca04\" style=\"background-color: #fbca04 !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-fbca04\">\n      </span>\n            </li>\n            <li>\n      <span data-hex-color=\"009800\" style=\"background-color: #009800 !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-009800\">\n      </span>\n            </li>\n            <li>\n      <span data-hex-color=\"006b75\" style=\"background-color: #006b75 !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-006b75\">\n      </span>\n            </li>\n            <li>\n      <span data-hex-color=\"207de5\" style=\"background-color: #207de5 !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-207de5\">\n      </span>\n            </li>\n            <li>\n      <span data-hex-color=\"0052cc\" style=\"background-color: #0052cc !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-0052cc\">\n      </span>\n            </li>\n            <li>\n      <span data-hex-color=\"5319e7\" style=\"background-color: #5319e7 !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-5319e7\">\n      </span>\n            </li>\n        </ul>\n\n\n        <ul class=\"color-chooser js-color-chooser\">\n            <li>\n      <span data-hex-color=\"f7c6c7\" style=\"background-color: #f7c6c7 !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-f7c6c7\">\n      </span>\n            </li>\n            <li>\n      <span data-hex-color=\"fad8c7\" style=\"background-color: #fad8c7 !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-fad8c7 selected\" data-last=\"true\">\n      </span>\n            </li>\n            <li>\n      <span data-hex-color=\"fef2c0\" style=\"background-color: #fef2c0 !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-fef2c0\">\n      </span>\n            </li>\n            <li>\n      <span data-hex-color=\"bfe5bf\" style=\"background-color: #bfe5bf !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-bfe5bf\">\n      </span>\n            </li>\n            <li>\n      <span data-hex-color=\"bfdadc\" style=\"background-color: #bfdadc !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-bfdadc\">\n      </span>\n            </li>\n            <li>\n      <span data-hex-color=\"c7def8\" style=\"background-color: #c7def8 !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-c7def8\">\n      </span>\n            </li>\n            <li>\n      <span data-hex-color=\"bfd4f2\" style=\"background-color: #bfd4f2 !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-bfd4f2\">\n      </span>\n            </li>\n            <li>\n      <span data-hex-color=\"d4c5f9\" style=\"background-color: #d4c5f9 !important;\"\n            class=\"color-cooser-color js-color-cooser-color labelstyle-d4c5f9\">\n      </span>\n            </li>\n        </ul>\n\n\n        <div class=\"color-editor js-color-editor\">\n            <div class=\"color-editor-bg js-color-editor-bg\" style=\"background-color: rgb(250, 216, 199);\"></div>\n\n            <input type=\"text\" name=\"color\" placeholder=\"#FF0000\" maxlength=\"7\" value=\"#FF0000\"\n                   class=\"color-editor-input js-color-editor-input hexfield\"\n                   style=\"color: rgb(125, 108, 100); border-color: rgb(250, 216, 199);\">\n\n            <button class=\"js-label-editor-submit minibutton\" type=\"submit\">Create</button>\n            <span class=\"invalid-color-indicator\">?</span>\n        </div>\n    </form>\n</div>\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/edit-issue.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<style type=\"text/css\" media=\"screen\">\n  span.labelstyle-CCCCCC, .linked-labelstyle-CCCCCC {\n  background-color: #CCCCCC !important;\n  color: #333333 !important;\n  }\n\n  .labelstyle-CCCCCC.selected {\n  background-color: #CCCCCC !important;\n  color: #333333 !important;\n  }\n\n  .label-select-menu .labelstyle-CCCCCC.selected {\n  background: rgba(204, 204, 204, 0.12) !important;\n  color: #999999 !important;\n  }\n\n  span.labelstyle-ededed, .linked-labelstyle-ededed {\n  background-color: #ededed !important;\n  color: #333333 !important;\n  }\n\n  .labelstyle-ededed.selected {\n  background-color: #ededed !important;\n  color: #333333 !important;\n  }\n\n  .label-select-menu .labelstyle-ededed.selected {\n  background: rgba(237, 237, 237, 0.12) !important;\n  color: #999999 !important;\n  }\n\n  span.labelstyle-fc2929, .linked-labelstyle-fc2929 {\n  background-color: #fc2929 !important;\n  color: #fff !important;\n  }\n\n  .labelstyle-fc2929.selected {\n  background-color: #fc2929 !important;\n  color: #fff !important;\n  }\n\n  .label-select-menu .labelstyle-fc2929.selected {\n  background: rgba(252, 41, 41, 0.12) !important;\n  color: #991818 !important;\n  }\n\n  span.labelstyle-cccccc, .linked-labelstyle-cccccc {\n  background-color: #cccccc !important;\n  color: #333333 !important;\n  }\n\n  .labelstyle-cccccc.selected {\n  background-color: #cccccc !important;\n  color: #333333 !important;\n  }\n\n  .label-select-menu .labelstyle-cccccc.selected {\n  background: rgba(204, 204, 204, 0.12) !important;\n  color: #999999 !important;\n  }\n\n  span.labelstyle-84b6eb, .linked-labelstyle-84b6eb {\n  background-color: #84b6eb !important;\n  color: #1c2733 !important;\n  }\n\n  .labelstyle-84b6eb.selected {\n  background-color: #84b6eb !important;\n  color: #1c2733 !important;\n  }\n\n  .label-select-menu .labelstyle-84b6eb.selected {\n  background: rgba(132, 182, 235, 0.12) !important;\n  color: #557699 !important;\n  }\n\n  span.labelstyle-e6e6e6, .linked-labelstyle-e6e6e6 {\n  background-color: #e6e6e6 !important;\n  color: #333333 !important;\n  }\n\n  .labelstyle-e6e6e6.selected {\n  background-color: #e6e6e6 !important;\n  color: #333333 !important;\n  }\n\n  .label-select-menu .labelstyle-e6e6e6.selected {\n  background: rgba(230, 230, 230, 0.12) !important;\n  color: #999999 !important;\n  }\n\n  span.labelstyle-cc317c, .linked-labelstyle-cc317c {\n  background-color: #cc317c !important;\n  color: #fff !important;\n  }\n\n  .labelstyle-cc317c.selected {\n  background-color: #cc317c !important;\n  color: #fff !important;\n  }\n\n  .label-select-menu .labelstyle-cc317c.selected {\n  background: rgba(204, 49, 124, 0.12) !important;\n  color: #99245c !important;\n  }\n\n  span.labelstyle-ffffff, .linked-labelstyle-ffffff {\n  background-color: #ffffff !important;\n  color: #333333 !important;\n  }\n\n  .labelstyle-ffffff.selected {\n  background-color: #ffffff !important;\n  color: #333333 !important;\n  }\n\n  .label-select-menu .labelstyle-ffffff.selected {\n  background: rgba(255, 255, 255, 0.12) !important;\n  color: #999999 !important;\n  }\n</style>\n<form method=\"post\" id=\"new_issue\" class=\"js-new-issue-form\" onsubmit=\"return gira.createIssue()()\"\n      accept-charset=\"UTF-8\" data-issue-id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "number"), env.autoesc);
output += "\">\n\t<div style=\"margin:0;padding:0;display:inline\"></div>\n\t<div class=\"columns discussion-timeline-cols\">\n\t\t<div class=\"column main\">\n\t\t\t<div class=\"discussion-bubble composer\">\n\t\t\t\t<a href=\"https://github.com/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"login", env.autoesc), env.autoesc);
output += "\"><img width=\"48\" height=\"48\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"avatar_url", env.autoesc), env.autoesc);
output += "\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t class=\"discussion-bubble-avatar\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"full_name", env.autoesc), env.autoesc);
output += "\"></a>\n\n\t\t\t\t<div class=\"discussion-bubble-content bubble\">\n\t\t\t\t\t<div class=\"discussion-bubble-inner\">\n\n\t\t\t\t\t\t<div class=\"discussion-topic\">\n\n\n\t\t\t\t\t\t\t<div class=\"discussion-topic-header\">\n\t\t\t\t\t\t\t\t<dl class=\"form\">\n\t\t\t\t\t\t\t\t\t<div class=\"fieldWithErrors\"><label for=\"issue_title\" class=\"discussion-title-label\">Title</label></div>\n\t\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t\t\t\t<div class=\"fieldWithErrors\"><input type=\"text\" tabindex=\"1\" size=\"30\" required=\"required\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Title\" name=\"issue[title]\" id=\"issue_title\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"required title js-auto-save\" autofocus=\"autofocus\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.autoesc);
output += "\"></div>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /.topic-comment-header -->\n\n\n\t\t\t\t\t\t\t<div class=\"composer-infobar js-infobar\">\n\n\t\t\t\t\t\t\t\t<div class=\"assignee infobar-widget\">\n\t\t\t\t\t\t\t\t\t<span class=\"css-truncate text js-assignee-infobar-item-wrapper\">\n\t\t\t\t\t\t\t\t\t\t";
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
output += "\n\t\t\t\t\t\t\t\t\t\tis assigned\n\t\t\t\t\t\t\t\t\t</span>\n\n\n\t\t\t\t\t\t\t\t\t<div class=\"select-menu js-menu-container js-select-menu js-composer-assignee-picker \">\n\t\t\t\t\t\t\t\t\t\t<span aria-label=\"Assign someone to this issue\" role=\"button\"\n                          class=\"minibutton select-menu-button icon-only js-menu-target\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"octicon octicon-gear\"></span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-modal-holder js-menu-content js-navigation-container\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-modal\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"select-menu-title\">Assign someone to this issue</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"octicon octicon-remove-close js-menu-close\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.select-menu-header -->\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-error-shell\"><span class=\"select-menu-error js-select-menu-error\">Sorry, an error occurred</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-filters\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-text-filter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" aria-label=\"Type or choose a name\" placeholder=\"Filter people\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t class=\"js-filterable-field js-navigation-enable\" id=\"assignee-filter-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.select-menu-filters -->\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-list\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div aria-label=\"Clear assignee\" role=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t class=\"select-menu-clear-item select-menu-item js-navigation-item js-clear-assignee js-no-current-assignee\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"\" name=\"issue[assignee]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"select-menu-item-icon octicon octicon-remove-close\"></span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item-text\">Clear assignee</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.select-menu-item -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div role=\"menu\" data-filterable-type=\"fuzzy\" data-filterable-for=\"assignee-filter-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "assignees");
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("assignee", t_4);
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div role=\"menuitem\" class=\"select-menu-item js-navigation-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"login", env.autoesc), env.autoesc);
output += "\" name=\"issue[assignee]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"select-menu-item-icon octicon octicon-check\"></span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item-gravatar js-select-menu-item-gravatar\">\n                                <span class=\"avatar\"><img width=\"20\" height=\"20\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"avatar_url", env.autoesc), env.autoesc);
output += "\"\n                                                          alt=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"login", env.autoesc), env.autoesc);
output += "\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item-text\">\n                                <h4>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"login", env.autoesc), env.autoesc);
output += " <span class=\"description\"></span></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-no-results\">Nothing to show</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.select-menu-list -->\n\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- /.select-menu-modal -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- /.select-menu-modal-holder -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- /.select-menu -->\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"milestone infobar-widget\">\n\t\t\t\t\t\t\t\t\t<span class=\"css-truncate text js-composer-milestone-title\">\n                    ";
if(runtime.contextOrFrameLookup(context, frame, "milestone")) {
output += "\n                    <strong class=\"css-truncate-target\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "milestone")),"title", env.autoesc), env.autoesc);
output += "</strong>\n                    ";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t\t\tNo milestone\n                    ";
;
}
output += "\n\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t<div class=\"select-menu js-menu-container js-select-menu js-composer-milestone-picker ";
if(runtime.contextOrFrameLookup(context, frame, "milestone")) {
output += "is-showing-clear-item";
;
}
output += "\">\n\t\t\t\t\t\t\t\t\t\t<span aria-label=\"Set milestone\" role=\"button\"\n                          class=\"minibutton select-menu-button icon-only js-menu-target\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"octicon octicon-gear\"></span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-modal-holder js-menu-content js-navigation-container\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-modal\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"select-menu-title\">Set milestone</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"octicon octicon-remove-close js-menu-close\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.select-menu-header -->\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-error-shell\"><span class=\"select-menu-error js-select-menu-error\">Sorry, an error occurred</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-filters\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-text-filter\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" autocomplete=\"off\" placeholder=\"Filter milestones\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t class=\"js-filterable-field js-navigation-enable\" id=\"context-milestone-filter-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-tabs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"select-menu-tab\">\n                                <a class=\"js-select-menu-tab\" data-tab-filter=\"tab-open\" href=\"#\">Open</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"select-menu-tab\">\n                                <a class=\"js-select-menu-tab\" data-tab-filter=\"tab-closed\" href=\"#\">Closed</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.select-menu-tabs -->\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.select-menu-filters -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div data-tab-filter=\"tab-open\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t class=\"select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-clear-item select-menu-item js-navigation-item js-clear-milestone\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"\" name=\"milestone\" id=\"milestone_clear\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"select-menu-item-icon octicon octicon-remove-close\"></span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item-text\">Clear this milestone</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.select-menu-item -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div role=\"menu\" data-filterable-type=\"substring\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t data-filterable-for=\"context-milestone-filter-field\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "milestones");
if(t_7) {for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("one_milestone", t_8);
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div role=\"menuitem\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t class=\"select-menu-item js-navigation-item ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "milestone")),"number", env.autoesc) == runtime.memberLookup((t_8),"number", env.autoesc)) {
output += "selected";
;
}
output += "\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"number", env.autoesc), env.autoesc);
output += "\" name=\"milestone\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t id=\"milestone_";
output += runtime.suppressValue(runtime.memberLookup((t_8),"number", env.autoesc), env.autoesc);
output += "\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"select-menu-item-icon octicon octicon-check\"></span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item-text\">\n                                <h4 class=\"js-milestone-title js-select-button-text\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"title", env.autoesc), env.autoesc);
output += "</h4>\n                                ";
if(runtime.memberLookup((t_8),"duo_on", env.autoesc)) {
output += "\n                                <span class=\"description\">Due in ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"due_on", env.autoesc), env.autoesc);
output += " days</span>";
;
}
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.select-menu-item -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"new\" name=\"milestone\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"milestone_title\" class=\"js-new-item-value\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"octicon octicon-milestone select-menu-item-icon\"></span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-item-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Create and assign to new milestone:</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"description js-new-item-name js-milestone-title\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.select-menu-list -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div data-tab-filter=\"tab-closed\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t class=\"select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div role=\"menu\" data-filterable-type=\"substring\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t data-filterable-for=\"context-milestone-filter-field\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"select-menu-no-results\">Nothing to show</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- /.select-menu-list -->\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"fieldWithErrors\"><input type=\"hidden\" name=\"issue[milestone_id]\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"issue_milestone_id\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"new_milestone_title\" id=\"new_milestone_title\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- /.select-menu-modal -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- /.select-menu-modal-holder -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- /.select-menu -->\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t<div class=\"comment-content\">\n\n\t\t\t\t\t\t\t\t<dl class=\"form body\">\n\t\t\t\t\t\t\t\t\t<dd>\n\n\n\t\t\t\t\t\t\t\t\t\t<div data-preview-url=\"#\" class=\"js-previewable-comment-form previewable-comment-form write-selected\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"comment-form-head tabnav\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"tabnav-tabs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"tabnav-tab write-tab js-write-tab selected\" href=\"#write_bucket_\">Write</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a id='jk-preview' class=\"tabnav-tab preview-tab js-preview-tab\" href=\"#preview_bucket_\">Preview</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabnav-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"tabnav-widget text\">Comments are parsed with <a\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t target=\"_blank\" class=\"gfm-help\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t href=\"https://help.github.com/articles/github-flavored-markdown\">GitHub\n                              Flavored Markdown</a></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"display:none\" class=\"comment-form-error js-comment-form-error\"> There was an error creating\n\t\t\t\t\t\t\t\t\t\t\t\tyour Issue:\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div data-model=\"assets\" class=\"write-content upload-enabled is-default\" id=\"write_bucket_\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"enable-fullscreen js-enable-fullscreen tooltipped\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tleftwards \" href=\"#fullscreen_issue_body\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t original-title=\"Zen Mode\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"octicon octicon-screen-full\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea data-suggester=\"_new_preview_suggester\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"comment-form-textarea js-comment-field js-size-to-fit js-quote-selection-target  input-with-fullscreen-icon\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Leave a comment\" id=\"issue_body\" tabindex=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"issue[body]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "body"), env.autoesc);
output += "</textarea>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"drag-and-drop\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tAttach images by \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\"\n                                   class=\"manual-file-chooser js-manual-file-chooser\"\n                                   multiple=\"multiple\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"manual-file-chooser-text\">selecting them</a>.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"loading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"16\" height=\"16\"\n                                 src=\"https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif\"\n                                 alt=\"Octocat-spinner-32\"> Uploading your images…\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error bad-file\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUnfortunately we don't support that file type yet. Please use PNG, GIF, or JPG.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error too-big\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tYowza, that's a big file. Please submit an image file smaller than 5MB.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error bad-browser\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis browser doesn't support image attachments.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error failed-request\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tSomething went really wrong and we can't process that image.\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"preview-content js-preview-bucket\" id=\"preview_bucket_\">\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div data-body-version=\"\" class=\"comment js-comment js-task-list-container\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t id=\"openstruct-70192145241500\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"comment-content\">\n\n                            <div class=\"edit-comment-hide\">\n                              <div class=\"comment-body markdown-body  js-comment-body\">\n                                <p>Nothing to preview</p>\n                              </div>\n                            </div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"suggester-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div data-url=\"/jcouyang/gira/suggestions/issue\" id=\"_new_preview_suggester\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t class=\"suggester js-navigation-container\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t</dl>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /.comment-content -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /.comment -->\n\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /.discussion-bubble-content -->\n\t\t\t\t</div>\n\t\t\t\t<!-- /.discussion-bubble-inner -->\n\n\t\t\t\t<div class=\"form-actions\">\n\n\t\t\t\t\t<button data-disable-with=\"\" data-disable-invalid=\"\" tabindex=\"1\" class=\"button primary\" type=\"submit\">\n\t\t\t\t\t\t";
if(runtime.contextOrFrameLookup(context, frame, "comments")) {
output += "\n\t\t\t\t\t\tSubmit new issues\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\tEdit issues\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- /.discussion-bubble -->\n\n\t\t</div>\n\t\t<div class=\"column sidebar\">\n\n\t\t\t<h3>Add Labels</h3>\n\t\t\t<ul class=\"js-composer-labels color-label-list filter-list small\">\n\n        ";
frame = frame.push();
var t_11 = runtime.contextOrFrameLookup(context, frame, "all_labels");
if(t_11) {for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("one_label", t_12);
output += "\n        <li data-name=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name", env.autoesc), env.autoesc);
output += "\" style=\"";
if(env.getFilter("hasIndex").call(context, runtime.memberLookup((t_12),"name", env.autoesc))) {
output += "display: none;";
;
}
output += "\">\n          <a class=\"filter-item color-label labelstyle-";
output += runtime.suppressValue(runtime.memberLookup((t_12),"color", env.autoesc), env.autoesc);
output += "\" href=\"#\">\n\n            <input type=\"checkbox\" name=\"issue[labels][]\" id=\"issue_labels_";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name", env.autoesc), env.autoesc);
output += "\"\n                   value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name", env.autoesc), env.autoesc);
output += "\" style=\"display: none\">\n            <span style=\"background-color:  #";
output += runtime.suppressValue(runtime.memberLookup((t_12),"color", env.autoesc), env.autoesc);
output += "\" class=\"color\">&nbsp;</span>\n            <span class=\"name\">";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name", env.autoesc), env.autoesc);
output += "</span>\n          </a>\n        </li>\n        ";
;
}
}
frame = frame.pop();
output += "\n\t\t\t</ul>\n\n\t\t</div>\n\n\t</div>\n</form>\n\n<div class=\"discussion-timeline js-quote-selection-container\">\n\n  <div class=\"js-discussion\">\n";
frame = frame.push();
var t_15 = runtime.contextOrFrameLookup(context, frame, "comments");
if(t_15) {for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("comment", t_16);
output += "\n\t\t<div class=\"timeline-comment-wrapper js-comment-container\">\n\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"user", env.autoesc)),"html_url", env.autoesc), env.autoesc);
output += "\"><img width=\"48\" height=\"48\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"user", env.autoesc)),"avatar_url", env.autoesc), env.autoesc);
output += "\" data-user=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"user", env.autoesc)),"id", env.autoesc), env.autoesc);
output += "\" class=\"timeline-comment-avatar js-avatar\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"user", env.autoesc)),"login", env.autoesc), env.autoesc);
output += "\"></a>\n\t\t\t\n\t\t\t<div class=\"timeline-comment timeline-comment-\">\n\t\t\t\t<div data-body-version=\"6a204bd89f3c8348afd5c77c717a097a\" class=\"comment js-comment js-task-list-container is-task-list-enabled\" id=\"issue-27574851\">\n\t\t\t\t\t<div class=\"timeline-comment-header \">\n\n\t\t\t\t\t\t<div class=\"timeline-comment-actions\">\n              <a title=\"Edit comment\" href=\"#\" class=\"octicon octicon-pencil js-comment-edit-button\"></a>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"timeline-comment-header-text\">\n\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t<a class=\"author\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"user", env.autoesc)),"html_url", env.autoesc), env.autoesc);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_16),"user", env.autoesc)),"login", env.autoesc), env.autoesc);
output += "</a>\n\t\t\t\t\t\t\t</strong>\n\n\t\t\t\t\t\t\tcommented\n\n\t\t\t\t\t\t\t<a class=\"timestamp\" href=\"#issue-27574851\"><time title=\"2014-02-14 13:25:51\" datetime=\"2014-02-13T21:25:51-08:00\" data-title-format=\"YYYY-MM-DD HH:mm:ss\" class=\"js-relative-date\">";
output += runtime.suppressValue(runtime.memberLookup((t_16),"updated_at", env.autoesc), env.autoesc);
output += "</time></a>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"comment-content\">\n\t\t\t\t\t\t<p class=\"comment-form-stale\">The content you are editing has changed. Reload the page and try again.</p>\n\n\t\t\t\t\t\t<div class=\"edit-comment-hide\">\n\t\t\t\t\t\t\t<div class=\"comment-body markdown-body markdown-format js-comment-body\">\n\t\t\t\t\t\t\t\t<p>asdfasdf</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"context-loader\">Sending Request…</div>\n\t\t\t\t\t\t<div data-model=\"assets\" class=\"form-content js-write-bucket js-uploadable-container upload-enabled is-default\">\n\t\t\t\t\t\t\t<form method=\"post\" data-type=\"json\" data-remote=\"true\" class=\"js-comment-update\" action=\"/jcouyang/gira/issues/42\" accept-charset=\"UTF-8\"><div style=\"margin:0;padding:0;display:inline\"><input type=\"hidden\" value=\"put\" name=\"_method\"><input type=\"hidden\" value=\"VG0bXXPMQwa2KmA9h/8XIyElcGXy9m0r/JuoLbToBxQ=\" name=\"authenticity_token\"></div>\n\t\t\t\t\t\t\t\t<div class=\"fieldWithErrors\"><textarea tabindex=\"1\" name=\"issue[body]\" id=\"issue-27574851-body\" data-suggester=\"issue_42_suggester\" class=\"comment-form-textarea js-comment-field js-task-list-field js-size-to-fit\">asdfasdf</textarea></div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<p class=\"drag-and-drop\">\n\t\t\t\t\t\t\t\t\t<span class=\"default\">\n\t\t\t\t\t\t\t\t\t\tAttach images by dragging &amp; dropping or\n\t\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"manual-file-chooser js-manual-file-chooser\" multiple=\"multiple\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"manual-file-chooser-text\">selecting them</a>.\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span class=\"loading\">\n\t\t\t\t\t\t\t\t\t\t<img width=\"16\" height=\"16\" src=\"https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif\" alt=\"Octocat-spinner-32\"> Uploading your images…\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span class=\"error bad-file\">\n\t\t\t\t\t\t\t\t\t\tUnfortunately we don't support that file type yet. Please use PNG, GIF, or JPG.\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span class=\"error too-big\">\n\t\t\t\t\t\t\t\t\t\tYowza, that's a big file. Please submit an image file smaller than 5MB.\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span class=\"error bad-browser\">\n\t\t\t\t\t\t\t\t\t\tThis browser doesn't support image attachments.\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span class=\"error failed-request\">\n\t\t\t\t\t\t\t\t\t\tSomething went really wrong and we can't process that image.\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t<div class=\"form-actions\">\n\t\t\t\t\t\t\t\t\t<a data-confirm-text=\"Are you sure you want to cancel? You have unsaved changes that will be reverted.\" class=\"minibutton danger comment-cancel-button js-comment-cancel-button\" href=\"#\">Cancel</a>\n\t\t\t\t\t\t\t\t\t<button data-disable-with=\"\" tabindex=\"1\" class=\"minibutton\" type=\"submit\">Update Comment</button>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"suggester-container\">\n\t\t\t\t\t\t\t\t\t<div data-url=\"/jcouyang/gira/suggestions/issue/27574851\" id=\"issue_42_suggester\" class=\"suggester js-navigation-container\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>        </div>\n\t\t\t\t\t\t<div class=\"comment-form-error comment-form-bottom js-comment-update-error\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<!-- Rendered timeline since 2014-02-13 21:40:03 -->\n\t\t<div data-last-modified=\"Fri, 14 Feb 2014 05:40:03 GMT\" data-url=\"/jcouyang/gira/issues/42/show_partial?partial=timeline_marker&amp;since=1392356403\" data-channel=\"jcouyang/gira:issue:27574851\" class=\"js-socket-channel js-updatable-content\" id=\"js-timeline-marker\">\n\t\t</div>\n\n";
;
}
}
frame = frame.pop();
output += "\n  </div>\n\n  <!-- <div class=\"discussion-timeline-actions\"> -->\n    \n\n\t<!-- \t<div class=\"timeline-comment-wrapper timeline-new-comment js-comment-container\"> -->\n\t<!-- \t\t<a href=\"/jcouyang\"><img width=\"48\" height=\"48\" src=\"https://1.gravatar.com/avatar/e181d174303811fefaefb0b3a91ce567?d=https%3A%2F%2Fidenticons.github.com%2Fc43c54ee18db258c3196d69e4ed12d2f.png&amp;r=x&amp;s=140\" data-user=\"1235045\" class=\"timeline-comment-avatar js-avatar\" alt=\"Jichao Ouyang\"></a> -->\n\n\t<!-- \t\t<form method=\"post\" data-type=\"json\" data-remote=\"true\" class=\"js-new-comment-form\" action=\"/jcouyang/gira/issue_comments\" accept-charset=\"UTF-8\"><div style=\"margin:0;padding:0;display:inline\"><input type=\"hidden\" value=\"VG0bXXPMQwa2KmA9h/8XIyElcGXy9m0r/JuoLbToBxQ=\" name=\"authenticity_token\"></div> -->\n\t<!-- \t\t\t<div class=\"timeline-comment\"> -->\n\t<!-- \t\t\t\t<input type=\"hidden\" value=\"42\" name=\"issue\"> -->\n\t\t\t\t\t\n\n\t<!-- \t\t\t\t<div data-preview-url=\"/preview?repository=15799414\" class=\"js-previewable-comment-form previewable-comment-form write-selected\"> -->\n\t<!-- \t\t\t\t\t<div class=\"comment-form-head tabnav\"> -->\n\t<!-- \t\t\t\t\t\t<ul class=\"tabnav-tabs\"> -->\n\t<!-- \t\t\t\t\t\t\t<li><a class=\"tabnav-tab write-tab js-write-tab selected\" href=\"#write_bucket_653\">Write</a></li> -->\n\t<!-- \t\t\t\t\t\t\t<li><a class=\"tabnav-tab preview-tab js-preview-tab\" href=\"#preview_bucket_653\">Preview</a></li> -->\n\t<!-- \t\t\t\t\t\t</ul> -->\n\t<!-- \t\t\t\t\t\t<span class=\"tabnav-right\"> -->\n\t<!-- \t\t\t\t\t\t\t<span class=\"tabnav-widget text\">Comments are parsed with <a target=\"_blank\" class=\"gfm-help\" href=\"https://help.github.com/articles/github-flavored-markdown\">GitHub Flavored Markdown</a></span> -->\n\t<!-- \t\t\t\t\t\t</span> -->\n\t<!-- \t\t\t\t\t</div> -->\n\n\t<!-- \t\t\t\t\t<div style=\"display:none\" class=\"comment-form-error js-comment-form-error\">    There was an error creating your Issue:  -->\n\t<!-- \t\t\t\t\t</div> -->\n\t<!-- \t\t\t\t\t<div data-model=\"assets\" class=\"write-content js-write-bucket js-uploadable-container upload-enabled is-default\" id=\"write_bucket_653\"> -->\n\t\t\t\t\t\t\t\n\t<!-- \t\t\t\t\t\t<a aria-label=\"Zen Mode\" class=\"enable-fullscreen js-enable-fullscreen tooltipped -->\n\t<!-- \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tleftwards \" href=\"#fullscreen_comment_body_653\" original-title=\"\"> -->\n\t<!-- \t\t\t\t\t\t\t<span class=\"octicon octicon-screen-full\"></span> -->\n\t<!-- \t\t\t\t\t\t</a> -->\n\n\t<!-- \t\t\t\t\t\t<textarea data-suggester=\"653_new_preview_suggester\" class=\"comment-form-textarea js-comment-field js-size-to-fit js-quote-selection-target input-with-fullscreen-icon\" placeholder=\"Leave a comment\" id=\"comment_body_653\" tabindex=\"1\" name=\"comment[body]\"></textarea> -->\n\n\t\t\t\t\t\t\t\n\t<!-- \t\t\t\t\t\t<p class=\"drag-and-drop\"> -->\n\t<!-- \t\t\t\t\t\t\t<span class=\"default\"> -->\n\t<!-- \t\t\t\t\t\t\t\tAttach images by dragging &amp; dropping or -->\n\t<!-- \t\t\t\t\t\t\t\t<input type=\"file\" class=\"manual-file-chooser js-manual-file-chooser\" multiple=\"multiple\"> -->\n\t<!-- \t\t\t\t\t\t\t\t<a href=\"#\" class=\"manual-file-chooser-text\">selecting them</a>. -->\n\t<!-- \t\t\t\t\t\t\t</span> -->\n\t<!-- \t\t\t\t\t\t\t<span class=\"loading\"> -->\n\t<!-- \t\t\t\t\t\t\t\t<img width=\"16\" height=\"16\" src=\"https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif\" alt=\"Octocat-spinner-32\"> Uploading your images… -->\n\t<!-- \t\t\t\t\t\t\t</span> -->\n\t<!-- \t\t\t\t\t\t\t<span class=\"error bad-file\"> -->\n\t<!-- \t\t\t\t\t\t\t\tUnfortunately we don't support that file type yet. Please use PNG, GIF, or JPG. -->\n\t<!-- \t\t\t\t\t\t\t</span> -->\n\t<!-- \t\t\t\t\t\t\t<span class=\"error too-big\"> -->\n\t<!-- \t\t\t\t\t\t\t\tYowza, that's a big file. Please submit an image file smaller than 5MB. -->\n\t<!-- \t\t\t\t\t\t\t</span> -->\n\t<!-- \t\t\t\t\t\t\t<span class=\"error bad-browser\"> -->\n\t<!-- \t\t\t\t\t\t\t\tThis browser doesn't support image attachments. -->\n\t<!-- \t\t\t\t\t\t\t</span> -->\n\t<!-- \t\t\t\t\t\t\t<span class=\"error failed-request\"> -->\n\t<!-- \t\t\t\t\t\t\t\tSomething went really wrong and we can't process that image. -->\n\t<!-- \t\t\t\t\t\t\t</span> -->\n\t<!-- \t\t\t\t\t\t</p> -->\n\n\t<!-- \t\t\t\t\t</div> -->\n\t<!-- \t\t\t\t\t<div class=\"preview-content js-preview-bucket\" id=\"preview_bucket_653\"> -->\n\t\t\t\t\t\t\t\n\n\t<!-- \t\t\t\t\t\t<div data-body-version=\"\" class=\"comment js-comment js-task-list-container\" id=\"openstruct-69992243325700\"> -->\n\n\t<!-- \t\t\t\t\t\t\t<div class=\"comment-content\"> -->\n\n\t<!-- \t\t\t\t\t\t\t\t<div class=\"edit-comment-hide\"> -->\n\t<!-- \t\t\t\t\t\t\t\t\t<div class=\"comment-body markdown-body  js-comment-body\"> -->\n\t<!-- \t\t\t\t\t\t\t\t\t\t<p>Nothing to preview</p> -->\n\t<!-- \t\t\t\t\t\t\t\t\t</div> -->\n\t<!-- \t\t\t\t\t\t\t\t</div> -->\n\n\t<!-- \t\t\t\t\t\t\t</div> -->\n\t<!-- \t\t\t\t\t\t</div> -->\n\n\n\t<!-- \t\t\t\t\t</div> -->\n\n\n\t<!-- \t\t\t\t\t<div class=\"suggester-container\"> -->\n\t<!-- \t\t\t\t\t\t<div data-url=\"/jcouyang/gira/suggestions/issue/27574851\" id=\"653_new_preview_suggester\" class=\"suggester js-navigation-container\"> -->\n\t<!-- \t\t\t\t\t\t</div> -->\n\t<!-- \t\t\t\t\t</div> -->\n\t<!-- \t\t\t\t</div> -->\n\n\t<!-- \t\t\t\t<div class=\"form-actions\"> -->\n\t\t\t\t\t\t\n\t<!-- \t\t\t\t\t<div data-url=\"/jcouyang/gira/issues/42/show_partial?partial=form_actions\" data-channel=\"jcouyang/gira:issue:27574851:state\" class=\"js-socket-channel js-updatable-content\" id=\"js-new-comment-form-actions\"> -->\n\n\n\t\t\t\t\t\t\t\n\t<!-- \t\t\t\t\t\t<button data-disable-with=\"\" tabindex=\"3\" data-comment-text=\"Close &amp; Comment\" data-original-text=\"Close\" class=\"button js-comment-and-button\" value=\"1\" name=\"comment_and_close\" type=\"submit\"> -->\n\t<!-- \t\t\t\t\t\t\tClose -->\n\t<!-- \t\t\t\t\t\t</button> -->\n\n\n\t<!-- \t\t\t\t\t\t<button data-disable-with=\"\" tabindex=\"2\" class=\"button primary\" type=\"submit\"> -->\n\t<!-- \t\t\t\t\t\t\tComment -->\n\t<!-- \t\t\t\t\t\t</button> -->\n\t<!-- \t\t\t\t\t</div> -->\n\n\t<!-- \t\t\t\t</div> -->\n\t<!-- \t\t\t</div> -->\n\t<!-- \t</form></div> -->\n\n  <!-- </div> -->\n</div>\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/error.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"flash-messages\">\n    <div class=\"flash flash-error\">\n        <span class=\"octicon octicon-remove-close close js-flash-close\"></span>\n        ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "message"), env.autoesc);
output += "\n    </div>\n</div>\n";
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
output += "<div class=\"contrib-details grid lala\">\n    ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "issuesWithLabel");
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("issues", t_4);
output += "\n    <div class=\"col\" id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),0, env.autoesc), env.autoesc);
output += "\">\n    <span class=\"num hide-buttons\">";
output += runtime.suppressValue(env.getFilter("title").call(context, env.getFilter("removeIndex").call(context, runtime.memberLookup((t_4),0, env.autoesc))), env.autoesc);
output += "\n      <a class='remove-lane' type=\"button\" data='";
output += runtime.suppressValue(runtime.memberLookup((t_4),0, env.autoesc), env.autoesc);
output += "' href=\"#\">\n          <span class=\"octicon octicon-remove-close close\"></span>\n      </a>\n    </span>\n\t\t<span class=\"lbl\">\n\t\t\t";
frame = frame.push();
var t_7 = runtime.memberLookup((t_4),1, env.autoesc);
if(t_7) {for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("issue", t_8);
output += "\n\t\t\t<div class=\"blankslate hide-buttons\" draggable=\"true\" id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"number", env.autoesc), env.autoesc);
output += "\" data-label=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),0, env.autoesc), env.autoesc);
output += "\">\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"html_url", env.autoesc), env.autoesc);
output += "\" target=\"_blank\" class=\"octicon octicon-link-external link-external right\"></a>\n                <a href=\"#create-new-issue\" rel=\"facebox\" class=\"popable\" data-issue-id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"number", env.autoesc), env.autoesc);
output += "\">\n                    ";
if(runtime.memberLookup((t_8),"assignee", env.autoesc)) {
output += "\n\t\t\t\t\t<span style=\"margin-right: 5px;\" class=\"assignee tooltipped downwards yours right\"\n                          href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"assignee", env.autoesc)),"url", env.autoesc), env.autoesc);
output += "\"\n                          original-title=\"Assigned to ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"assignee", env.autoesc)),"login", env.autoesc), env.autoesc);
output += "\">\n                        <img width=\"16\" height=\"16\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"assignee", env.autoesc)),"avatar_url", env.autoesc), env.autoesc);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"assignee", env.autoesc)),"login", env.autoesc), env.autoesc);
output += "\">\n\t\t\t\t\t</span>\n                    ";
;
}
output += "\n                    <h4 class=\"list-group-item-name\">#";
output += runtime.suppressValue(runtime.memberLookup((t_8),"number", env.autoesc), env.autoesc);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"title", env.autoesc), env.autoesc);
output += "</h4>\n                </a>\n                ";
if(runtime.memberLookup((t_4),0, env.autoesc) == runtime.contextOrFrameLookup(context, frame, "last_label")) {
output += "\n                <a type=\"button\" class=\"close close-issue left\" data-issue=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"number", env.autoesc), env.autoesc);
output += "\" href=\"#\">\n                    <span class=\"octicon octicon-remove-close\"></span>\n                </a>\n                ";
;
}
output += "\n\t\t\t\t\t<span class=\"labels\">\n\t\t\t\t\t\t";
frame = frame.push();
var t_11 = runtime.memberLookup((t_8),"labels", env.autoesc);
if(t_11) {for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("label", t_12);
output += "\n\t\t\t\t\t\t<span class=\"label labelstyle-";
output += runtime.suppressValue(runtime.memberLookup((t_12),"color", env.autoesc), env.autoesc);
output += "\" style=\"background-color:#";
output += runtime.suppressValue(runtime.memberLookup((t_12),"color", env.autoesc), env.autoesc);
output += ";";
if(env.getFilter("hasIndex").call(context, runtime.memberLookup((t_12),"name", env.autoesc))) {
output += "display: none;";
;
}
output += "\"\n                              data-name=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name", env.autoesc), env.autoesc);
output += "\">";
output += runtime.suppressValue(env.getFilter("removeIndex").call(context, runtime.memberLookup((t_12),"name", env.autoesc)), env.autoesc);
output += "</span>\n\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t</span>\n\n\n            </div>\n\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t</span>\n    </div>\n    ";
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
output += "<div class=\"container clearfix\">\n    <a href=\"/\" class=\"header-logo-invertocat tooltipped downwards\" original-title=\"Github Issues Really Awesome\">\n        <span class=\"mega-octicon octicon-octoface\"></span>\n        <span class=\"mega-octicon octicon-issue-reopened\"></span>\n        <img width=\"40\" height=\"40\" align=\"absmiddle\"\n             src=\"https://a248.e.akamai.net/assets.github.com/images/icons/emoji/metal.png\" alt=\":metal:\"\n             title=\":metal:\" class=\"emoji\">\n    </a>\n\n    <ul id=\"user-links\">\n        ";
if(runtime.contextOrFrameLookup(context, frame, "login")) {
output += "\n        <li>\n            <a class=\"name\" href=\"#\">\n                <img width=\"20\" height=\"20\" src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "avatar_url"), env.autoesc);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.autoesc);
output += "\"> ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.autoesc);
output += "\n            </a>\n        </li>\n        <li>\n            <a aria-label=\"Sign out\" id=\"logout\" data-method=\"post\" href=\"#\" class=\"tooltipped downwards\"\n               original-title=\"Sign out\">\n                <span class=\"octicon octicon-log-out\"></span>\n            </a>\n        </li>\n        ";
;
}
else {
output += "\n        <div class=\"header-actions\">\n            <a href=\"https://github.com/login/oauth/authorize?client_id=666dc0b3b994cc362ca2&scope=public_repo,user\"\n               class=\"button primary\" id=\"signin\">Sign in</a>\n        </div>\n        ";
;
}
output += "\n    </ul>\n</div>\n";
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
output += "<a href=\"https://github.com/jcouyang/gira\"><img style=\"position: absolute; top: 0; right: 0; border: 0;z-index:9999\"\n                                                src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png\"\n                                                alt=\"Fork me on GitHub\"></a>\n<div data-pjax-container=\"\" class=\"context-loader-container\" id=\"site-container\">\n    <div class=\"marketing-section marketing-section-signup\">\n        <div class=\"container\">\n            <form method=\"post\" class=\"form-signup-home js-form-signup-home\" autocomplete=\"off\" action=\"/join\"\n                  accept-charset=\"UTF-8\">\n\n\n                <img width=\"320px\"\n                     src=\"https://github-camo.global.ssl.fastly.net/dbf5c065a2351c45eff08176351af29716fe7bec/687474703a2f2f6769746875622d696d616765732e73332e616d617a6f6e6177732e636f6d2f626c6f672f323031312f6973737565732d6e6578742f746e672e706e67\">\n\n                <div style=\"margin: 10px 0px 0px; padding: 0px; display: block;\"></div>\n                <a href=\"https://github.com/login/oauth/authorize?client_id=666dc0b3b994cc362ca2&amp;scope=public_repo,user\"\n                   class=\"button primary button-block\">Sign in GIRA with Github Account</a>\n\n            </form>\n            <h1 class=\"heading\">Github Issues Really Awesome!</h1>\n\n            <p class=\"subheading\">GIRA demonstrates instant Github project visibility by summoning the real power of\n              Github Issues through Github API with JavaScript and Github Pages.</p>\n\t\t\t\t\t\t<p><script id='fbvkkhw'>(function(i){var f,s=document.getElementById(i);f=document.createElement('iframe');f.src='//api.flattr.com/button/view/?uid=jcouyang&button=compact&url='+encodeURIComponent(document.URL);f.title='Flattr';f.height=20;f.width=110;f.style.borderWidth=0;s.parentNode.insertBefore(f,s);})('fbvkkhw');</script></p>\n        </div>\n        <!-- /.container -->\n\n        <div class=\"marketing-section-depth\"></div>\n    </div>\n    <!-- /.jumbotron -->\n\n    <div class=\"marketing-section marketing-benefits\">\n        <div class=\"container\">\n            <div class=\"marketing-header\">\n                <h1>Why GIRA?</h1>\n\n                <p class=\"lead\">Powerful features to make software development management more collaborative.</p>\n            </div>\n            <div class=\"row\">\n                <div class=\"one-third column\">\n                    <div class=\"teaser-icon\">\n                        <span class=\"mega-octicon octicon-cloud-upload\"></span>\n                    </div>\n                    <h3>Safe and FREE</h3>\n\n                    <p>GIRA is build using pure Github API with pure JavaScript witch hosted on Github Pages, so all of\n                        your data is stored right in Github and your browser.</p>\n                </div>\n                <div class=\"one-third column\">\n                    <div class=\"teaser-icon\">\n                        <span class=\"mega-octicon octicon-mark-github\"></span>\n                    </div>\n                    <h3>Github Lightweight Kanban</h3>\n\n                    <p>Fully customizable task board gives developers instant feedback into the status of tasks\n                        thoughout your progress. And Awesome build-in features from Github like Commits + Issues and\n                        Email + Issues.</p>\n                </div>\n                <div class=\"one-third column\">\n                    <div class=\"teaser-icon\">\n                        <span class=\"mega-octicon octicon-milestone\"></span>\n                    </div>\n                    <h3>Github Milestones Support</h3>\n\n                    <p>You've always been able to add labels to an issue or assign someone to the issue, now you can it\n                        to a milestone. See example of twitter bootstrap.</p>\n                </div>\n            </div>\n        </div>\n        <!-- /.container -->\n    </div>\n    <!-- /.marketing-section -->\n\n    <!-- /.marketing-section -->\n\n    <!-- /.marketing-section -->\n    <div class=\"marketing-section marketing-section-enterprise\">\n        <div class=\"container\">\n            <div class=\"marketing-header\">\n                <h1>Bring GIRA right to work.</h1>\n\n                <p class=\"lead\">Try input your username/repo . Or jcouyang/gira for example. Select a milestone and see\n                    what is going on.</p>\n                <dl class=\"form\">\n                    <dd>\n                        <input type=\"text\" placeholder=\"Github username\" class=\"textfield\" name=\"username\"\n                               style=\"background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QsPDhss3LcOZQAAAU5JREFUOMvdkzFLA0EQhd/bO7iIYmklaCUopLAQA6KNaawt9BeIgnUwLHPJRchfEBR7CyGWgiDY2SlIQBT/gDaCoGDudiy8SLwkBiwz1c7y+GZ25i0wnFEqlSZFZKGdi8iiiOR7aU32QkR2c7ncPcljAARAkgckb8IwrGf1fg/oJ8lRAHkR2VDVmOQ8AKjqY1bMHgCGYXhFchnAg6omJGcBXEZRtNoXYK2dMsaMt1qtD9/3p40x5yS9tHICYF1Vn0mOxXH8Uq/Xb389wff9PQDbQRB0t/QNOiPZ1h4B2MoO0fxnYz8dOOcOVbWhqq8kJzzPa3RAXZIkawCenHMjJN/+GiIqlcoFgKKq3pEMAMwAuCa5VK1W3SAfbAIopum+cy5KzwXn3M5AI6XVYlVt1mq1U8/zTlS1CeC9j2+6o1wuz1lrVzpWXLDWTg3pz/0CQnd2Jos49xUAAAAASUVORK5CYII=&quot;); padding-right: 0px; background-repeat: no-repeat; background-attachment: scroll; background-position: right center; cursor: auto;\"\n                               autocomplete=\"off\">\n                    </dd>\n                </dl>\n                <a class=\"button blue\" href=\"#main_content\" id=\"try-gira\">Try GIRA</a><span class=\"lead\">  or  </span><a\n                    class=\"button primary\"\n                    href=\"https://github.com/login/oauth/authorize?client_id=666dc0b3b994cc362ca2&amp;scope=public_repo,user\">Sign\n                In</a>\n            </div>\n\n        </div>\n        <!-- /.container -->\n\n    </div>\n    <div id=\"main_content\" class=\"marketing-section gira-example container\">\n        <div class=\"box box-small\">\n            <div class=\"pagehead repohead\">\n                <div class=\"container\">\n                    <h1></h1>\n                    <a id=\"new-issue\" href=\"#create-new-issue\" rel=\"facebox\" class=\"right button primary popable\">New\n                        Issue</a>\n                    <a id=\"new-label\" href=\"#create-new-label\" rel=\"facebox\" class=\"right button popable\">New Lane</a>\n\n                    <div class=\"sidebar-milestone-widget right\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"box-body\">\n                <div id=\"contributions-calendar\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
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
output += "<div class=\"select-menu is-showing-clear-item js-menu-container js-select-menu\">\n\n  <span class=\"minibutton select-menu-button icon-only js-menu-target\">\n    <span class=\"octicon octicon-gear\"></span>\n  </span>\n\n    <div class=\"select-menu-modal-holder js-menu-content js-milestone-issue-filter js-navigation-container js-select-menu-pane\"\n         data-pjax=\"\" aria-hidden=\"true\" style=\"right:0;\">\n        <div class=\"select-menu-modal\">\n            <div class=\"select-menu-header\">\n                <span class=\"select-menu-title\">Filter issues by milestone</span>\n                <span class=\"octicon octicon-remove-close js-menu-close\"></span>\n            </div>\n            <!-- /.select-menu-header -->\n\n            <div class=\"select-menu-filters\">\n                <div class=\"select-menu-text-filter\">\n                    <input type=\"text\" id=\"issues-list-sidebar-milestones-filter\"\n                           class=\"js-filterable-field js-navigation-enable\" placeholder=\"Filter milestones\">\n                </div>\n            </div>\n            <!-- /.select-menu-filters -->\n\n            <div class=\"select-menu-list\" data-filterable-for=\"issues-list-sidebar-milestones-filter\"\n                 data-filterable-type=\"substring\">\n\n                <a class=\"select-menu-item select-menu-clear-item js-navigation-open js-navigation-item\" href=\"#\"\n                   data-milestone=\"\">\n                    <span class=\"select-menu-item-icon octicon octicon-remove-close\"></span>\n                    <span class=\"select-menu-item-text\" data-milestone=\"\">Clear milestone filter</span>\n                </a> <!-- /.select-menu-item -->\n\n                <!-- <a class=\"select-menu-item js-navigation-open js-navigation-item\" href=\"/jcouyang/gira/issues?milestone=none&amp;page=1&amp;state=open\" data-milestone=\"\"> -->\n                <!--   <span class=\"select-menu-item-icon octicon octicon-check\"></span> -->\n                <!--   <span class=\"select-menu-item-text js-select-button-text\" data-milestone=\"\">Issues with no milestone</span> -->\n                <!-- </a> <\\!-- /.select-menu-item -\\-> -->\n                ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "milestones");
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("milestone", t_4);
output += "\n                <a class=\"select-menu-item js-navigation-item js-navigation-open ";
output += runtime.suppressValue((runtime.memberLookup((t_4),"number", env.autoesc) == runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "selected")),"number", env.autoesc)?" selected":""), env.autoesc);
output += " last-visible\" href=\"#\" data-milestone=";
output += runtime.suppressValue(runtime.memberLookup((t_4),"number", env.autoesc), env.autoesc);
output += ">\n                <span class=\"select-menu-item-icon octicon octicon-check\"></span>\n          <span class=\"select-menu-item-text \" data-milestone=\"2\">\n            <h4>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title", env.autoesc), env.autoesc);
output += "</h4>\n\t\t\t\t\t\t";
if(runtime.memberLookup((t_4),"due_on", env.autoesc)) {
output += "\n            <span class=\"description\">Due in ";
output += runtime.suppressValue(env.getFilter("dayFromNow").call(context, runtime.memberLookup((t_4),"due_on", env.autoesc)), env.autoesc);
output += " days</span>\n\t\t\t\t\t\t";
;
}
output += "\n          </span>\n                </a> <!-- /.select-menu-item -->\n                ";
;
}
}
frame = frame.pop();
output += "\n                <div class=\"select-menu-no-results js-not-filterable\">Nothing to show</div>\n            </div>\n            <!-- /.select-menu-list -->\n        </div>\n        <!-- /.select-menu-modal -->\n    </div>\n    <!-- /.select-menu-modal-holder -->\n</div> <!-- /.select-menu -->\n\n";
if(runtime.contextOrFrameLookup(context, frame, "selected")) {
output += "\n<div class=\"info\">\n    <div class=\"info-main\">\n        Milestone: <span class=\"css-truncate css-truncate-target\"><span class=\"title\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "selected")),"title", env.autoesc), env.autoesc);
output += "</span>\n  </span></div>\n    <span class=\"progress-bar\" style=\"padding-top: 0px; margin-top: 0px;\"><span class=\"progress\"\n                                                                                style=\"width: ";
output += runtime.suppressValue(100 / (1 + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "selected")),"open_issues", env.autoesc) / runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "selected")),"closed_issues", env.autoesc)), env.autoesc);
output += "%\">&nbsp;</span></span>\n\n    <div class=\"info-secondary right\">\n        <span class=\"open\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "selected")),"open_issues", env.autoesc), env.autoesc);
output += " open issues</span>\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "selected")),"due_on", env.autoesc)) {
output += "\n        <span class=\"due\"> · Due in ";
output += runtime.suppressValue(env.getFilter("dayFromNow").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "selected")),"due_on", env.autoesc)), env.autoesc);
output += " days</span>\n        ";
;
}
output += "\n    </div>\n</div>\n";
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
output += "\" target=\"_blank\">public <span\n            class=\"octicon octicon-link-external\"></a></span>\n</span>\n<span class=\"mega-octicon octicon-repo\"></span> <span class=\"author\">\n\t";
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
output += "\n\t<div class=\"repo-selector js-repo-selector \">\n\n        <div class=\"repo-entry-form\">\n            <div class=\"entry-content\">\n\n                <div class=\"select-menu owner-select-menu js-menu-container js-select-menu js-owner-container js-owner-select\">\n\t\t\t\t\t<span class=\"minibutton select-menu-button js-menu-target\">\n\t\t\t\t\t\t<span class=\"js-select-button\">\n              ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "checked"), env.autoesc);
output += "\n            </span>\n\t\t\t\t\t</span>\n\n                    <div aria-hidden=\"true\" class=\"select-menu-modal-holder js-menu-content js-navigation-container\">\n                        <div class=\"select-menu-modal\">\n                            <div class=\"select-menu-header\">\n                                <span class=\"select-menu-title\">Choose another owner</span>\n                                <span class=\"octicon octicon-remove-close js-menu-close\"></span>\n                            </div>\n                            <!-- /.select-menu-header -->\n                            <div class=\"select-menu-list\">\n                                ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "owners");
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("owner", t_4);
output += "\n                                <div class=\"select-menu-item js-navigation-item ";
output += runtime.suppressValue((runtime.memberLookup((t_4),"login", env.autoesc) == runtime.contextOrFrameLookup(context, frame, "checked")?" selected\n                                ":""), env.autoesc);
output += "\">\n                                <input type=\"radio\" checked=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"login", env.autoesc) == runtime.contextOrFrameLookup(context, frame, "checked"), env.autoesc);
output += "\" id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"login", env.autoesc), env.autoesc);
output += "\"\n                                       name=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"login", env.autoesc), env.autoesc);
output += "\" value=\"hubot\">\n                                <span class=\"select-menu-item-icon octicon octicon-check\"></span>\n\n                                <div class=\"select-menu-item-gravatar js-select-menu-item-gravatar\">\n                                    <img width=\"20\" height=\"20\" alt=\"hubot\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"avatar_url", env.autoesc), env.autoesc);
output += "\">\n                                </div>\n                                <div class=\"select-menu-item-text js-select-button-text\">\n                                    ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"login", env.autoesc), env.autoesc);
output += "\n                                </div>\n                            </div>\n                            <!-- /.select-menu-item -->\n                            ";
;
}
}
frame = frame.pop();
output += "\n                        </div>\n                        <!-- /.select-menu-list -->\n                    </div>\n                    <!-- /.select-menu-modal -->\n                </div>\n                <!-- /.select-menu-modal-holder -->\n            </div>\n            <!-- /.select-menu -->\n\n            <div class=\"nwo-slash\">/</div>\n\n            <div class=\"target-repo-menu select-menu js-menu-container js-select-menu js-target-repo-menu owner-is-active\"\n                 data-owner=\"hubot\">\n\t\t\t\t\t<span class=\"minibutton select-menu-button js-menu-target\">\n\t\t\t\t\t\t<span class=\"js-select-button\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "checkedRepo"), env.autoesc);
output += "</span>\n\t\t\t\t\t</span>\n\n                <div aria-hidden=\"true\" class=\"select-menu-modal-holder js-menu-content js-navigation-container\">\n                    <div class=\"select-menu-modal\">\n                        <div class=\"select-menu-header\">\n                            <span class=\"select-menu-title\">Choose repository</span>\n                            <span class=\"octicon octicon-remove-close js-menu-close\"></span>\n                        </div>\n                        <!-- /.select-menu-header -->\n                        <div class=\"select-menu-list\">\n                            ";
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "repos");
if(t_7) {for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("repo", t_8);
output += "\n                            <div class=\"select-menu-item js-navigation-item ";
output += runtime.suppressValue((runtime.memberLookup((t_8),"name", env.autoesc) == runtime.contextOrFrameLookup(context, frame, "checkedRepo")?" selected\n                            ":""), env.autoesc);
output += "\">\n                            <input type=\"radio\" id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id", env.autoesc), env.autoesc);
output += "\" name=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"name", env.autoesc), env.autoesc);
output += "\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"full_name", env.autoesc), env.autoesc);
output += "\"\n                                   checked=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"name", env.autoesc) == runtime.contextOrFrameLookup(context, frame, "checkedRepo"), env.autoesc);
output += "\"/>\n                            <span class=\"select-menu-item-icon octicon octicon-check\"></span>\n\n                            <div class=\"select-menu-item-text js-select-button-text\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"name", env.autoesc), env.autoesc);
output += "</div>\n                        </div>\n                        <!-- /.select-menu-item -->\n                        ";
;
}
}
frame = frame.pop();
output += "\n                    </div>\n                    <!-- /.select-menu-list -->\n                </div>\n                <!-- /.select-menu-modal -->\n            </div>\n            <!-- /.select-menu-modal-holder -->\n        </div>\n        <!-- /.select-menu -->\n    </div>\n    </div>\n    </div>\n    ";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/show-diagram.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<html><head>\n    <meta charset=\"utf-8\">\n    <title>GitHub Burndown Chart</title>\n\n    <link href=\"stylesheets/app.bundle.min.css\" media=\"all\" rel=\"stylesheet\" type=\"text/css\">\n    <script src=\"javascripts/app.bundle.min.js\"></script>\n    <script>\n        document.onreadystatechange = function() {\n            if (document.readyState == \"complete\") {\n                require('ghbc').call(null);\n            }\n        };\n    </script>\n</head>\n<body><div class=\"box\">\n    <h1>Testing milestone@jcouyang/gira</h1>\n\n    <p class=\"description\">And <em>here</em> goes <strong>some</strong> description</p>\n\n    <div id=\"graph\">\n        <div id=\"tooltip\"></div>\n        <div id=\"svg\"><svg width=\"636\" height=\"200\"><g transform=\"translate(50,30)\"><g class=\"x axis day\" transform=\"translate(0,130)\"><g class=\"tick\" transform=\"translate(53.353846153846156,0)\" style=\"opacity: 1;\"><line y2=\"-130\" x2=\"0\"></line><text y=\"10\" x=\"0\" dy=\".71em\" style=\"text-anchor: middle;\">29</text></g><g class=\"tick\" transform=\"translate(177.84615384615387,0)\" style=\"opacity: 1;\"><line y2=\"-130\" x2=\"0\"></line><text y=\"10\" x=\"0\" dy=\".71em\" style=\"text-anchor: middle;\">5</text></g><g class=\"tick\" transform=\"translate(302.33846153846156,0)\" style=\"opacity: 1;\"><line y2=\"-130\" x2=\"0\"></line><text y=\"10\" x=\"0\" dy=\".71em\" style=\"text-anchor: middle;\">12</text></g><g class=\"tick\" transform=\"translate(426.83076923076925,0)\" style=\"opacity: 1;\"><line y2=\"-130\" x2=\"0\"></line><text y=\"10\" x=\"0\" dy=\".71em\" style=\"text-anchor: middle;\">19</text></g><g class=\"tick\" transform=\"translate(551.323076923077,0)\" style=\"opacity: 1;\"><line y2=\"-130\" x2=\"0\"></line><text y=\"10\" x=\"0\" dy=\".71em\" style=\"text-anchor: middle;\">26</text></g><g class=\"tick\" transform=\"translate(675.8153846153847,0)\" style=\"opacity: 1;\"><line y2=\"-130\" x2=\"0\"></line><text y=\"10\" x=\"0\" dy=\".71em\" style=\"text-anchor: middle;\">2</text></g><g class=\"tick\" transform=\"translate(800.3076923076923,0)\" style=\"opacity: 1;\"><line y2=\"-130\" x2=\"0\"></line><text y=\"10\" x=\"0\" dy=\".71em\" style=\"text-anchor: middle;\">9</text></g><g class=\"tick\" transform=\"translate(924.8000000000001,0)\" style=\"opacity: 1;\"><line y2=\"-130\" x2=\"0\"></line><text y=\"10\" x=\"0\" dy=\".71em\" style=\"text-anchor: middle;\">16</text></g><g class=\"tick\" transform=\"translate(1049.2923076923078,0)\" style=\"opacity: 1;\"><line y2=\"-130\" x2=\"0\"></line><text y=\"10\" x=\"0\" dy=\".71em\" style=\"text-anchor: middle;\">23</text></g><path class=\"domain\" d=\"M0,-130V0H1156V-130\"></path></g><g class=\"x axis month\" transform=\"translate(0,130)\"><g class=\"tick\" transform=\"translate(106.70769230769231,0)\" style=\"opacity: 1;\"><line y2=\"-130\" x2=\"0\"></line><text y=\"-140\" x=\"0\" dy=\"0em\" style=\"text-anchor: middle;\">Jan</text></g><g class=\"tick\" transform=\"translate(658.0307692307692,0)\" style=\"opacity: 1;\"><line y2=\"-130\" x2=\"0\"></line><text y=\"-140\" x=\"0\" dy=\"0em\" style=\"text-anchor: middle;\">Feb</text></g><g class=\"tick\" transform=\"translate(1156,0)\" style=\"opacity: 1;\"><line y2=\"-130\" x2=\"0\"></line><text y=\"-140\" x=\"0\" dy=\"0em\" style=\"text-anchor: middle;\">Mar</text></g><path class=\"domain\" d=\"M0,-130V0H1156V-130\"></path></g><g class=\"y axis\"><g class=\"tick\" transform=\"translate(0,130)\" style=\"opacity: 1;\"><line x2=\"1156\" y2=\"0\"></line><text x=\"-10\" y=\"0\" dy=\".32em\" style=\"text-anchor: end;\">0</text></g><g class=\"tick\" transform=\"translate(0,104)\" style=\"opacity: 1;\"><line x2=\"1156\" y2=\"0\"></line><text x=\"-10\" y=\"0\" dy=\".32em\" style=\"text-anchor: end;\">10</text></g><g class=\"tick\" transform=\"translate(0,78)\" style=\"opacity: 1;\"><line x2=\"1156\" y2=\"0\"></line><text x=\"-10\" y=\"0\" dy=\".32em\" style=\"text-anchor: end;\">20</text></g><g class=\"tick\" transform=\"translate(0,52)\" style=\"opacity: 1;\"><line x2=\"1156\" y2=\"0\"></line><text x=\"-10\" y=\"0\" dy=\".32em\" style=\"text-anchor: end;\">30</text></g><g class=\"tick\" transform=\"translate(0,26)\" style=\"opacity: 1;\"><line x2=\"1156\" y2=\"0\"></line><text x=\"-10\" y=\"0\" dy=\".32em\" style=\"text-anchor: end;\">40</text></g><g class=\"tick\" transform=\"translate(0,0)\" style=\"opacity: 1;\"><line x2=\"1156\" y2=\"0\"></line><text x=\"-10\" y=\"0\" dy=\".32em\" style=\"text-anchor: end;\">50</text></g><path class=\"domain\" d=\"M1156,0H0V130H1156\"></path></g><line class=\"today\" x1=\"899.4674213518518\" y1=\"0\" x2=\"899.4674213518518\" y2=\"130\"></line><path class=\"ideal line\" d=\"M0,10.399999999999991L2.9641025641025642,10.706666666666656C5.9282051282051285,11.013333333333321,11.856410256410257,11.62666666666665,17.784615384615385,12.239999999999982C23.712820512820514,12.853333333333314,29.641025641025642,13.466666666666649,35.56923076923077,14.07999999999998C41.4974358974359,14.693333333333314,47.42564102564103,15.306666666666644,53.353846153846156,15.919999999999973C59.282051282051285,16.533333333333303,65.21025641025642,17.146666666666633,71.13846153846154,17.759999999999966C77.06666666666666,18.373333333333296,82.9948717948718,18.98666666666663,88.92307692307693,19.599999999999962C94.85128205128206,20.213333333333296,100.77948717948718,20.826666666666625,106.70769230769231,21.439999999999955C112.63589743589745,22.053333333333285,118.56410256410257,22.666666666666615,124.49230769230769,23.279999999999944C130.42051282051284,23.893333333333274,136.34871794871796,24.5066666666666,142.27692307692308,25.119999999999933C148.2051282051282,25.733333333333263,154.13333333333333,26.3466666666666,160.06153846153848,26.959999999999933C165.9897435897436,27.573333333333267,171.91794871794872,28.186666666666596,177.84615384615387,28.799999999999923C183.77435897435896,29.413333333333256,189.7025641025641,30.026666666666586,195.6307692307692,30.639999999999915C201.55897435897435,31.25333333333325,207.4871794871795,31.866666666666582,213.41538461538462,32.47999999999992C219.34358974358975,33.09333333333325,225.27179487179487,33.70666666666658,231.20000000000002,34.31999999999991C237.12820512820514,34.93333333333324,243.05641025641026,35.546666666666574,248.98461538461538,36.159999999999904C254.91282051282053,36.77333333333324,260.8410256410256,37.38666666666657,266.7692307692308,37.9999999999999C272.69743589743587,38.61333333333323,278.625641025641,39.22666666666657,284.55384615384617,39.839999999999904C290.4820512820513,40.453333333333234,296.4102564102564,41.06666666666656,302.33846153846156,41.67999999999989C308.26666666666665,42.29333333333322,314.1948717948718,42.90666666666655,320.12307692307695,43.51999999999988C326.0512820512821,44.13333333333321,331.9794871794872,44.74666666666655,337.90769230769234,45.359999999999886C343.83589743589744,45.973333333333215,349.7641025641026,46.586666666666545,355.6923076923077,47.199999999999875C361.62051282051283,47.813333333333205,367.5487179487179,48.42666666666654,373.4769230769231,49.03999999999988C379.4051282051282,49.65333333333321,385.3333333333333,50.26666666666654,391.2615384615384,50.879999999999875C397.18974358974356,51.49333333333321,403.1179487179487,52.10666666666655,409.04615384615386,52.71999999999988C414.97435897435895,53.333333333333215,420.9025641025641,53.94666666666655,426.8307692307692,54.55999999999989C432.75897435897434,55.17333333333322,438.6871794871795,55.78666666666655,444.6153846153846,56.399999999999885C450.54358974358973,57.01333333333322,456.4717948717948,57.62666666666656,462.4,58.23999999999989C468.3282051282051,58.853333333333225,474.2564102564103,59.46666666666656,480.1846153846154,60.0799999999999C486.1128205128206,60.69333333333323,492.04102564102567,61.30666666666656,497.96923076923076,61.919999999999895C503.8974358974359,62.53333333333323,509.82564102564106,63.14666666666657,515.7538461538462,63.7599999999999C521.6820512820512,64.37333333333324,527.6102564102564,64.98666666666657,533.5384615384615,65.5999999999999C539.4666666666667,66.21333333333322,545.3948717948718,66.82666666666657,551.323076923077,67.43999999999991C557.251282051282,68.05333333333324,563.1794871794872,68.66666666666657,569.1076923076923,69.27999999999992C575.0358974358974,69.89333333333325,580.9641025641025,70.50666666666658,586.8923076923077,71.11999999999992C592.8205128205127,71.73333333333325,598.748717948718,72.34666666666658,604.676923076923,72.95999999999992C610.6051282051282,73.57333333333325,616.5333333333333,74.18666666666658,622.4615384615385,74.79999999999993C628.3897435897436,75.41333333333326,634.3179487179488,76.02666666666659,640.2461538461539,76.63999999999992C646.1743589743589,77.25333333333325,652.1025641025641,77.86666666666659,658.0307692307692,78.47999999999992C663.9589743589744,79.09333333333325,669.8871794871795,79.70666666666658,675.8153846153847,80.31999999999991C681.7435897435898,80.93333333333325,687.6717948717949,81.5466666666666,693.5999999999999,82.15999999999993C699.5282051282052,82.77333333333326,705.4564102564102,83.3866666666666,711.3846153846155,83.99999999999993C717.3128205128205,84.61333333333326,723.2410256410255,85.2266666666666,729.1692307692307,85.83999999999995C735.0974358974358,86.45333333333328,741.025641025641,87.0666666666666,746.9538461538461,87.67999999999995C752.8820512820512,88.29333333333328,758.8102564102563,88.90666666666661,764.7384615384615,89.51999999999994C770.6666666666665,90.13333333333327,776.5948717948718,90.7466666666666,782.5230769230768,91.35999999999993C788.451282051282,91.97333333333326,794.3794871794871,92.58666666666659,800.3076923076922,93.19999999999993C806.2358974358973,93.81333333333326,812.1641025641024,94.42666666666659,818.0923076923076,95.03999999999994C824.0205128205127,95.65333333333326,829.9487179487179,96.2666666666666,835.876923076923,96.87999999999992C841.8051282051282,97.49333333333325,847.7333333333333,98.10666666666658,853.6615384615385,98.71999999999991C859.5897435897436,99.33333333333324,865.5179487179487,99.94666666666657,871.4461538461537,100.5599999999999C877.374358974359,101.17333333333323,883.302564102564,101.78666666666658,889.2307692307693,102.3999999999999C895.1589743589743,103.01333333333325,901.0871794871794,103.62666666666658,907.0153846153845,104.23999999999992C912.9435897435897,104.85333333333325,918.8717948717948,105.46666666666658,924.8,106.07999999999991C930.7282051282051,106.69333333333324,936.6564102564103,107.30666666666657,942.5846153846154,107.9199999999999C948.5128205128206,108.53333333333325,954.4410256410257,109.14666666666658,960.3692307692307,109.7599999999999C966.2974358974359,110.37333333333325,972.225641025641,110.9866666666666,978.1538461538462,111.59999999999992C984.0820512820512,112.21333333333325,990.0102564102565,112.82666666666658,995.9384615384615,113.43999999999991C1001.8666666666667,114.05333333333324,1007.7948717948718,114.66666666666657,1013.7230769230769,115.2799999999999C1019.651282051282,115.89333333333323,1025.5794871794872,116.50666666666658,1031.5076923076922,117.11999999999992C1037.4358974358975,117.73333333333325,1043.3641025641027,118.34666666666658,1049.2923076923078,118.95999999999992C1055.2205128205128,119.57333333333325,1061.148717948718,120.18666666666658,1067.076923076923,120.79999999999991C1073.0051282051281,121.41333333333324,1078.9333333333332,122.02666666666657,1084.8615384615384,122.63999999999992C1090.7897435897435,123.25333333333325,1096.7179487179487,123.86666666666657,1102.6461538461538,124.4799999999999C1108.574358974359,125.09333333333325,1114.502564102564,125.70666666666659,1120.4307692307693,126.31999999999992C1126.3589743589744,126.93333333333325,1132.2871794871794,127.54666666666658,1138.2153846153847,128.1599999999999C1144.1435897435897,128.77333333333326,1150.0717948717947,129.38666666666657,1153.0358974358974,129.69333333333324L1156,129.99999999999991\"></path><path class=\"trendline line\" d=\"M22.921981481481485,31.942231888115856L1150.071794871795,149.12356969679843\"></path><path class=\"actual line\" d=\"M22.921981481481485,10.399999999999991L22.929185897435897,18.200000000000003L41.59171082621083,31.200000000000003L85.83855769230769,33.8L123.02672364672365,46.8L193.42662962962962,54.60000000000001L244.6990170940171,67.6L303.77893304843303,70.19999999999999L390.42253276353273,72.8L404.94931125356123,75.4L425.31969444444445,78L445.1577742165242,80.6L462.43375783475784,83.2L493.9452556980057,85.8L529.0822215099715,88.4L547.417665954416,91L570.5230512820513,93.6L601.8110064102564,96.19999999999999L646.3369729344729,98.8L671.6479387464387,101.4L768.8593874643875,104L797.9290000000001,106.6L830.7191787749289,109.2L849.3522685185185,111.8\"></path><a xlink:href=\"https://github.com/radekstepan/disposable/issues/7\" xlink:show=\"new\"><circle cx=\"22.929185897435897\" cy=\"18.200000000000003\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/31\" xlink:show=\"new\"><circle cx=\"41.59171082621083\" cy=\"31.200000000000003\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/32\" xlink:show=\"new\"><circle cx=\"85.83855769230769\" cy=\"33.8\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/28\" xlink:show=\"new\"><circle cx=\"123.02672364672365\" cy=\"46.8\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/4\" xlink:show=\"new\"><circle cx=\"193.42662962962962\" cy=\"54.60000000000001\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/5\" xlink:show=\"new\"><circle cx=\"244.6990170940171\" cy=\"67.6\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/29\" xlink:show=\"new\"><circle cx=\"303.77893304843303\" cy=\"70.19999999999999\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/25\" xlink:show=\"new\"><circle cx=\"390.42253276353273\" cy=\"72.8\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/20\" xlink:show=\"new\"><circle cx=\"404.94931125356123\" cy=\"75.4\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/30\" xlink:show=\"new\"><circle cx=\"425.31969444444445\" cy=\"78\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/22\" xlink:show=\"new\"><circle cx=\"445.1577742165242\" cy=\"80.6\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/21\" xlink:show=\"new\"><circle cx=\"462.43375783475784\" cy=\"83.2\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/24\" xlink:show=\"new\"><circle cx=\"493.9452556980057\" cy=\"85.8\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/18\" xlink:show=\"new\"><circle cx=\"529.0822215099715\" cy=\"88.4\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/3\" xlink:show=\"new\"><circle cx=\"547.417665954416\" cy=\"91\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/17\" xlink:show=\"new\"><circle cx=\"570.5230512820513\" cy=\"93.6\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/27\" xlink:show=\"new\"><circle cx=\"601.8110064102564\" cy=\"96.19999999999999\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/15\" xlink:show=\"new\"><circle cx=\"646.3369729344729\" cy=\"98.8\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/10\" xlink:show=\"new\"><circle cx=\"671.6479387464387\" cy=\"101.4\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/14\" xlink:show=\"new\"><circle cx=\"768.8593874643875\" cy=\"104\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/16\" xlink:show=\"new\"><circle cx=\"797.9290000000001\" cy=\"106.6\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/19\" xlink:show=\"new\"><circle cx=\"830.7191787749289\" cy=\"109.2\" r=\"5\"></circle></a><a xlink:href=\"https://github.com/radekstepan/disposable/issues/11\" xlink:show=\"new\"><circle cx=\"849.3522685185185\" cy=\"111.8\" r=\"5\"></circle></a></g></svg></div>\n    </div>\n    <div id=\"progress\"><div class=\"bars\">\n\n        <div class=\"closed\" style=\"width:84.78260869565217%\"></div>\n\n        <div class=\"opened\"></div>\n    </div>\n        <h2 class=\"closed\">Closed / 84%</h2>\n        <h2 class=\"opened\">Open / 16%</h2></div>\n</div><div class=\"d3-tip n\" style=\"position: absolute; opacity: 0; pointer-events: none; top: 238.60000610351563px; left: 361.69903564453125px;\">#5: fsdfsdf</div><div class=\"d3-tip n\" style=\"position: absolute; opacity: 0; pointer-events: none; top: 256.79998779296875px; left: 478.94525146484375px;\">#24: Access child DOM in an iframe from parent on the smae domain</div></body></html>";
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
