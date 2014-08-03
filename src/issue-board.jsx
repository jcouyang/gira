var React = require('react');
var $ = require('jquery');
var r = require('ramda');
var G = require('./github-api');
var g = new G('jcouyang','gira')
var Issue = React.createClass({
	dragStart: function(e) {
		console.log('dragStart')
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', $(e.currentTarget).data('issue-id'));
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
		console.log('drop',e.dataTransfer.getData('text/plain'))
    var column = e.currentTarget;
    var $issue = $('#issue-' + e.dataTransfer.getData('text/plain'));
    g.deleteLabel($issue.data('issue-id'), $issue.data('label'))
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
				<Issue labels={issue.labels} name={issue.name} number={issue.number} url={issue.html_url} title={issue.title} repo={this.props.repo} owner={this.props.owner} label={this.props.columnName}/>
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
	fetchIssues: function(){
		console.log('fetching issue')
		return g.getIssues(this.state.filter).then((result) => {
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

		if(filters.length>0){
			this.setState({
				filter: r.foldl((acc, filter) => {
					console.log(filter);
					var [key, val] = filter.split(':')
					acc[key] = val;
					return acc;
				}, {}, filters)
			});
			this.fetchIssues().then(()=>{
				if(keyword.length>0){
					console.log(keyword)
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
				}				
			});
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
		g.owner = this.props.owner;
		g.repo = this.props.repo;
		if (this.isMounted()) {
			g.getLabels().then((result) => {		
        this.setState({
          columns: r.pluck("name", getColumnLabel(result)).sort(),
          labels: result
        });

			}).then(
				g.getIssues(this.state.filter).then((result) => {
					if (this.isMounted()) {
						var groupedIssues = groupIssues(columnizeIssues(this.state.columns))(result);
						this.setState({
							originalGroupedIssues: groupedIssues,
							groupedIssues:  groupedIssues
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
			issueInColumn = this.state.groupedIssues[column]
			return (
				<IssueColumn columnName={column} issues={issueInColumn} owner='jcouyang' repo='gira'/>
			);
		});
		return (
			<div>
				<FilterForm onFilterSubmit={this.handleFilterSubmit}/>
				
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

FilterForm = React.createClass({
	getInitialState: function() {
    return {value: ''};
  },
	createLabel: function(e){
		var labelLocation = $(e.currentTarget).attr('href').replace('#','')
		$(".facebox-content").load(labelLocation.concat(" #new_label"))
	},
	createIssue: function(e){
		var issueLocation = $(e.currentTarget).attr('href').replace('#','')
		$(".facebox-content").load(issueLocation.concat(" #issues_next"));
	},
	filterIssues: function(e) {
		e.stopPropagation();
		var creteria = this.refs.creteria.getDOMNode().value;
		
		this.props.onFilterSubmit(creteria);
		this.state.setState({value:creteria});
		return false;
	},
	handleFilterButton:function(type){
		var creteria='is:'+type;
		this.props.onFilterSubmit(creteria)
		this.state.setState({value:creteria});
	},
	render:function(){
		return (
			<div className="subnav">
				<a href="#issues/new" className="button primary right" data-hotkey="c" rel="facebox" onClick={this.createIssue}>
					New issue
				</a>
				<a href="#/jcouyang/gira/labels" className="button primary right" data-hotkey="c" rel="facebox" onClick={this.createLabel}>
					New Label
				</a>
				<div className="right">
					<div className="left select-menu js-menu-container js-select-menu subnav-search-context">
						<div className="left select-menu js-menu-container js-select-menu subnav-search-context">
							<button aria-haspopup="true" type="button" className="button select-menu-button js-menu-target">
								Filters
							</button>
							<div aria-hidden="false" className="select-menu-modal-holder js-menu-content js-navigation-container js-active-navigation-container">
								<div className="select-menu-modal">
									<div className="select-menu-list">
										<a className="select-menu-item js-navigation-item" href="#">
											<div className="select-menu-item-text">
												Open issues and pull requests
											</div>
										</a>
										<a className="select-menu-item js-navigation-item navigation-focus" href="#">
											<div className="select-menu-item-text">
												Your issues
											</div>
										</a>
										<a className="select-menu-item js-navigation-item" href="/jcouyang/gira/issues?q=is%3Aopen+is%3Apr+author%3Ajcouyang">
											<div className="select-menu-item-text">
												Your pull requests
											</div>
										</a>
										<a className="select-menu-item js-navigation-item" href="/jcouyang/gira/issues?q=is%3Aopen+assignee%3Ajcouyang">
											<div className="select-menu-item-text">
												Everything assigned to you
											</div>
										</a>
										<a className="select-menu-item js-navigation-item" href="/jcouyang/gira/issues?q=is%3Aopen+mentions%3Ajcouyang">
											<div className="select-menu-item-text">
												Everything mentioning you
											</div>
										</a>
										<a target="_blank" className="select-menu-item js-navigation-item" href="https://help.github.com/articles/searching-issues">
											<span className="select-menu-item-icon octicon octicon-link-external"></span>
											<div className="select-menu-item-text">
												<strong>View advanced search syntax</strong>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						<form className="subnav-search subnav-divider-right left" onSubmit={this.filterIssues}>
							<input name="q" id='issue-filter' value={this.state.value} className="subnav-search-input input-contrast" placeholder="Search all issues" type="text" ref="creteria" onChange={this.filterIssues}/>
							<span className="octicon octicon-search subnav-search-icon"></span>
						</form>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = IssueBoard;
