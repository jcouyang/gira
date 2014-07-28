var React = require('react');
var $ = require('jquery');

var Owner = React.createClass({
	render: function(){
		return (<div className="select-menu-item js-navigation-item ">
										<input type="radio" value="hubot" name={this.props.owner} id={this.props.owner} checked="false" />
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

var OwnersList = React.createClass({
	render: function(){
		 var ownerNodes = this.props.data.map(function(owner, index) {
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

var RepoSelector = React.createClass({
	getInitialState: function() {
		return {
		currentOwner:'',
		owners: []			
		}
	},
	componentDidMount: function(){
		$.get("tests/data/user.json", function(result) {
      if (this.isMounted()) {
        this.setState({
          currentOwner: result[0].login,
          owners: result
        });
      }
    }.bind(this));
	},
	render: function(){
		return (
			<div className="repo-selector js-repo-selector ">
				<div className="repo-entry-form">
					<div className="entry-content">
						<div className="select-menu owner-select-menu js-menu-container js-select-menu js-owner-container js-owner-select">
							<span className="minibutton select-menu-button js-menu-target">
								<span className="js-select-button">
									jcouyang
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
				</div>
			</div>
		);
	}
})

module.exports = RepoSelector;
