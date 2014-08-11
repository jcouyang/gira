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
		this.setState({value:creteria});
		return false;
	},
	handleFilterButton:function(creteria){
		this.setState({value:creteria});
		this.props.onFilterSubmit(creteria)
	},
	addFilter: function(){
		console.debug('adding filter')
		this.setState({value:'state:close'})
		this.props.onFilterSubmit('state:close')
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
						<button className="button select-menu-button js-menu-target" type="button" aria-haspopup="true">
							Filters
						</button>
						<div className="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="false">
							<div className="select-menu-modal">
								<div className="select-menu-list">
									<a href="#" className="select-menu-item js-navigation-item" onClick={this.handleFilterButton.bind(this,'state:open')}>
										<div className="select-menu-item-text">
											Open Issues and Pull Requests
										</div>
									</a>
									<a href="#" className="select-menu-item js-navigation-item" onClick={this.handleFilterButton.bind(this,'creator:' + this.props.owner)}>
										<div className="select-menu-item-text">
											Your Issues
										</div>
									</a>
									<a href="#" className="select-menu-item js-navigation-item" onClick={this.handleFilterButton.bind(this,'mentioned:' + this.props.owner)}>
										<div className="select-menu-item-text">
											Everything mentioning you
										</div>
									</a>
									<a href="#" className="select-menu-item js-navigation-item" onClick={this.handleFilterButton.bind(this,'assignee:' + this.props.owner)}>
										<div className="select-menu-item-text">
											Everything assigned to you
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
		
						<form className="subnav-search subnav-divider-right left" onSubmit={this.filterIssues}>
							<input name="q" id='issue-filter' value={this.state.value} className="subnav-search-input input-contrast" placeholder="Search all issues" type="text" value={this.state.value} ref="creteria" onChange={this.filterIssues}/>
							<span className="octicon octicon-search subnav-search-icon"></span>
						</form>
				</div>
			</div>
		)
	}
})
module.exports = FilterForm;
