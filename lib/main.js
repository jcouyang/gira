// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");
var data = self.data;
// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: /.*github\.com\/.*issues.*/,
	contentScriptFile: [data.url("jquery-1.10.2.min.js"),
											data.url("handlebars-v1.3.0.js"),
											data.url("gira.js")],
	onAttach: function(worker){
		worker.port.emit("loadTemplate",data.load('gira.handlebars'));
	}
});
