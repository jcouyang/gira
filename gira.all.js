var REPO_BASE = $('meta[property="og:url"]').attr('content');
var REPO_URL = 'https://api.github.com/repos/' + $('meta[name=octolytics-dimension-repository_nwo]').attr('content');
var token= $('meta[name="csrf-token"]').attr('content');


$('<li><a class="tabnav-tab" href="#gira">GIRA</a></li>')
	.appendTo($("#issues_next .tabnav-tabs"))
	.click(function(){
		var $this = $(this);
		$this.find('a').addClass("selected");
	  $this.siblings().find('a').removeClass('selected');
		$.when($.getJSON(REPO_URL+'/milestones'), $.getJSON(REPO_URL+'/issues')).done(function(milestones,issues){
			var _issues = _(issues[0]);
			var milestoneWithIssue= _(milestones[0])
						.map(function(milestone){
							milestone.issues = _issues.filter(function(issue){
								return !!issue.milestone && milestone.id === issue.milestone.id;
							});
							return milestone;
						});
			var compiled =  nunjucks.render('data/templates/gira.html', {
				milestones: milestoneWithIssue});

			$(compiled).prepend($('#issues_list style'));
			$('#issues_list').html(compiled);
			draggablify();
		});
	});

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
