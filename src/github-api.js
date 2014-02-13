var Github = function(){
		this.REPO_BASE = 'https://api.github.com/';
		this.access_token = localStorage.getItem("access_token");
};

Github.prototype = {
	getAccessToken: function(){
		var r = /\?code=([^\/]+)\/?/;
		if (window.location.search && r.test(window.location.search)){
		
			var m = r.exec(location.search);
			return Q($.ajax({
				url:"http://query.yahooapis.com/v1/public/yql?q=env%20%22store%3A%2F%2F0zaLUaPXLo4GWBb1koVqO6%22%3Bselect%20OAuth%20from%20github%20where%20CODE%3D%22"+m.pop()+"%22&format=json&diagnostics=true&callback=?",
				type:'GET',
				dataType:'json'
			})).then(function(data){
				localStorage.setItem("access_token", data.query.results.token.OAuth.access_token);
				location.search ='';
			},function(error){
				console.log("invalid code",error);
			});
		}else{
			return Q();
		}
	},
	getUser:function() {
		return Q($.ajax({
			url:this.REPO_BASE + "user?access_token="+ this.access_token,
			type:'GET',
			dataType:'json'
		}));
	},
	getReposUrl:function(owner,repo) {
		return  this.REPO_BASE + 'repos/' + owner+'/'+repo;
	},
	concatToken: function() {
		return this.access_token?'?access_token='+this.access_token:'';
	},
	checkLogin: function() {
		if (localStorage.getItem("access_token")){
			this.access_token = localStorage.getItem("access_token");
			// TODO check token validMe me
			return true;
		} else {
			return false;
		}
	},
	logout: function() {
		localStorage.remove("access_token");
		location.reload();
	},
	getLabels: function(owner,repo){
		return Q($.ajax({
			url:this.getReposUrl(owner,repo)+"/labels" + this.concatToken(),
			type:'GET',
			dataType:'json'
		}));
	},
	getMilestones: function(owner,repo){
		return Q($.ajax({
			url:this.getReposUrl(owner,repo)+'/milestones' + this.concatToken(),
			type:'GET',
			dataType:'json'
		}));
	},
	getIssues: function(owner,repo,milestone, id) {
		id = (typeof id !== "undefined" && id !== null)?id:'';
		return Q($.ajax({
			url:this.getReposUrl(owner,repo)+"/issues" + (id&&'/'+id) + this.concatToken() + (milestone?("&milestone="+milestone):'') ,
			type:'GET',
			dataType:'json'
		}));
	},
  getAssignees: function(owner,repo) {
        return Q($.ajax({
            url:this.getReposUrl(owner,repo)+'/assignees' + this.concatToken(),
            type:'GET',
            dataType:'json'
        }));
    },
	getRepos: function(){
		return Q($.ajax({
			url:this.REPO_BASE + 'user/repos',
			data:{access_token:this.access_token},
			type:'get',
			dataType:'json'
		}));
	},
	addLabel: function(owner,repo,id,label) {
		return Q($.ajax({
				url: this.REPO_BASE+['repos',owner, repo,'issues',id,'labels'].join('/') + '?access_token='+this.access_token,
				type:'put',
				data:JSON.stringify(label),
				dataType:'json'
			}));
	},
	createLabel: function(owner,repo,label){
		return Q($.ajax({
			url: this.REPO_BASE+['repos',owner, repo,'labels'].join('/') + '?access_token='+this.access_token,
			type:'post',
			data:JSON.stringify(label),
			dataType:'json'
		}));
	},
	deleteLabel: function(owner,repo,id,label){
		return Q($.ajax({
				url: this.REPO_BASE+['repos', owner, repo,'issues',id,'labels',label].join('/') + '?access_token='+this.access_token,
				type: 'delete'
			}));
	},
	newIssue: function(owner, repo, issue,id) {
		id = (typeof id !== "undefined" && id !== null)?id:'';
		return Q($.ajax({
			url:this.REPO_BASE + ['repos', owner,repo,'issues'].join('/') + (id&&('/'+id)) + '?access_token='+this.access_token,
			type: 'post',
			dataType:'json',
			data:JSON.stringify(issue)
		}));
	},
	editIssue: function(owner, repo, issue,id) {
		id = (typeof id !== "undefined" && id !== null)?id:'';
		return Q($.ajax({
			url:this.REPO_BASE + ['repos', owner,repo,'issues'].join('/') + (id&&('/'+id)) + '?access_token='+this.access_token,
			type: 'patch',
			dataType:'json',
			data:JSON.stringify(issue)
		}));
	},
    markdown: function (data) {
        return Q($.post(this.REPO_BASE + "markdown" + "?access_token=" + this.access_token,
            JSON.stringify(data)));
    },
    deleteLane: function(owner,repo,label){
        $.ajax({
            url: this.REPO_BASE+['repos', owner, repo, 'labels',label].join('/') + '?access_token='+this.access_token,
            type: 'delete'
        });
    }
};
