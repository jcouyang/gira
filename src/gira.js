var LABEL_REGEX = /^\d+-(\w+)/;

var Gira = function(username, repo, github,milestone){
	this.username = username;
	this.repo = repo;
	this.owner = username;
	this.milestone = milestone||'';
	this.last_label='';
	this.github = github;
	this.milestones = {};
	this.owners =  {};
};

Gira.prototype = {
	renderError: function(message) {
		$('#contributions-calendar').html(nunjucks.render("src/templates/error.html",{message:message}));
	},
	groupIssuesByLabels: function() {
		var that = this;
		return Q.all([this.github.getIssues(this.owner,this.repo,this.milestone),this.github.getLabels(this.owner,this.repo)]).then(function(data){
			var issues = data[0];
			var labels = _(data[1]).filter(function(label){
				return LABEL_REGEX.test(label.name);
			});
			var groupIssue = _(issues).groupBy(function(issue){
				var column = _(issue.labels).find(function(label){
					return LABEL_REGEX.test(label.name);
				});
				if(column){
					return column.name;
				}
				return "0-Backlog";
			});
			return _.chain(labels.concat({name:"0-Backlog"}))
				.sortBy(function(label){
					return label.name;
				})
				.uniq(true,function(label){
					return label.name;
				})
				.tap(function(label){
					that.last_label = label[label.length-1].name;
				})
				.map(function(label){
				return [label.name, groupIssue[label.name]];
			}).value();
		}).catch(function(error){
			that.renderError(JSON.parse(error.responseText).message);
		});
	},
	draggablify: function(){
		var that = this;
		var $issues = $('#contributions-calendar .contrib-details.grid .col .lbl div[draggable=true]');
		$issues.on('dragstart', function (e) {
			e.originalEvent.dataTransfer.effectAllowed = 'move';
			e.originalEvent.dataTransfer.setData('text/plain', this.id);
		}); 
		$(".col").on('dragover', function (e) {
			if (e.preventDefault) e.preventDefault(); // allows us to drop
			$(this).removeClass("over").addClass('over');
			e.originalEvent.dataTransfer.dropEffect = 'move';
			return false;
		}).on('drop', function (e) {
			if (e.stopPropagation) e.stopPropagation();
			var column = this;
			var $issue = $('#'+e.originalEvent.dataTransfer.getData('text/plain'));
			that.github.deleteLabel(that.owner,that.repo,$issue.attr('id'),$issue.data('label'))
				.then(function(labels){
					that.github.addLabel(that.owner,that.repo,$issue.attr('id'), _(labels).pluck('name').concat(column.id));
				});
			$(this).removeClass("over")
				.find('span.lbl')
				.append($($issue));
			return false;
		}); 
	},

	changeOwner:function(event){
		this.owner=$(event.target).attr('name');
		this.renderRepoSelector();
	},
	changeRepo:function(event){
		this.repo=$(event.target).attr('name');
		this.renderKanban();
	},
	renderRepoSelector: function(repos){
		var that = this;
		if (this.github.checkLogin()){
			return this.github.getRepos().then(
				function(repos){
					var groupedRepo = _(repos).groupBy(function(repo){
						return repo.owner.login;
					});
					that.repo = that.repo || groupedRepo[that.owner][0].name;
					var res ={checked:that.owner, checkedRepo:that.repo, owners:_(groupedRepo).map(function(repos){return repos[0].owner;}), repos: groupedRepo[that.owner]};
					var compiled = nunjucks.render('src/templates/repo-selector.html',res);
					$(".pagehead.repohead h1").html(compiled);
					$(".select-menu.owner-select-menu input[type=radio]").on("change", that.changeOwner.bind(that));
					$(".target-repo-menu.select-menu input[type=radio]").on("change", that.changeRepo.bind(that));
				});			
		}else{
			var compiled = nunjucks.render('src/templates/repo-selector.html',{username:that.username,repo:that.repo});
			$(".pagehead.repohead h1").html(compiled);
		}
		return Q();
	},
	renderKanban: function() {
		var that = this;
		return this.groupIssuesByLabels().then(
			function(issues){
				var compiled = mynunjucks.render('src/templates/gira.html', {issuesWithLabel: issues, last_label:that.last_label});
				$('#contributions-calendar').html(compiled);
			})
			.then(that.draggablify.bind(that))
			.then(function(){
				$('.close.close-issue').click(function(){
					var $close = $(this);
					that.github.getIssues(that.owner,that.repo, that.milestone, $close.data('issue'))
						.then(function(issue){
							issue.state = 'close';
							issue.assignee = issue.assignee && issue.assignee.login;
							issue.milestone = issue.milestone && issue.milestone.number;

							that.github.newIssue(that.owner,that.repo,issue,issue.number)
								.then(function(){
									$('#'+$close.data('issue')).remove();
								});
						});
				});
			});
	},
	renderHeader:function(){
		var that = this;
		if (this.github.checkLogin()){
			this.github.getUser().then(
				function(user){
					that.owner = that.owner || user.login;
					$(".header").html(nunjucks.render('src/templates/header.html', {user:user}));
					$(".octicon.octicon-log-out").click(that.github.logout);
				},
				function(error) {
					$(".header").html(nunjucks.render('src/templates/header.html'));
				}
			);
		}else{
					$(".header").html(nunjucks.render('src/templates/header.html'));
		}
	},
	renderMilestone: function(){
		var that = this;
		this.github.getMilestones(this.owner,this.repo).then(function(milestones){
			$(".pagehead.repohead div.sidebar-milestone-widget").html(
				mynunjucks.render('src/templates/milestones.html',{
					selected:that.milestone && _(milestones).find(function(milestone){
						return milestone.number===that.milestone;
					}),
					milestones:milestones
				})
			);
			$(".sidebar-milestone-widget .select-menu a.select-menu-item").click(function(e){
				e.preventDefault();
				that.milestone =$(this).data('milestone');
				that.render();
				return false;
			});

		});
	},
	createLabel: function() {
		var that = this;
		return function(){
			var form = $('form:visible');
			that.github.createLabel(that.owner,that.repo,{
				color:form.find('input[name=color]').val().replace('#',''),
				name: (parseInt(/^(\d+)-\w+/.exec(that.last_label).pop())+1) + '-' +form.find('input[name=label]').val()
			}).then(function(){
				that.render();
				$(".facebox-close").click();
			});
			return false;
		};
	},
	createIssue: function() {
		var that = this;
		return function(){
			var form = $('form:visible');
			that.github.newIssue(that.owner,that.repo,{
				title:form.find("input[name='issue[title]']").val(),
				body: form.find("textarea[name='issue[body]']").val(),
				assignee: form.find(".assignee input[type=radio]:checked").val(),
				milestone: form.find(".milestone input[type=radio]:checked").val(),
				labels:form.find("a.selected input").get().map(function(input){return input.value;})
			},form.data('issue-id')).then(function(){
				that.render();
				$(".facebox-close").click();
			});
			return false;
		};
	},
    bindEvent: function () {
        var that = this;
        $('#jk-preview').click(function(){
            var data = {text: $('#issue_body').val()};
            that.github.markdown(data).then(function(result){
                if(result){
                    $('.comment-body.markdown-body.js-comment-body p').html(result);
                }
            });
        });
        $('.sidebar .color-label').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('selected');
        });
        $('.form-actions .primary.button').submit(function () {
            that.renderKanban();
        });
    },
	renderFaceBox: function() {
		var that = this;
		return function(e){
			e.preventDefault();
			if(this.id==='new-issue'){
				$('.facebox-content:visible').html(nunjucks.render('src/templates/create-issue.html'));
			}else if(this.id==='new-label'){
							$('.facebox-content:visible').html(nunjucks.render('src/templates/create-label.html'));	
			}else{
                Q.all([that.github.getIssues(that.owner,that.repo,null,$(this).data("issue-id")), that.github.getAssignees(that.owner,that.repo), that.github.getMilestones(that.owner,that.repo), that.github.getLabels(that.owner,that.repo)]).then(function(data) {
                    console.log(data);
                    var issue = data[0];
                    issue.assignees = data[1];
                    issue.milestones = data[2];
                    issue.all_labels = data[3];
                    $('.facebox-content').html(mynunjucks.render('src/templates/create-issue.html',issue));
                    that.updateLabelStatus(issue);
                }).then(that.bindEvent).then(that.bindUploadImageEvent);
			}
			return false;
		};
	},
    updateLabelStatus: function (issue) {
        var activeLabels = issue.labels;
        $.each(activeLabels, function(index, label) {
            $(".sidebar .color-label-list li[data-name=\""+ label.name + "\"] a").addClass("selected");
        })
    },
    bindUploadImageEvent: function() {
        $('#write_bucket_').bind("dragenter drop", function(){
            var dropbox = $('#write_bucket_'),
                message = $('.drag-and-drop', dropbox);
            dropbox.filedrop({
                paramname:'pic',

                maxfiles: 5,
                maxfilesize: 2, // in mb
                url: 'post_file.php',

                uploadFinished:function(i,file,response){
                    alert("finished");
                    //$.data(file).addClass('done');
                    // response is the JSON object that post_file.php returns
                },

                allowedfiletypes: ['image/jpeg','image/png','image/gif'],   // filetypes allowed by Content-Type.  Empty array means no restrictions
                allowedfileextensions: ['.jpg','.jpeg','.png','.gif'], // file extensions allowed. Empty array means no restrictions

                error: function(err, file) {
                    alert("error.................");
                    alert(err);
//                    switch(err) {
//                        case 'BrowserNotSupported':
//                            showMessage('Your browser does not support HTML5 file uploads!');
//                            break;
//                        case 'TooManyFiles':
//                            alert('Too many files! Please select 5 at most!');
//                            break;
//                        case 'FileTooLarge':
//                            alert(file.name+' is too large! Please upload files up to 2mb.');
//                            break;
//                        default:
//                            break;
//                    }
                },

                // Called before each upload is started
                beforeEach: function(file){
                    alert("before each...");
                },

                uploadStarted:function(i, file, len){
                    alert("started");
                    createImage(file);
                }

            });

            function createImage(file){

                var image = $('.comment-form-textarea');

                var reader = new FileReader();

                reader.onload = function(e){

                    // e.target.result holds the DataURL which
                    // can be used as a source of the image:

                    image.text(e.target.result);
                };

                // Reading the file as a DataURL. When finished,
                // this will trigger the onload function above:
                reader.readAsDataURL(file);

                // Associating a preview container
                // with the file, using jQuery's $.data():

                $.data(file,preview);
            }

            function showMessage(msg){
                message.html(msg);
            }
        });

    },
    closeButton: function(){
        var that = this;
        $('.remove-lane').on('click',function(event){
            event.preventDefault();
            var label = $(this).attr('data');
            that.github.deleteLane(that.owner,that.repo,label);
            that.render();
        })
    },
	render: function(){
		var that = this;
		that.renderHeader();
		return that.renderRepoSelector()
			.then(that.renderMilestone.bind(that))
			.then(that.renderKanban.bind(that))
			.then(function() {
				$('a[rel=facebox]').click(that.renderFaceBox());
			})
            .then(that.closeButton.bind(that))
			.catch(function(error){
				console.log(error);
			});
	}
};


