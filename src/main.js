$(function(){
	function renderViews(){
		header = new HeaderView;
		reposelector = new RepoSelectorView;
		milestone = new MilestoneView;
		kanban = null;		
	}
	if (!github.checkLogin()) {
		$(".site.clearfix").html(nunjucks.render('src/templates/index.html'));
		$('#try-gira').click(function () {
			var userrepo = $(".marketing-section-enterprise input[name=username]").val().split('/');
			github.owner = userrepo[0];
			github.owner = userrepo[1];
			renderViews();
		});
	}
	github.getAccessToken().then(function () {
		renderViews();
	}, function (error) {
		console.log("invalid token", error);
	});
});

