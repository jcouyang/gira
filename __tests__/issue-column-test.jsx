jest.dontMock('../src/issue-column')
jest.dontMock('ramda')
describe('IssueColumn', function(){
	var React = require('react/addons');
	var $ = require('jquery');
	var IssueColumn = require('../src/issue-column');
	var TestUtils = React.addons.TestUtils;
	var g = jest.genMockFn();
	var issueColumn = TestUtils.renderIntoDocument(
		<IssueColumn g={g} issues={[{number:1}, {number:2}]} columnName="todo"/>
	)
	it('render column', function(){
		var issueElement = TestUtils.findRenderedComponentWithType(issueColumn, IssueColumn);
		expect(issueElement.getDOMNode().id).toBe("todo")
	})

	it('reveal issue to popup', function(){
		var issueElement = TestUtils.findRenderedDOMComponentWithClass(issueColumn, "table-column");
		var jqueryObj = jest.genMockFn();
		jqueryObj.find = jqueryObj.addLabel = jqueryObj.append = jqueryObj.data = jqueryObj.attr = jest.genMockFn();
		jqueryObj.data.mockReturnValue("hehe")
		$.mockReturnValue(jqueryObj)
		jqueryObj.find.mockReturnValue(jqueryObj)
		jqueryObj.append.mockReturnValue(jqueryObj)
		g.deleteLabel = jest.genMockFn();
		g.addLabel = jest.genMockFn();
		g.deleteLabel.mockImplementation(function() { return {then: (fn)=>fn([
			{name:'1'},
			{name:'hehe'}
		])}});
		var target = {"getData":function(){
			return "asdf"
		}}
		TestUtils.Simulate.drop(issueElement,
														{dataTransfer:target, currentTarget:"asfd"});

		expect(g.deleteLabel).toBeCalled();
		expect(g.addLabel).toBeCalled();
		expect(jqueryObj.append).toBeCalled();
	})
})
