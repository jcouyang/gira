$('<li><a class="tabnav-tab" href="#gira">GIRA</a></li>')
	.appendTo($("#issues_next .tabnav-tabs"))
	.click(function(){
		var $this = $(this);
		$this.find('a').addClass("selected");
	  $this.siblings().find('a').removeClass('selected');
		$.when($.getJSON(REPO_URL+'/milestones'), $.getJSON(REPO_URL+'/issues')).done(function(milestones,issues){
			var _issues = _(issues[0]);
			markdownTohtml(_issues, renderGira(milestones[0]));
	
		});
	});

function renderGira(milestones){
	return function(_issues){
		var milestoneWithIssue= _(milestones)
					.map(function(milestone){
						milestone.issues = _issues.filter(function(issue){
							return !!issue.milestone && milestone.id === issue.milestone.id;
						});
						return milestone;
					});
		var compiled =  nunjucks.render('gira/templates/gira.html', {milestones: milestoneWithIssue});
		$('#issues_list').append(compiled).find('div').remove('.column');
		draggablify();
	};
}
function markdownTohtml(_issues, callback){
	var bodies = _issues.pluck("body").join('\n# //////////////////\n');
	$.ajax({
		url: 'https://api.github.com/markdown',
		type: 'post',
		dataType: "json",
		data: JSON.stringify({text:bodies, mode:'gfm',context:'github/gollum'})
	}).always(function(data){
		data.responseText.split('<h1>//////////////////</h1>').forEach(function(md,index){
			_issues.value()[index].body=md;
		});
		callback(_issues);
	});
}
function draggablify(){
	var $issues = $('#issues_list .contrib-details.grid .col .lbl a');
	$issues.on('dragstart', function (e) {
		e.originalEvent.dataTransfer.effectAllowed = 'move';
		e.originalEvent.dataTransfer.setData('text/html', this.id);
	}); 
	$(".col").on('dragover', function (e) {
		if (e.preventDefault) e.preventDefault(); // allows us to drop
		$(this).removeClass("over").addClass('over');
		e.originalEvent.dataTransfer.dropEffect = 'move';
		return false;
	}).on('drop', function (e) {
		if (e.stopPropagation) e.stopPropagation();
		var issueId = e.originalEvent.dataTransfer.getData('text/html');
		$.ajax({
			url: REPO_BASE+'/issues/milestone',
			type: 'post',
			data: {
				_method:	'put',
				authenticity_token:token,
				"issues[]": issueId.replace('issue-',''),
				milestone: this.id
			}
		});
		$(this).removeClass("over")
			.find('span.lbl')
			.append($('#'+issueId));
		return false;
	}); 
}
