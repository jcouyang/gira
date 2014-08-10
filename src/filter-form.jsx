var React = require('react');
var $ = require('jquery');
var FilterForm = React.createClass({
	getInitialState: function() {
    return {value: ''};
  },
	createLabel: function(e){
		console.log('create label')
		var labelLocation = $(e.currentTarget).attr('href').replace('#','')
		$(".facebox-content").load(labelLocation.concat(" #new_label"))
	},
	createIssue: function(e){
		console.debug('create issue')
		var issueLocation = $(e.currentTarget).attr('href').replace('#','')
		console.debug(issueLocation)
		$(".facebox-content").load(issueLocation.concat(" #issues_next"));
	},
	filterIssues: function(e) {
		e.stopPropagation();
		var creteria = $('#issue-filter').val();		
		this.props.onFilterSubmit(creteria);
		this.state.setState({value:creteria});
		return false;
	},
	handleFilterButton:function(type){
		var creteria='is:'+type;
		this.props.onFilterSubmit(creteria)
		this.state.setState({value:creteria});
	},
	addFilter: function(){
		this.state.setState({value:'state:close'})
	},
	componentDidMount: function(){
		$(document).on("close.facebox", ()=>{
			console.log('closed facebox')
		})
	},
	render:function(){
		return (
			<div className="subnav">
				<a  className="button primary right" data-hotkey="l" rel="facebox" href="#issues/new" onClick={this.createIssue}>
					New issue
				</a>
				<a href="#labels"  rel="facebox" href="#/jcouyang/gira/labels" className="button primary right" data-hotkey="c" onClick={this.createLabel}>
					New Label
				</a>
				<div className="right">
					<div className="left select-menu js-menu-container js-select-menu subnav-search-context">
		
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
module.exports = FilterForm;
