var React = require('react');
var $ = require('jquery');

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
		var labelNodes = this.props.labels.map((label)=>{
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
		return (
			<div id={issueid} data-issue-id={this.props.number} data-label={this.props.column} draggable="true" className="blankslate hide-buttons" onDragStart={this.dragStart}>
        <a data-issue-id={this.props.number} className="popable" rel="facebox" href={detailLink} onClick={this.revealIssue}>
          
          <h4 className="list-group-item-name">{this.props.title}</h4>
        </a>
				{labelNodes}	
      </div>
						);
	}
});
module.exports = Issue;
