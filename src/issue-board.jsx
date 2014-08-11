var React = require('react');
var $ = require('jquery');
var r = require('ramda');
var IssueColumn = require('./issue-column')
var FilterForm = require('./filter-form')
var getColumnLabel = r.filter((_)=>/\d+-(\w+)/.test(_.name))

var columnizeIssues = r.foldl(
	(acc, column) => {
		acc[column] = [];
		return	acc;
	},
	{"0-Backlog":[]});

var groupIssues = r.foldl(
	(acc, issue)=>{
		var columnlabel = getColumnLabel(issue.labels)
		if(columnlabel.length) {
			acc[columnlabel[0].name] = acc[columnlabel[0].name].concat(issue);
		}else{
			acc['0-Backlog'] = acc['0-Backlog'].concat(issue);
		}
		return acc;
	});

var IssueBoard = React.createClass({
	fetchIssues: function(newfilter){
		console.log('fetching issue')
		return this.props.g.getIssues(newfilter).then((result) => {
			if (this.isMounted()) {
				var groupedIssues = groupIssues(columnizeIssues(this.state.columns))(result);
				this.setState({
					originalGroupedIssues: groupedIssues,
					groupedIssues:  groupedIssues
				});
			}
		})
	},
	handleFilterSubmit: function(creteria){
		creteria = creteria.replace(/ +(?= )/g,'');
		var filters = r.filter((_)=>{
			return _.indexOf(':') >= 0;	
		})(creteria.split(' '));
		var keyword = r.filter((_)=>{
			return _.indexOf(':') < 0;	
		})(creteria.split(' '));
		var fetchedIssues = $.Deferred().resolve('hehe');
		if(filters.length>0){
			var newfilter = r.foldl((acc, filter) => {
					console.log(filter);
					var [key, val] = filter.split(':')
					acc[key] = val;
					return acc;
				}, {}, filters)
			this.setState({
				filter: newfilter
			});
			fetchedIssues = this.fetchIssues(newfilter);
		}
		if(keyword.length>0){
			console.log(keyword)
			fetchedIssues.then(()=>{
				var searchIn = function(text){
					return r.foldl((acc, _)=>{
						return acc && new RegExp(_,"ig").test(text);
					}, true)
				}
				var creteriaFilter = r.filter((_) => {
					return searchIn(_.title.concat(_.body))(keyword);
				})
				var originalIssues = this.state.originalGroupedIssues;
				this.setState({
					groupedIssues:r.foldl(
						(acc, column) =>{
							acc[column] = creteriaFilter(originalIssues[column])
							return acc
						},
						{},
						this.state.columns)
				})
			})
		}
	},
	getInitialState: function() {
		return {
			filter:{state:'open'},
			originalIssues:{},
			groupedIssues:{},
			columns: [],
			labels: []
		}
	},
	componentDidMount: function(){
		if (this.isMounted()) {
			this.props.g.getLabels().then((result) => {		
        this.setState({
          columns: r.pluck("name", getColumnLabel(result)).sort(),
          labels: result
        });

			}).then(
				this.props.g.getIssues(this.state.filter).then((result) => {
					if (this.isMounted()) {

						var groupedIssues = groupIssues(columnizeIssues(this.state.columns))(result);
						this.setState({
							originalGroupedIssues: groupedIssues,
							groupedIssues: groupedIssues
						});
					}
				})
			);
		}
	},
	render: function() {
		var columns = this.state.columns;
		if(this.state.groupedIssues['0-Backlog'])
			columns.unshift('0-Backlog')
		var columnNodes = r.uniq(columns).map( (column)=>{
			var issueInColumn = this.state.groupedIssues[column]
			return (
				<IssueColumn g={this.props.g} columnName={column} issues={issueInColumn} owner={this.props.g.owner} repo={this.props.g.repo}/>
			);
		});
		return (
			<div>
				<FilterForm onFilterSubmit={this.handleFilterSubmit} owner={this.props.g.owner}/>
				
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
