(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["gira/templates/gira.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<style media=\"screen\" type=\"text/css\">\n#contributions-calendar .contrib-details span.lbl div.blankslate {\n    border-left: 1px solid #DDD;\nmargin:5px;\nmax-width:300px;\nmin-width:250px;\n}\n</style>\n<div class=\"box box-small\">\n  <div class=\"box-header\">\n    <h3 class=\"box-title\">GIRA</h3>\n  </div>\n  <div class=\"box-body\">\n    <div id=\"contributions-calendar\">\n      <div class=\"contrib-details grid\">\n\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "milestones");
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("milestone", t_4);
output += "\n        <div class=\"col\" id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id", env.autoesc), env.autoesc);
output += "\">\n          <span class=\"num\"\n\t\t\t\t\t\t\t\tid=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id", env.autoesc), env.autoesc);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title", env.autoesc), env.autoesc);
output += "</span>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description", env.autoesc), env.autoesc);
output += "\n\t\t\t\t\t<span class=\"lbl\">\n\t\t\t\t\t";
frame = frame.push();
var t_7 = runtime.memberLookup((t_4),"issues", env.autoesc);
if(t_7) {for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("issue", t_8);
output += "\n\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"html_url", env.autoesc), env.autoesc);
output += "\" id=\"issue-";
output += runtime.suppressValue(runtime.memberLookup((t_8),"number", env.autoesc), env.autoesc);
output += "\">\n\t\t\t\t\t\t\t<div class=\"blankslate\">\n\t\t\t\t\t\t\t\t<h4 class=\"list-group-item-name\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"title", env.autoesc), env.autoesc);
output += "</h4>\n\t\t\t\t\t\t\t\t<p>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"body", env.autoesc), env.autoesc);
output += "</p>\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((t_8),"assignee", env.autoesc)) {
output += "\n\t\t\t\t\t\t\t\t<span href=\"/";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"assignee", env.autoesc)),"login", env.autoesc), env.autoesc);
output += "\" class=\"avatar\ttooltipped downwards\" original-title=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"assignee", env.autoesc)),"login", env.autoesc), env.autoesc);
output += "\"><img width=\"24\"\theight=\"24\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"assignee", env.autoesc)),"avatar_url", env.autoesc), env.autoesc);
output += "\"></span>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t<span class=\"labels\">\n\t\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_11 = runtime.memberLookup((t_8),"labels", env.autoesc);
if(t_11) {for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("label", t_12);
output += "\n\t\t\t\t\t\t\t\t\t<span class=\"label labelstyle-";
output += runtime.suppressValue(runtime.memberLookup((t_12),"color", env.autoesc), env.autoesc);
output += "\"\n\t\t\t\t\t\t\t\t\t\t\t\tdata-name=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name", env.autoesc), env.autoesc);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name", env.autoesc), env.autoesc);
output += "</span>\n\t\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t</span>\n        </div>\n\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n      </div>\n    </div>\n  </div>\n</div>\n";
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
