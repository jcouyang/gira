var Github = function (owner, repo) {
	this.owner = owner;
	this.repo = repo;
	this.milestone = "";
  this.REPO_BASE = 'https://api.github.com/';
  this.access_token = localStorage.getItem("access_token");
};

Github.prototype = {
  getAccessToken: function () {
    var r = /\?code=([^\/]+)\/?/;
    if (window.location.search && r.test(window.location.search)) {

      var m = r.exec(location.search);
      return Q($.ajax({
        url: "http://query.yahooapis.com/v1/public/yql?q=env%20%22store%3A%2F%2F0zaLUaPXLo4GWBb1koVqO6%22%3Bselect%20OAuth%20from%20github%20where%20CODE%3D%22" + m.pop() + "%22&format=json&diagnostics=true&callback=?",
        type: 'GET',
        dataType: 'json'
      })).then(function (data) {
        localStorage.setItem("access_token", data.query.results.token.OAuth.access_token);
        location.search = '';
      }, function (error) {
        console.log("invalid code", error);
      });
    } else {
      return Q(this.access_token);
    }
  },
	getComments: function(issueId){
		return Q($.ajax({
      url: this.getReposUrl() + "/issues/" + issueId + "/comments" + this.concatToken(),
      type: 'GET',
      dataType: 'json'
    }));
	},
  getUser: function () {
		var self = this;
    return Q($.ajax({
      url: this.REPO_BASE + "user" + this.concatToken(),
      type: 'GET',
      dataType: 'json'
    })).then(function(data){
			self.owner=data.login;
			return data;
		});
  },
  getReposUrl: function () {
    return  this.REPO_BASE + 'repos/' + this.owner + '/' + this.repo;
  },
  concatToken: function () {
    return this.access_token ? '?access_token=' + this.access_token : '';
  },
  checkLogin: function () {
    if (localStorage.getItem("access_token")) {
      this.access_token = localStorage.getItem("access_token");
      // TODO check token validMe me
      return true;
    } else {
      return false;
    }
  },
  logout: function () {
    localStorage.remove("access_token");
    window.location.reload();
  },
  getLabels: function () {
    return Q($.ajax({
      url: this.getReposUrl() + "/labels" + this.concatToken(),
      type: 'GET',
      dataType: 'json'
    }));
  },
  getMilestones: function () {
    return Q($.ajax({
      url: this.getReposUrl() + '/milestones' + this.concatToken(),
      type: 'GET',
      dataType: 'json'
    }));
  },
  getIssues: function (id) {
    id = (typeof id !== "undefined" && id !== null) ? id : '';
    return Q($.ajax({
      url: this.getReposUrl() + "/issues" + (id && '/' + id) + this.concatToken() + (this.milestone ? ("&milestone=" + this.milestone) : ''),
      type: 'GET',
      dataType: 'json'
    }));
  },
  getAssignees: function () {
    return Q($.ajax({
      url: this.getReposUrl() + '/assignees' + this.concatToken(),
      type: 'GET',
      dataType: 'json'
    }));
  },
  getRepos: function () {
    return Q($.ajax({
      url: this.REPO_BASE + 'user/repos' + this.concatToken(),
      type: 'get',
      dataType: 'json'
    }));
  },
  addLabel: function (id, label) {
    return Q($.ajax({
      url: [this.getReposUrl(), 'issues', id, 'labels'].join('/') + '?access_token=' + this.access_token,
      type: 'put',
      data: JSON.stringify(label),
      dataType: 'json'
    }));
  },
  createLabel: function (label) {
    return Q($.ajax({
      url: this.getReposUrl() +  '/labels' + this.concatToken(),
      type: 'post',
      data: JSON.stringify(label),
      dataType: 'json'
    }));
  },
  deleteLabel: function (id, label) {
    return Q($.ajax({
      url: this.getReposUrl() + "/issues/" + id + "/labels/" + label + this.concatToken(),
      type: 'delete'
    }));
  },
  newIssue: function (issue, id) {
    id = (typeof id !== "undefined" && id !== null) ? id : '';
    return Q($.ajax({
      url: this.getReposUrl() + "/issues" +  this.concatToken(),
			type: 'post',
      dataType: 'json',
      data: JSON.stringify(issue)
    }));
  },
  editIssue: function (issue, id) {
    id = (typeof id !== "undefined" && id !== null) ? id : '';
    return Q($.ajax({
      url: this.REPO_BASE + ['repos', 'issues'].join('/') + (id && ('/' + id)) + this.concatToken(),
      type: 'patch',
      dataType: 'json',
      data: JSON.stringify(issue)
    }));
  },
  markdown: function (data) {
    return Q($.post(this.REPO_BASE + "markdown" + "?access_token=" + this.access_token,
										JSON.stringify(data)));
  },
  deleteLane: function (label) {
    $.ajax({
      url: [this.getReposUrl(), 'labels', label].join('/') + this.concatToken(),
      type: 'delete'
    });
  },
	uploadImage:function(data){
		return Q($.ajax({
			url:this.getReposUrl() + '/contents/'+ data.path + this.concatToken(),
			type: 'put',
			dataType: 'json',
			data: JSON.stringify(data)
		}));
	},
	createBranch:function(branch,sha){
		return Q($.ajax({
			url:this.getReposUrl() + '/git/refs' + this.concatToken(),
			type: 'post',
			dataType: 'json',
			data: JSON.stringify({
				ref:branch,
				sha:sha
				})
		}));
	},
	getRefSha:function(branch){
		return Q($.ajax({
						url:this.getReposUrl() + '/git/refs' + this.concatToken(),
			type: 'get',
			dataType: 'json'
		}));
	}
};
