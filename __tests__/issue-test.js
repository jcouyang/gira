/** @jsx React.DOM */
jest.dontMock('../src/issue')
jest.dontMock('ramda')
describe('Issue', function(){
	var React = require('react/addons');
	var $ = require('jquery');
	var Issue = require('../src/issue');
	var TestUtils = React.addons.TestUtils;
	var issue = TestUtils.renderIntoDocument(
		Issue({labels: ["hehe"], name: "hehe", number: "123", url: "http://oyanglul.us", title: "fakeIssue", repo: "gira", owner: "jcouyang", label: "hehe", milestone: "", comments: "", user: {login:'hehe'}})
	)
	it('set data when drag', function(){
		var issueElement = TestUtils.findRenderedComponentWithType(issue, Issue);
		TestUtils.Simulate.drag(issueElement);
		expect(issueElement.getDOMNode().id).toBe("issue-123")
	})

	it('reveal issue to popup', function(){
		var linkElement = TestUtils.findRenderedDOMComponentWithClass(issue, "popable");
		var jqueryObj = jest.genMockFn();
		jqueryObj.attr = jest.genMockFn();
		jqueryObj.load = jest.genMockFn();
		jqueryObj.attr.mockReturnValue("#hehe")
		$.mockReturnValue(jqueryObj)
		TestUtils.Simulate.click(linkElement, {currentTarget:"#issue-123"});
		expect(jqueryObj.load).toBeCalledWith("hehe #show_issue")
	})
})
