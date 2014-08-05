jest.dontMock('../src/issue-board')
jest.dontMock('ramda')
jest.dontMock('fs')
jest.dontMock('jquery')
// jest.dontMock('../src/issue-column')

var fs = require('fs');
var r = require('ramda')
var $ = require('jquery')
describe('IssueColumn', function(){
	var React = require('react/addons');
	var $ = require('jquery');
	var IssueBoard = require('../src/issue-board');
	var IssueColumn = require('../src/issue-column')
	var TestUtils = React.addons.TestUtils;
	var g = jest.genMockFn();
	g.getLabels = jest.genMockFn();
	g.getIssues = jest.genMockFn();
	var labels = JSON.parse(fs.readFileSync('tests/data/labels.json'));
	var issues = JSON.parse(fs.readFileSync('tests/data/issues.json'));
	g.getIssues.mockReturnValue($.Deferred().resolve(issues))
	g.getLabels.mockReturnValue($.Deferred().resolve(labels))
	it('render board', function(){
		
		 var issueBoard = TestUtils.renderIntoDocument(
		 	<IssueBoard g={g} owner="hehe" repo="hoho"/>
		)
		 var issueElement = TestUtils.findRenderedComponentWithType(issueBoard, IssueBoard);
		expect(issueElement.getDOMNode().querySelector("#contributions-calendar")).not.toBeUndefined()
	})

})
