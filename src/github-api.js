var $ = require('jquery');
var store;
if (process.env.NODE_ENV == "chrome")
  store = require('./chrome_storage');
else
  store = require('./store');
var Github = function (owner, repo) {
	this.owner = owner;
	this.repo = repo;
	this.milestone = "";
  this.REPO_BASE = 'https://api.github.com/';
  this.access_token = "";
  this.token_got = $.Deferred();
  store.get('access_token', function(data){
    if(typeof(data) != 'undefined' && data.access_token){
      this.access_token = data.access_token;
      this.token_got.resolve("yay");       
    }else{
      this.token_got.reject("booooo");
    }

  }.bind(this));
};

var request = function(url, method){
	return $.ajax({
    url: url,
    type: method,
    dataType: 'json'
  });
};
var post = function(url, method, data){
	return $.ajax({
    url: url,
    type: method,
		data:data,
    dataType: 'json'
  });
};

if(typeof GM_xmlhttpRequest != 'undefined'){
	request = function(url, method){
		console.log('requesting', url);
		var result = $.Deferred();
		GM_xmlhttpRequest({
			method: method,
			headers: {"Accept": "application/json"},
			url: url,
			onload: function(res) {
				result.resolve(JSON.parse(res.response));
			},
			onerror: function(res){
				console.log('err');
			}
		});
		return result;
	};
	post = function(url, method, data){
		console.log('requesting', url);
		var result = $.Deferred();
		GM_xmlhttpRequest({
			method: method,
			headers: {"Accept": "application/json"},
			url: url,
			data: data,
			onload: function(res) {
				result.resolve(JSON.parse(res.response));
			},
			onerror: function(res){
				console.log('err');
			}
		});
		return result;
	};
}

Github.prototype = {
  getAccessToken: function () {
		var that = this;
    var r = /\?code=([^\/]+)\/?/;
    if (window.location.search && r.test(window.location.search)) {

      var m = r.exec(location.search);
      return request("http://query.yahooapis.com/v1/public/yql?q=env%20%22store%3A%2F%2F0zaLUaPXLo4GWBb1koVqO6%22%3Bselect%20OAuth%20from%20github%20where%20CODE%3D%22" + m.pop() + "%22&format=json&diagnostics=true",'get')
				.then(function (data) {
					var token = data.query.results.token.OAuth.access_token;
					console.log(token);
					store.set({"access_token": token}, that.token_got.resolve);
					that.access_token=token;
					console.log("token seted");
					return "token seted";
      }, function (error) {
        console.log("invalid code", error);
      });
    } else {
      return this.token_got;
    }
  },
	getComments: function(issueId){
		return $.ajax({
      url: this.getReposUrl() + "/issues/" + issueId + "/comments" + this.concatToken(),
      type: 'GET',
      dataType: 'json'
    });
	},
  getUser: function () {
		var self = this;
    return $.ajax({
      url: this.REPO_BASE + "user" + this.concatToken(),
      type: 'GET',
      dataType: 'json'
    }).then(function(data){
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
    return request(this.getReposUrl() + "/labels" + this.concatToken(), 'get');
  },
  getIssues: function (filter) {
		var params = $.param(filter);
    return request(this.getReposUrl() + "/issues" + this.concatToken() +"&"+ params, 'get');
  },
  getAssignees: function () {
    return $.ajax({
      url: this.getReposUrl() + '/assignees' + this.concatToken(),
      type: 'GET',
      dataType: 'json'
    });
  },
  getRepos: function () {
		return request(this.REPO_BASE + 'user/repos' + this.concatToken(), "get");
  },
	getOrgs: function () {
		return request(this.REPO_BASE + 'user/orgs' + this.concatToken(), 'get');
  },
  addLabel: function (id, label) {
		return post([this.getReposUrl(), 'issues', id, 'labels'].join('/') + '?access_token=' + this.access_token, 'put',JSON.stringify(label));
  },
  createLabel: function (label) {
		return post(this.getReposUrl() +  '/labels' + this.concatToken(), 'post',JSON.stringify(label));
  },
  deleteLabel: function (id, label) {
		return request(this.getReposUrl() + "/issues/" + id + "/labels/" + label + this.concatToken(), 'delete');
  },
};

module.exports = Github;
