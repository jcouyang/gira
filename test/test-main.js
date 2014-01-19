var main = require("./main");
var { MatchPattern } = require("sdk/util/match-pattern");
var pattern = new MatchPattern(/.*github\.com\/.*(issues|milestones).*/);

exports["test url pattern"] = function(assert) {

  assert.pass(pattern.test("https://github.com/jcouyang/gira/issues"));
};
exports["test url pattern milestones"] = function(assert) {
	
  assert.pass(pattern.test("https://github.com/jcouyang/gira/milestones"));
};

exports["test main async"] = function(assert, done) {
  assert.pass("async Unit test running!");
  done();
};

require("sdk/test").run(exports);
