var React = require('react');
var $ = require('jquery');
var r = require('ramda');
var IssueDetail = require('./issue-detail')

var Issue = React.createClass({
	changeHash: function(){
		React.renderComponent(
			<IssueDetail />,
			document.querySelector('.facebox-content')
		)

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
		var detailLink = "#/" + this.props.owner + "/" + this.props.repo + "/" + this.props.number;
		return (
			<div data-label={this.props.label} draggable="true" className="blankslate hide-buttons">
        <a className="octicon octicon-link-external link-external right" target="_blank" href={this.props.url}></a>
        <a data-issue-id={this.props.number} className="popable" rel="facebox" href={detailLink} onClick={this.changeHash}>
          
          <h4 className="list-group-item-name">{this.props.title}</h4>
        </a>
				{labelNodes}	
      </div>
						);
	}
});

var IssueColumn = React.createClass({
	render: function(){
		var issueNodes = this.props.issues.map((issue) => {
			return (
				<Issue labels={issue.labels} name={issue.name} number={issue.number} url={issue.html_url} title={issue.title} repo={this.props.repo} owner={this.props.owner}/>
			)
		})
		return (
			<div id={this.props.columnName} className="col">
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
		var getColumnLabel = r.filter((_)=>/\d+-(\w+)/.test(_.name))
		$.get("tests/data/labels.json", (result) => {
      if (this.isMounted()) {
        this.setState({
          columns: r.pluck("name", getColumnLabel(result)).sort(),
          labels: result
        });
      }
    }).then(
			$.get("tests/data/issues.json", (result) => {
				if (this.isMounted()) {
					var groupedIssue = r.foldl(
						(acc, column) => {
							acc[column] = [];
							return	acc;
						},
						{"0-Backlog":[]},
						this.state.columns)
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
		var columnNodes = this.state.columns.map( (column)=>{
			issueInColumn = this.state.groupedIssues[column]
			return (
				<IssueColumn columnName={column} issues={issueInColumn} owner='jcouyang' repo='gira'/>
			);
		});
		return (
			<div id="contributions-calendar">
				<div className="contrib-details grid lala">
				{columnNodes}
				</div>
			</div>
		);
	}
});

module.exports = IssueBoard;
