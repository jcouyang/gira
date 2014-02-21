var LABEL_REGEX = /^\d+-(\w+)/;
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

var Gira = function (username, repo, github, milestone) {
  this.username = username;
  this.repo = repo;
  this.owner = username;
  this.milestone = milestone || '';
  this.last_label = '';
  this.github = github;
  this.milestones = {};
  this.owners = {};
};

// if (!github.checkLogin()) {
//   $(".site.clearfix").html(nunjucks.render('src/templates/index.html'));
//   $('#try-gira').click(function () {
//     var userrepo = $(".marketing-section-enterprise input[name=username]").val().split('/');
//     gira = new Gira(userrepo[0], userrepo[1], github);
//     gira.render();
//   });
// }
gira = new Gira("jcouyang", "gira", github);
// github.getAccessToken().then(function () {
//   gira.render();
// }, function (error) {
//   console.log("invalid token", error);
// });

var View = Gira.View = function(){
	this.initialize.apply(this, arguments);
};

var delegateEventSplitter = /^(\S+)\s*(.*)$/;

View.extend = function(props){
	var parent = this;
	var child;
	if (props && _.has(props, 'constructor')) {
      child = props.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }
	_.extend(child, parent);
	var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate;
	
	_.extend(child.prototype,props);
	child.__super__ = parent.prototype;
	return child;
};

_.extend(View.prototype, {
	el:$('body'),
	templateName:"index.html",
	templateEngine:mynunjucks,
	modelReady:{},
	initialize:function(){
		this.render();
	},
	render: function(){
		var self = this;
		this.modelReady().then(function(model){
			console.log(model);
			$(self.el).html(self.templateEngine.render(self.templateName,model));
			self.delegateEvents();
		}).catch(function(error){
			console.log(error);
			$(self.el).html(self.templateEngine.render(self.templateName));
		});

	},
	delegateEvents:function(){
		var self = this;
		var events = _.result(this, 'events');
		if (!events) return this;
		_.each(_(events).keys(),function(key){
			var match = key.match(delegateEventSplitter);
			var eventName = match[1], selector = match[2];
			if (selector=='')
				$(self.el).on(eventName, _.bind(self[events[key]],self));
			else
				$(self.el).find(selector).on(eventName, _.bind(self[events[key]],self));
		});
	}
});


var HeaderView = View.extend({
	el:"#header",
	templateName:"src/templates/header.html",
	modelReady: function(){
		return github.getUser();
	},
	events: {
		"click .octicon.octicon-log-out": "logout"
	},
	logout: function(){
		github.logout();
	}
});

var KanbanView = View.extend({
	el:"#contributions-calendar",
	templateName:"src/templates/gira.html",
	modelReady: function(){
    var that = this;
    return Q.all([github.getIssues(this.milestone), github.getLabels()]).then(function (data) {
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
    }).catch(function (error) {
      // that.renderError(JSON.parse(error.responseText).message);
    });
	},
	events:{
		"click a[rel=facebox]": "renderFaceBox",
		"click .close.close-issue":"closeIssue"
	},
	renderFaceBox: function(){
		console.log("render popup");
	},
	closeIssue: function(e){
		var $close = $(e.target);
    github.getIssues(this.milestone, $close.data('issue'))
      .then(function (issue) {
        issue.state = 'close';
        issue.assignee = issue.assignee && issue.assignee.login;
        issue.milestone = issue.milestone && issue.milestone.number;

        github.newIssue(issue, issue.number)
          .then(function () {
            $('#' + $close.data('issue')).remove();
          });
      });
	},
	  draggablify: function () {
    var that = this;
    var $issues = $('#contributions-calendar .contrib-details.grid .col .lbl div[draggable=true]');
    $issues.on('dragstart', function (e) {
      e.originalEvent.dataTransfer.effectAllowed = 'move';
      e.originalEvent.dataTransfer.setData('text/plain', this.id);
    });
    $(".col").on('dragover',function (e) {
      if (e.preventDefault) e.preventDefault(); // allows us to drop
      $(this).removeClass("over").addClass('over');
      e.originalEvent.dataTransfer.dropEffect = 'move';
      return false;
    }).on('drop', function (e) {
      if (e.stopPropagation) e.stopPropagation();
      var column = this;
      var $issue = $('#' + e.originalEvent.dataTransfer.getData('text/plain'));
      that.github.deleteLabel($issue.attr('id'), $issue.data('label'))
        .then(function (labels) {
          that.github.addLabel($issue.attr('id'), _(labels).pluck('name').concat(column.id));
        });
      $(this).removeClass("over")
        .find('span.lbl')
        .append($($issue));
      return false;
    });
  }
});


var RepoSelectorView = View.extend({
	repo:'gira',
	owner:'jcouyang',
	el: ".pagehead.repohead h1",
	templateName:"src/templates/repo-selector.html",
  changeOwner: function (event) {
    this.owner = $(event.target).attr('name');
    this.render();
  },
  changeRepo: function (event) {
    this.repo = $(event.target).attr('name');
    // this.renderKanban();
  },
	events:{
		"change .select-menu.owner-select-menu input[type=radio]":"changeOwner",
		"change .target-repo-menu.select-menu input[type=radio]":"changeRepo"
	},
	modelReady:function(){
		var self = this;
		return github.getRepos().then(function (repos) {
      var groupedRepo = _(repos).groupBy(function (repo) {
        return repo.owner.login;
      });
      self.repo = self.repo || groupedRepo[self.owner][0].name;
      return {checked: self.owner, checkedRepo: self.repo, owners: _(groupedRepo).map(function (repos) {
        return repos[0].owner;
      }), repos: groupedRepo[self.owner]};
    });
	}
});


var MilestoneView = View.extend({
	milestone:"1.0.0",
	el:".pagehead.repohead div.sidebar-milestone-widget",
	templateName: "src/templates/milestones.html",
	events:{
		"click .sidebar-milestone-widget .select-menu a.select-menu-item":
	},
	changeMilestone:function (e) {
    e.preventDefault();
    this.milestone = $(this).data('milestone');
    this.render();
    return false;
  },
	modelReady:function(){
		var self = this;
		return github.getMilestones().then(function (milestones) {
			return {
          selected: self.milestone && _(milestones).find(function (milestone) {
            return milestone.number === self.milestone;
          }),
          milestones: milestones
        };
    });
	}
});


var EditIssueView = View.extend({
	edit:true,
	el:".facebox-content",
	templateName:"src/templates/edit-issue.html",
	events:{
		"submit form":"createIssue",
		"click #jk-preview":"preview",
		"click .sidebar .color-label":"addLabels",
	},
	addLabels: function(e){
      e.preventDefault();
      $(e.target).toggleClass('selected');
	},
	preview: function () {
    var data = {text: $('#issue_body').val()};
    that.github.markdown(data).then(function (result) {
      $('.comment-body.markdown-body.js-comment-body p').html(result);
    });
  },
	modelReady:function(){
		var tasks = [this.edit&&github.getIssues(null,$(this).data("issue-id")), github.getAssignees(), github.getMilestones(),this.edit&&github.getLabels()];
		return Q.all(tasks).then(function(data) {
      console.log(data);
      var context = data[0];
      context.assignees = data[1];
      context.milestones = data[2];
      context.all_labels = data[3];
			context.comments = data[4];
			return context;
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
    });
    return false;
  }
});

$(function(){
	var header = new HeaderView;
	var kanban = new KanbanView;
	var reposelector = new RepoSelectorView;
	var milestone = new MilestoneView;
	
});


// Gira.prototype = {
// 	renderError: function(message) {
// 		$('.notification').html(nunjucks.render("src/templates/error.html",{message:message}));
// 		window.setTimeout(function(){
// 			$('.notification .close.js-flash-close').click();
// 		}, 2000);

// 	},

function createLabel() {
    var that = this;
    return function () {
      var form = $('form:visible');
      that.github.createLabel(that.owner, that.repo, {
        color: form.find('input[name=color]').val().replace('#', ''),
        name: (parseInt(/^(\d+)-\w+/.exec(that.last_label).pop()) + 1) + '-' + form.find('input[name=label]').val()
      }).then(function () {
        that.render();
        $(".facebox-close").click();
      });
      return false;
    };
  }
//   bindUploadImageEvent: function() {
// 		var that = this;
//     $('input[type=file]').on("change", function(){
// 			var file = this.files[0];
// 			var data = {};
// 			data.path="images/" + file.name.replace(' ','-');
// 			data.message = "upload" + file.name;
// 			var reader  = new FileReader();
// 			reader.onloadend = function () {
// 				data.content = reader.result;
// 				data.branch = "gira-images";
// 				data.content = data.content.slice(data.content.indexOf(',')+1);
// 				that.github.getRefSha(that.owner,that.repo).then(function(refs){
// 					var _refs = _(refs);
// 					if(_refs.find(function(ref){return ref.ref==="refs/heads/gira-images";})){
// 						return that.github.uploadImage(that.owner,that.repo,data);
// 					}
// 					else{
// 						return that.github.createBranch(that.owner,that.repo,"refs/heads/gira-images", _refs.first().object.sha).then(function(){
// 							that.github.uploadImage(that.owner,that.repo,data);
// 						});
// 					}
// 				})
// 					.then(function(resp){
// 					var selectionStart = $('#issue_body')[0].selectionStart;
// 					var selectionEnd = $('#issue_body')[0].selectionEnd;

// 					$('#issue_body').val($('#issue_body').val() + '![]('+ resp.content.html_url + '?raw=true)');

// 					$('#issue_body')[0].selectionStart = selectionStart;
// 					$('#issue_body')[0].selectionEnd = selectionEnd;
// 					},function(error){
// 						console.log("exist",error);
// 					});
// 			};

// 			if (file) {
// 				reader.readAsDataURL(file);
// 			} else {
// 				data.content = "";
// 			}	
// 		});
//   },
//   closeButton: function () {
//     var that = this;
//     $('.remove-lane').on('click', function (event) {
//       event.preventDefault();
//       var label = $(this).attr('data');
//       that.github.deleteLane(that.owner, that.repo, label);
//       that.render();
//     });
//   },
//   render: function () {
//     var that = this;
//     that.renderHeader();
//     return that.renderRepoSelector()
//       .then(that.renderMilestone.bind(that))
//       .then(that.renderKanban.bind(that))
//       .then(that.closeButton.bind(that))
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// };


