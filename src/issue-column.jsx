var React = require('react');
var $ = require('jquery');
var r = require('ramda');
var Issue = require('./issue')
var IssueColumn = React.createClass({
	dragover: function (e) {
		console.log('over me')
      if (e.preventDefault) e.preventDefault(); // allows us to drop
      $(e.currentTarget).removeClass("over").addClass('over');
      e.dataTransfer.dropEffect = 'move';
      return false;
  },
	drop: function (e) {
    e.stopPropagation();
    var column = e.currentTarget;
    var $issue = $('#issue-' + e.dataTransfer.getData('text/plain'));
    this.props.g.deleteLabel($issue.data('issue-id'), $issue.data('label'))
      .then((labels) => {
        this.props.g.addLabel($issue.data('issue-id'), r.pluck('name')(labels).concat(column.id));
      });
    $(e.currentTarget)
      .find('span.lbl')
      .append($($issue));
    return false;
  },
	render: function(){
		var issueNodes = this.props.issues.map((issue) => {
			return (
				<Issue labels={issue.labels} name={issue.name} number={issue.number} url={issue.html_url} title={issue.title} repo={this.props.repo} owner={this.props.owner} label={this.props.columnName} milestone={issue.milestone} comments={issue.comments} user={issue.user} pull={issue.pull_request}/>
			)
		})
		return (
			<div id={this.props.columnName} className="contrib-column table-column" onDrop={this.drop} onDragOver={this.dragover}>
				<span className="contrib-number hide-buttons">{this.props.columnName}
				</span>
				<span className="lbl">
					{issueNodes}
				</span>
			</div>
		)
	}
});
module.exports = IssueColumn;
