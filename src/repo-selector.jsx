var React = require('react');
var $ = require('jquery');

var Owner = React.createClass({
	changeOwner: function(e){
		e.stopPropagation();
		console.log(e.currentTarget);
		$(document).trigger("gira.changeOwner", [$(e.currentTarget).find('input').attr('name')])
	},
	render: function(){
		return (
			<div className="select-menu-item js-navigation-item" onClick={this.changeOwner}>
				<input type="radio" value="hubot" name={this.props.owner}  checked="false" />
				<span className="select-menu-item-icon octicon octicon-check"></span>

				<div className="select-menu-item-gravatar js-select-menu-item-gravatar">
					<img height="20" width="20" src={this.props.avatar} />
				</div>
				<div className="select-menu-item-text js-select-button-text">
					{this.props.owner}
				</div>
			</div>
						);
	}
});

var Repo = React.createClass({
	changeRepo: function(e){
		$(document).trigger('gira.changeRepo', [$(e.currentTarget).find('input').attr('name')]);
	},
	render: function(){
		return (
			<div className="select-menu-item js-navigation-item " onClick={this.changeRepo}>
				<input type="radio" value={this.props.name} name={this.props.name} checked="false" />
        <span className="select-menu-item-icon octicon octicon-check"></span>

        <div className="select-menu-item-text js-select-button-text">
					{this.props.name}
        </div>
			</div>
						);
	}
})

var OwnersList = React.createClass({
	render: function(){
		 var ownerNodes = this.props.data.map((owner, index) => {
      return (
        <Owner owner={owner.login} avatar={owner.avatar_url} />
      );
    });
    return (
			<div className="select-menu-list">
				{ownerNodes}
			</div>
    );
	}
});

var ReposList = React.createClass({
	render: function(){
		 var repoNodes = this.props.data.map((repo, index) => {
      return (
        <Repo name={repo.name} />
      );
    });
    return (
			<div className="select-menu-list">
				{repoNodes}
			</div>
    );
	}
});

var RepoSelector = React.createClass({
	getInitialState: function() {
		return {
			currentOwner:'',
			owners: [],
			currentRepo:'',
			repos: []			
		}
	},
	componentDidMount: function(){
		$(document).on("gira.changeOwner", (_, owner)=>{
			this.state.currentOwner = owner;
			$.get("tests/data/repo-blogist.json", (result) => {
				if (this.isMounted()) {
					this.setState({
						currentRepo: result[0].name,
						repos: result
					});
				}
			})
		}).on('gira.changeRepo', (_, repo) => {
			console.log(this.currentOwner, repo);
		});
		$.get("tests/data/user.json", (result) => {
      if (this.isMounted()) {
        this.setState({
          currentOwner: result[0].login,
          owners: result
        });
      }
    }).then(
			$.get("tests/data/repos.json", (result) => {
      if (this.isMounted()) {
        this.setState({
          currentRepo: result[0].name,
          repos: result
        });
      }
    })
		);
	},
	render: function() {
		return (
			<div className="repo-selector js-repo-selector ">
				<div className="repo-entry-form">
					<div className="entry-content">
						<div className="select-menu owner-select-menu js-menu-container js-select-menu js-owner-container js-owner-select">
							<span className="minibutton select-menu-button js-menu-target">
								<span className="js-select-button">
									{this.state.currentOwner}
								</span>
							</span>
							<div className="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
								<div className="select-menu-modal">
									<div className="select-menu-header">
										<span className="select-menu-title">Choose another owner</span>
										<span className="octicon octicon-remove-close js-menu-close"></span>
									</div>
									<OwnersList data={this.state.owners} />
								</div>
							</div>
						</div>
					</div>
					<div className="nwo-slash">/</div>
					<div className="select-menu owner-select-menu js-menu-container js-select-menu js-owner-container js-owner-select">
						<span className="minibutton select-menu-button js-menu-target">
							<span className="js-select-button">
								{this.state.currentRepo}
							</span>
						</span>
						<div className="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
							<div className="select-menu-modal">
								<div className="select-menu-header">
									<span className="select-menu-title">Choose another owner</span>
									<span className="octicon octicon-remove-close js-menu-close"></span>
								</div>
								<ReposList data={this.state.repos} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
})

module.exports = RepoSelector;
