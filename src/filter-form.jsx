var FilterForm = React.createClass({
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
		var creteria = e.target.value;		
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
										<a className="select-menu-item js-navigation-item" href="#" onChange={this.addFilter}>
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
module.exports = FilterForm;
