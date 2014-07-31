var React = require('react');
var $ = require('jquery');
var IssueBoard = require('./issue-board')
var G = require('./github-api')
var [,owner,repo,] = window.location.pathname.split("/");
console.log('loading issue board for ',owner,repo )
var g = new G(owner, repo);
g.getAccessToken().then(function (login) {
	if (!login)
		console.log("auth done, try gira in you github issue");
	else{
		React.renderComponent(
			<IssueBoard owner={owner} repo={repo}/>,
			document.querySelector('#js-repo-pjax-container')
		)
	}

}, function (error) {
	console.log("invalid token", error);
});


