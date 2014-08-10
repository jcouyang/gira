jest.dontMock('../src/issue-board')
jest.dontMock('ramda')
jest.dontMock('fs')
jest.dontMock('jquery')
// jest.dontMock('../src/issue-column')

var fs = require('fs');
var r = require('ramda')
var $ = require('jquery')
describe('IssueBoard', function(){
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
		expect(issueElement.state.groupedIssues['0-Backlog'].length).toBe(1)
		expect(issueElement.state.groupedIssues['1-Ready'].length).toBe(1)

	})

	it('get all the column', function(){
		var issueBoard = TestUtils.renderIntoDocument(
		 	<IssueBoard g={g} owner="hehe" repo="hoho"/>
		)
		var issueElement = TestUtils.findRenderedComponentWithType(issueBoard, IssueBoard);
		expect(issueElement.state.columns).toEqual(['0-Backlog','0-Backlog','1-Ready','2-Working','3-done'])
	})

	it('add filter if creteria has filter', function(){
		var issueBoard = TestUtils.renderIntoDocument(
		 	<IssueBoard g={g} owner="hehe" repo="hoho"/>
		)
		var issueElement = TestUtils.findRenderedComponentWithType(issueBoard, IssueBoard);
		issueElement.handleFilterSubmit("state:close")
		expect(issueElement.state.filter).toEqual({state:"close"})
		expect(issueElement.state.groupedIssues['0-Backlog'].length).toBe(1)
		expect(issueElement.state.groupedIssues['1-Ready'].length).toBe(1)
	})

	it('search if creteria has key', function(){
		var issueBoard = TestUtils.renderIntoDocument(
		 	<IssueBoard g={g} owner="hehe" repo="hoho"/>
		)
		var issueElement = TestUtils.findRenderedComponentWithType(issueBoard, IssueBoard);
		issueElement.handleFilterSubmit("list")
		expect(issueElement.state.groupedIssues['0-Backlog'].length).toBe(0)
		expect(issueElement.state.groupedIssues['1-Ready'].length).toBe(1)
	})
})
