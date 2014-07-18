var LABEL_REGEX = /^\d+-(\w+)/;
var API_BASE = 'https://api.github.com/';
var TOKEN = localStorage.access_token;
var USERNAME = 'jcouyang';
var concatToken =  function () {
	if(TOKEN)
    return '?access_token=' + TOKEN; 
 };
mynunjucks = new nunjucks.Environment();
mynunjucks.addFilter('removeIndex', function (str) {
  var matched = LABEL_REGEX.exec(str);
  return matched && matched.pop() || str;
});
mynunjucks.addFilter('dayFromNow', function (str) {
  return Math.floor((new Date(str) - new Date()) / (1000 * 60 * 60 * 24));
});
mynunjucks.addFilter('hasIndex', function (str) {
  return /\d+-.*/.test(str);
});
github = new Github('jcouyang','gira');

var userModel = new Model("user", "get@" + API_BASE + "user" + concatToken());
var repoModel = new Model("repo", "get@" + API_BASE + "user/repos" + concatToken());
var milestoneModel = new Model("milestone");
milestoneModel.dataProc = function(milestones){
	var self = this;
	return {
		selected: self.milestone && _(milestones).find(function (milestone) {
      return milestone.number === self.milestone;
    }),
    milestones: milestones
  };
};
var issuesModel = new Model("issues");
var labelModel = new Model("labels");
var assigneeModel = new Model("assignee");
function initKanbanModels(params, hash){
	issuesModel = new Model("issues", "get@" + API_BASE + 'repos/' +  hash + "/issues" + concatToken());
	labelModel = new Model("labels", "get@" + API_BASE + 'repos/' +  hash + "/labels" + concatToken());
	milestoneModel = new Model("milestone", "get@" + API_BASE + 'repos/' + hash + "/milestones" + concatToken());
	assigneeModel =  new Model("assignee", "get@" + API_BASE + 'repos/' +  hash + "/assignees" + concatToken());

}

repoModel.dataProc = function(data){
	var groupedRepo = _(data).groupBy(function (repo) {
    return repo.owner.login;
  });
	var owner = this.owner || USERNAME;
  var repo =  this.repo || groupedRepo[owner][0].name;
  return {checked: owner, checkedRepo: repo, owners: _(groupedRepo).map(function (repos) {
    return repos[0].owner;
  }), repos: groupedRepo[owner], origindata:data};
};

var HeaderView = View.extend({
	model: userModel,
	el:$("#header"),
	template:"src/templates/header.html",
	events: {
		"click .octicon.octicon-log-out": "logout"
	},
	logout: function(){
		github.logout();
	}
});

var KanbanModel = Model.extend({
	dataProc: function(data){
		var that = this;
		var issues = data[0];
    var labels = _(data[1]).filter(function (label) {
      return LABEL_REGEX.test(label.name);
    });
    var groupIssue = _(issues).groupBy(function (issue) {
      var column = _(issue.labels).find(function (label) {
        return LABEL_REGEX.test(label.name);
      });
      if (column) {
        return column.name;
      }
      return "0-Backlog";
    });
    issues = _.chain(labels.concat({name: "0-Backlog"}))
      .sortBy(function (label) {
        return label.name;
      })
      .uniq(true, function (label) {
        return label.name;
      })
      .tap(function (label) {
        that.last_label = label[label.length - 1].name;
      })
      .map(function (label) {
        return [label.name, groupIssue[label.name]];
      }).value();
		return {issuesWithLabel: issues, last_label: that.last_label};
	},
	fetch:function(){
		var self = this;
		issuesModel.fetch();
		labelModel.fetch();
		Q.all([issuesModel.data.promise, labelModel.data.promise]).then(function(data){
			self.data.resolve(self.dataProc(data));
		});
		Q.all([issuesModel.updated.promise, labelModel.updated.promise]).then(function(data){
			self.updated.resolve(self.dataProc(data));
		});
	},
	refetch:this.fetch
});

var kanbanModel = new KanbanModel("kanban");

var headerView = new HeaderView;
headerView.render();

var RepoSelectorView = View.extend({
	el: $(".pagehead.repohead h1"),
	template:"src/templates/repo-selector.html",
  changeOwner: function (event) {
    this.model.owner = $(event.currentTarget).attr('name');
		this.model.repo="";
    this.render(this.model.dataProc(this.model.localData.origindata));
		window.location.hash = this.model.owner + "/" +  this.model.repo;
  },
  changeRepo: function (event) {
    this.model.repo = $(event.currentTarget).attr('name');
		window.location.hash = this.model.owner + "/" +  this.model.repo;
  },
	model: repoModel,
	events:{
		"change .select-menu.owner-select-menu input[type=radio]":"changeOwner",
		"change .target-repo-menu.select-menu input[type=radio]":"changeRepo"
	}
});
var MilestoneView = View.extend({
		templateEngine: mynunjucks,
	milestone:"1.0.0",
	model: milestoneModel,
	el: $(".pagehead.repohead div.sidebar-milestone-widget"),
	template: "src/templates/milestones.html",
	events:{
		"click .select-menu a.select-menu-item": "changeMilestone"
	},
	changeMilestone:function (e) {
		e.stopPropagation();
		this.model.milestone = $(e.currentTarget).data('milestone');
		this.render();
  }
});

var KanbanView = View.extend({
	templateEngine: mynunjucks,
	el: $("#contributions-calendar"),
	template:"src/templates/gira.html",
	model: kanbanModel,
	events:{
		// "click .close.close-issue":"closeIssue",
		"dragstart .contrib-details.grid .col .lbl div[draggable=true]":"dragStart",
		"dragover .col":"dragover",
		"drop .col":"drop",
		"click .remove-lane": "removeLane"
	},
	removeLane:function(e){
		e.preventDefault();
    var label = $(e.currentTarget).attr('data');
    github.deleteLane(label);
		// window.location.reload();
	},
	drop: function (e) {
    e.stopPropagation();
    var column = e.currentTarget;
    var $issue = $('#' + e.originalEvent.dataTransfer.getData('text/plain'));
    github.deleteLabel($issue.attr('id'), $issue.data('label'))
      .then(function (labels) {
        github.addLabel($issue.attr('id'), _(labels).pluck('name').concat(column.id));
      });
    $(e.currentTarget).removeClass("over")
      .find('span.lbl')
      .append($($issue));
    return false;
  },
	dragStart: function (e) {
    e.originalEvent.dataTransfer.effectAllowed = 'move';
    e.originalEvent.dataTransfer.setData('text/plain', e.currentTarget.id);
		console.log('transfet',e.currentTarget);
  },
	dragover: function (e) {
      if (e.preventDefault) e.preventDefault(); // allows us to drop
      $(e.currentTarget).removeClass("over").addClass('over');
      e.originalEvent.dataTransfer.dropEffect = 'move';
      return false;
    },
	closeIssue: function(e){
		var $close = $(e.currentTarget);
    github.getIssues($close.data('issue'))
      .then(function (issue) {
        issue.state = 'close';
        issue.assignee = issue.assignee && issue.assignee.login;
        issue.milestone = issue.milestone && issue.milestone.number;
        github.newIssue(issue, issue.number)
          .then(function () {
            $('#' + $close.data('issue')).remove();
          });
      });
	}
});

function initIssueDetail(params,hash){
	var issueModel = new Model("issue");
	var commentModel = new Model("comment");
	var EditIssueModel = Model.extend({
		dataProc: function(data){
      console.log(data);
      var context = data[0];
      context.assignees = data[1];
      context.milestones = data[2];
      context.all_labels = data[3];
			context.comments = data[4];
			return context;
		},
		fetch:function(){
			if (!hash) return Q();
			var self = this;
			issuesModel.fetch();
			labelModel.fetch();
			issueModel.url = "get@" + API_BASE + 'repos/' + hash + concatToken();
			commentModel.url = "get@" + API_BASE + 'repos/' + hash + "/comments" +  concatToken();
			issueModel.fetch();
			assigneeModel.fetch();
			milestoneModel.fetch();
			labelModel.fetch();
			commentModel.fetch();
			Q.all([issueModel.data.promise, assigneeModel.data.promise, milestoneModel.data.promise, labelModel.data.promise, commentModel.data.promise ]).then(function(data){
				self.data.resolve(self.dataProc(data));
			});
			Q.all([issueModel.updated.promise, assigneeModel.updated.promise, milestoneModel.updated.promise, labelModel.updated.promise, commentModel.updated.promise ]).then(function(data){
				self.updated.resolve(self.dataProc(data));
			});
		},
		refetch:this.fetch
	});

	var editIssueModel = new EditIssueModel("editissue");
	var EditIssueView = View.extend({
		edit:false,
		issue_id:'',
		templateEngine: mynunjucks,
		el:$(".facebox-content"),
		model:editIssueModel,
		template:"src/templates/edit-issue.html",
		events:{
			"submit form:visible":"createIssue",
			"click #jk-preview":"preview",
			"click .color-label":"addLabels",
			"change input[type=file]": "uploadImage"
		},
		uploadImage:function(e){
			var file = e.currentTarget.files[0];
			var data = {};
			data.path="images/" + file.name.replace(' ','-');
			data.message = "upload" + file.name;
			var reader  = new FileReader();
			reader.onloadend = function () {
				data.content = reader.result;
				data.branch = "gira-images";
				data.content = data.content.slice(data.content.indexOf(',')+1);
				github.getRefSha().then(function(refs){
					var _refs = _(refs);
					if(_refs.find(function(ref){return ref.ref==="refs/heads/gira-images";})){
						return github.uploadImage(data);
					}
					else{
						return github.createBranch("refs/heads/gira-images", _refs.first().object.sha).then(function(){
							github.uploadImage(data);
						});
					}
				})
					.then(function(resp){
						var selectionStart = $('#issue_body')[0].selectionStart;
						var selectionEnd = $('#issue_body')[0].selectionEnd;

						$('#issue_body').val($('#issue_body').val() + '![]('+ resp.content.html_url + '?raw=true)');

						$('#issue_body')[0].selectionStart = selectionStart;
						$('#issue_body')[0].selectionEnd = selectionEnd;
					},function(error){
						console.log("exist",error);
					});
			};

			if (file) {
				reader.readAsDataURL(file);
			} else {
				data.content = "";
			}	
		},
		addLabels: function(e){
			e.preventDefault();
			$(e.currentTarget).toggleClass('selected');
		},
		preview: function () {
			var data = {text: $('#issue_body').val()};
			github.markdown(data).then(function (result) {
				$('.comment-body.markdown-body.js-comment-body p').html(result);
			});
		},
		createIssue: function() {
			var that = this;
			var form = $('form:visible');
			github.newIssue({
				title: form.find("input[name='issue[title]']").val(),
				body: form.find("textarea[name='issue[body]']").val(),
				assignee: form.find(".assignee input[type=radio]:checked").val(),
				milestone: form.find(".milestone input[type=radio]:checked").val(),
				labels: form.find("a.selected input").get().map(function (input) {
					return input.value;
				})
			}, form.data('issue-id')).then(function () {
				that.render();
				$(".facebox-close").click();
				kanban && kanban.render() || (kanban = new KanbanView);
			});
			return false;
		}
	});
	new EditIssueView({
		edit:hash,
		issue_id: params.id
	}).render();	
}


var router = new Router();
router.get(":username/:repo", function(params, data){
	initKanbanModels(params,window.location.hash.replace("#",""));
	repoModel.owner = params.username;
	repoModel.repo = params.repo;
	var repoView = new RepoSelectorView;
	repoView.render();
	var milestoneView = new MilestoneView;
	milestoneView.render();
	var kanbanView = new KanbanView;
	kanbanView.render();
});

router.get(":username/:repo/issues/:id", function(params){
	initIssueDetail(params, window.location.hash.replace("#",""));
	location = "#" + repoModel.owner + "/" + repoModel.repo;
});

router.get("create/new/issue", function(params){
	initIssueDetail(params, null);
	location = "#" + repoModel.owner + "/" + repoModel.repo;
});



// var LabelView = View.extend({
// 	el:".facebox-content",
// 	templateName:"src/templates/create-label.html",
// 	events:{
// 		"submit #new_label_form": "submit"
// 	},
// 	submit:function(e){
// 		e.preventDefault();
// 		var form = $(e.currentTarget);
// 		var last_label = $(".col").last().attr("id");
// 		github.createLabel( {
//       color: form.find('input[name=color]').val().replace('#', ''),
//       name: (parseInt(/^(\d+)-\w+/.exec(last_label).pop()) + 1) + '-' + form.find('input[name=label]').val()
//     }).then(function () {
// 			kanban && kanban.render() || (kanban = new KanbanView);
//       $(".facebox-close").click();
//     });
// 		return false;
// 	}
// });

// var ErrorView = View.extend({
// 	message:"",
// 	el:".notification",
// 	templateName:"src/templates/error.html",
// 	modelReady:function(){
// 		return Q({message:this.message});
// 	},
// 	afterRender:function(){
// 		window.setTimeout(function(){
// 			$('.notification .close.js-flash-close').click();
// 		}, 2000);
// 	}
// });


