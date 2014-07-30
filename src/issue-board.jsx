var React = require('react');
var $ = require('jquery');
var r = require('ramda');
var IssueDetail = require('./issue-detail')
var G = require('./github-api');
var g = new G('jcouyang','gira')
var Issue = React.createClass({
	dragStart: function(e) {
		console.log('dragStart')
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', e.currentTarget.id);
  },
	revealIssue: function(e){
		var issueLocation = $(e.currentTarget).attr('href').replace('#','')
		console.log(issueLocation)
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
		return (
			<div data-label={this.props.label} draggable="true" className="blankslate hide-buttons" onDragStart={this.dragStart}>
        <a data-issue-id={this.props.number} className="popable" rel="facebox" href={detailLink} onClick={this.revealIssue}>
          
          <h4 className="list-group-item-name">{this.props.title}</h4>
        </a>
				{labelNodes}	
      </div>
						);
	}
});

var IssueColumn = React.createClass({
	dragover: function (e) {
      if (e.preventDefault) e.preventDefault(); // allows us to drop
      $(e.currentTarget).removeClass("over").addClass('over');
      e.dataTransfer.dropEffect = 'move';
      return false;
  },
	drop: function (e) {
    e.stopPropagation();
    var column = e.currentTarget;
    var $issue = $('#' + e.dataTransfer.getData('text/plain'));
    g.deleteLabel($issue.attr('id'), $issue.data('label'))
      .then(function (labels) {
        g.addLabel($issue.attr('id'), _(labels).pluck('name').concat(column.id));
      });
    $(e.currentTarget).removeClass("over")
      .find('span.lbl')
      .append($($issue));
    return false;
  },
	render: function(){
		var issueNodes = this.props.issues.map((issue) => {
			return (
				<Issue labels={issue.labels} name={issue.name} number={issue.number} url={issue.html_url} title={issue.title} repo={this.props.repo} owner={this.props.owner}/>
			)
		})
		return (
			<div id={this.props.columnName} className="table-column" onDrop={this.drop} onDragOver={this.dragover}>
				<span className="num hide-buttons">{this.props.columnName}
					<a href="#" data={this.props.columnName} type="button" className="remove-lane">
						<span className="octicon octicon-remove-close close"></span>
					</a>
				</span>
				<span className="lbl">
					{issueNodes}
				</span>
			</div>
		)
	}
});

var IssueBoard = React.createClass({
	getInitialState: function() {
		return {
			groupedIssues:[],
			columns: [],
			labels: []
		}
	},
	componentDidMount: function(){
		g.repo=this.props.repo;
		g.owner=this.props.owner;
		var getColumnLabel = r.filter((_)=>/\d+-(\w+)/.test(_.name))
		g.getLabels().then((result) => {
      if (this.isMounted()) {
        this.setState({
          columns: r.pluck("name", getColumnLabel(result)).sort(),
          labels: result
        });
      }
    }).then(
			g.getIssues().then((result) => {
				console.log('issue',result)
				if (this.isMounted()) {
					var groupedIssue = r.foldl(
						(acc, column) => {
							acc[column] = [];
							return	acc;
						},
						{"0-Backlog":[]},
						this.state.columns)
					console.log("grouped", groupedIssue)
					this.setState({
						groupedIssues:  r.foldl(
							(acc, issue)=>{
								var columnlabel = getColumnLabel(issue.labels)
								if(columnlabel.length) {
									console.log(acc, columnlabel)
									acc[columnlabel[0].name] = acc[columnlabel[0].name].concat(issue);
								}else{
									acc['0-Backlog'] = acc['0-Backlog'].concat(issue);
								}
								return acc;
							},
							groupedIssue,
							result)
					});
				}
			})
		);
	},
	render: function() {
		var columns = this.state.columns;
		if(this.state.groupedIssues['0-Backlog'])
			columns.unshift('0-Backlog')
		var columnNodes = r.uniq(columns).map( (column)=>{
			issueInColumn = this.state.groupedIssues[column]
			console.log('new column', column, issueInColumn)
			return (
				<IssueColumn columnName={column} issues={issueInColumn} owner='jcouyang' repo='gira'/>
			);
		});
		return (
			<div>
				<div className="subnav">
					<a href="issues/new" className="button primary right" data-hotkey="c">
						New issue
					</a>
				</div>
				<div className="box-body">
					<div id="contributions-calendar">
						<div className="contrib-details grid lala">
							{columnNodes}
						</div>
					</div>
				</div>				
			</div> 
		);
	}
});

module.exports = IssueBoard;
