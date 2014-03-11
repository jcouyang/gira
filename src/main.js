$(function(){
	function renderViews(){
		header = new HeaderView;
		reposelector = new RepoSelectorView;
		milestone = new MilestoneView;
		kanban = null;		
	}
	if (!github.checkLogin()) {
				renderViews();
		$('#try-gira').click(function () {
			var userrepo = $(".marketing-section-enterprise input[name=username]").val().split('/');
			github.owner = userrepo[0];
			github.owner = userrepo[1];
			renderViews();
		});

	}
	github.getAccessToken().then(function (login) {
		if (!login) return;
		$(".intro").remove();
		$(".loggedin").removeClass("hidden");
		renderViews();
	}, function (error) {
		console.log("invalid token", error);
	});
});

