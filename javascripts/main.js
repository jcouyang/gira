$(function(){
	mynunjucks = new nunjucks.Environment();
	mynunjucks.addFilter('removeIndex', function(str) {
		var matched =LABEL_REGEX.exec(str);
    return matched && matched.pop() || str;
	});
	mynunjucks.addFilter('dayFromNow', function(str){
		return Math.floor((new Date(str)-new Date())/(1000*60*60*24));
	});
	github = new Github();
	
	if(!github.checkLogin()){
		$(".site.clearfix").html(nunjucks.render('src/templates/index.html'));
		$('#try-gira').click(function(){
			var userrepo = $(".marketing-section-enterprise input[name=username]").val().split('/');
			gira = new Gira(userrepo[0],userrepo[1],github);
			gira.render();
		});
	}
		gira = new Gira("jcouyang","gira",github);
		github.getAccessToken().then(function(){
			gira.render();
		},function(error){
			console.log("invalid token",error);
		});
});
