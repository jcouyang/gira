var repo = window.location.pathname.split('/');
repo.pop();
repo.shift();
var REPO_URL = ['https://api.github.com/repos'].concat(repo).join('/');
$.when($.getJSON(REPO_URL+'/milestones'), $.getJSON(REPO_URL+'/issues')).done(function(milestones,issues){
	var _issues = _(issues[0]);
	var milestoneWithIssue= _(milestones[0])
				.map(function(milestone){
					milestone.issues = _issues.filter(function(issue){
						return milestone.id === issue.milestone.id;
					});
					return milestone;
				});
	var compiled =  nunjucks.render('data/templates/gira.html', { milestones: milestoneWithIssue});
	$('.issues.issues-list').html(compiled);
});
