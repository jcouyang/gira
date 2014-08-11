var React = require('react');
var $ = require('jquery');
var r = require('ramda')
var rejectColumnLabel = r.filter((label)=>!(/\d+-(\w+)/.test(label.name)))

var Issue = React.createClass({
	dragStart: function(e) {
		console.log('dragStart')
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', $(e.currentTarget).data('issue-id'));
  },
	revealIssue: function(e){
		var issueLocation = $(e.currentTarget).attr('href').replace('#','')
		$(".facebox-content").load(issueLocation.concat(" #issues_next"));
	},
	render: function(){
		var labelNodes = rejectColumnLabel(this.props.labels).map((label)=>{
			var colorClass = "label labelstyle-#".concat(label.color);
			var colorStyle = {"background-color":"#".concat(label.color)};
			return (
				<span className="labels">
					<span data-name={label.name}  className={colorClass} style={colorStyle}>{label.name}</span>
				</span>
			)
		})
		
		var detailLink = "#/" + this.props.owner + "/" + this.props.repo + "/issues/" + this.props.number;
		var issueid = "issue-" + this.props.number
		var showMilestone = {
			display: "block"
		}
		var milestoneNode = this.props.milestone? (
			<a className="milestone-link css-truncate tooltipped tooltipped-n" aria-label="View all issues in this milestone" href={'/'+ this.props.owner + '/'+ this.props.repo + '/milestones/' + this.props.milestone.title }>
        <span className="octicon octicon-milestone"></span>
        <span className="css-truncate-target">
					{this.props.milestone.title}
        </span>
      </a>
		):""
		var commentClass = this.props.comments > 0?"issue-comments-link left":"issue-comments-link left no-comment"
		return (
			<div id={issueid} data-issue-id={this.props.number} data-label={this.props.label} draggable="true" className="blankslate hide-buttons" onDragStart={this.dragStart}>
        <a data-issue-id={this.props.number} className="popable" rel="facebox" href={detailLink} onClick={this.revealIssue}>          
          <h4 className="list-group-item-name">{this.props.title}</h4>
        </a>
				{labelNodes}
				{milestoneNode}
				
				<a className={commentClass}>
					<span className="octicon octicon-comment"></span>
					{this.props.comments}
				</a>

				<a href='#' aria-label={"View everything assigned to" + this.props.user.login} className="tooltipped tooltipped-s right">
          <img alt={this.props.user.login}  src={this.props.user.avatar_url} height="16" width="16"/>
				</a>
      </div>
						);
	}
});
module.exports = Issue;
