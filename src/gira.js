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
// gira = new Gira("jcouyang", "gira", github);
// github.getAccessToken().then(function () {
//   gira.render();
// }, function (error) {
//   console.log("invalid token", error);
// });

var View = Gira.View = function(options){
	_.extend(this,options);
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
		}).then(self.afterRender.bind(self));

	},
	afterRender:function(){},
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
	milestone:"",
	templateName:"src/templates/gira.html",
	modelReady: function(){
    var that = this;
    return Q.all([github.getIssues(that.milestone), github.getLabels()]).then(function (data) {
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
		"click .close.close-issue":"closeIssue",
		"dragstart .contrib-details.grid .col .lbl div[draggable=true]":"dragStart",
		"dragover .col":"dragover",
		"drop .col":"drop"
		
	},
	drop: function (e) {
    e.stopPropagation();
    var column = e.target;
    var $issue = $('#' + e.originalEvent.dataTransfer.getData('text/plain'));
    github.deleteLabel($issue.attr('id'), $issue.data('label'))
      .then(function (labels) {
        github.addLabel($issue.attr('id'), _(labels).pluck('name').concat(column.id));
      });
    $(e.target).removeClass("over")
      .find('span.lbl')
      .append($($issue));
    return false;
  },
	dragStart: function (e) {
    e.originalEvent.dataTransfer.effectAllowed = 'move';
    e.originalEvent.dataTransfer.setData('text/plain', e.target.id||e.target.dataset["issueId"]);
		console.log('transfet',e.target)
  },
	dragover: function (e) {
      if (e.preventDefault) e.preventDefault(); // allows us to drop
      $(e.target).removeClass("over").addClass('over');
      e.originalEvent.dataTransfer.dropEffect = 'move';
      return false;
    },
	renderFaceBox: function(e){
		new EditIssueView({
			edit:true,
			issue_id:e.currentTarget.dataset["issueId"]
		});
		console.log("render popup",e.target.dataset["issueId"]);
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
	}
});


var RepoSelectorView = View.extend({
	repo:'gira',
	owner:'jcouyang',
	el: ".pagehead.repohead h1",
	templateName:"src/templates/repo-selector.html",
  changeOwner: function (event) {
    this.owner = $(event.target).attr('name');
		this.repo="";
    this.render();
  },
  changeRepo: function (event) {
    this.repo = $(event.target).attr('name');
		github.owner = this.owner;
		github.repo = this.repo;
  },
	afterRender: function(){
		github.owner = $(this.el).find(".select-menu.owner-select-menu .selected input[type=radio]").attr("name");
		github.repo = $(this.el).find(".target-repo-menu.select-menu .selected input[type=radio]").attr("name");
		new KanbanView;
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
		"click .select-menu a.select-menu-item": "changeMilestone"
	},
	changeMilestone:function (e) {
		e.stopPropagation();
    this.milestone = $(this.el).find("a.select-menu-item.last-visible").data('milestone');
		this.render();
		new KanbanView({milestone:this.milestone});
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
	issue_id:'',
	el:".facebox-content",
	templateName:"src/templates/edit-issue.html",
	events:{
		"submit form:visible":"createIssue",
		"click #jk-preview":"preview",
		"click .color-label":"addLabels",
		"change input[type=file]": "uploadImage"
	},
	uploadImage:function(){
		var file = e.target.files[0];
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
	modelReady:function(){
		var tasks = [this.edit&&github.getIssues(null,this.issue_id), github.getAssignees(), github.getMilestones(),this.edit&&github.getLabels()];
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
			new KanbanView;
    });
    return false;
  }
});

$(function(){
	var header = new HeaderView;
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

// function createLabel() {
//     var that = this;
//     return function () {
//       var form = $('form:visible');
//       github.createLabel( {
//         color: form.find('input[name=color]').val().replace('#', ''),
//         name: (parseInt(/^(\d+)-\w+/.exec(that.last_label).pop()) + 1) + '-' + form.find('input[name=label]').val()
//       }).then(function () {
//         // that.render();
//         $(".facebox-close").click();
//       });
//       return false;
//     };
//   }

