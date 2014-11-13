var React = require('react');
var IssueBoard = require('./issue-board')
var G = require('./github-api')
var g = new G();
var $ = require('jquery')
g.getAccessToken().then(function (login) {
	if (login==='token seted'){
		window.location = 'http://getgira.github.io/auth-done.html'
	}	else if (g.access_token){
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
  $('.pagehead-actions').append('<li><a href="https://github.com/login/oauth/authorize?client_id=666dc0b3b994cc362ca2&scope=public_repo,user" class="button danger right" data-hotkey="g">Enable Gira</a></li>');
	console.debug("no token found");
});
