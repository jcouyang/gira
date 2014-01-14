
self.port.on('loadTemplate',function(source){
	var repo = window.location.pathname.split('/');
	repo.pop();
	repo.shift();
	var REPO_URL = ['https://api.github.com/repos'].concat(repo).join('/');
	console.log(REPO_URL);
	$.getJSON(REPO_URL+'/milestones', function(milestones){
		console.log('blah');
		var template = Handlebars.compile(source);
		var html = template({'milestones':milestones});
		console.log('haha',html);
		$('body').html(html);
	});
});
