var React = require('react');
var IssueBoard = require('./issue-board')
var G = require('./github-api')
var g = new G();
g.getAccessToken().then(function (login) {
	if (login==='token seted')
		window.location = 'http://getgira.github.io/auth-done.html'
	else{
		var [,owner,repo,] = window.location.pathname.split("/");
		console.log('loading issue board for ',owner,repo )
 		g.owner = owner;
		g.repo = repo;
		React.renderComponent(
			<IssueBoard g={g} owner={owner} repo={repo}/>,
			document.querySelector('#js-repo-pjax-container')
		)
	}

}, function (error) {
	console.log("invalid token", error);
});


