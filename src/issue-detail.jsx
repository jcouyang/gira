var React = require('react');
var $ = require('jquery');
var r = require('ramda');

var AssigneeList = React.createClass({
	changeAssignee: function(e){
		e.stopPropagation();
		console.log(e.currentTarget);
		$(document).trigger("gira.changeAssignee", [$(e.currentTarget).find('input').attr('name')])
	},
	render: function(){
		var assigeeNodes = this.props.assigees.map((assignee)=>{
			return (
				<div className="select-menu-item js-navigation-item" role="menuitem">
					<span className="select-menu-item-icon octicon octicon-check"></span>
					<div className="select-menu-item-gravatar js-select-menu-item-gravatar">
            <span className="avatar">
							<img height="20" width="20" alt={assignee.login} src={assignee.avatar_url} />
						</span>
					</div>

					<div className="select-menu-item-text">
            <h4>{assignee.login}<span className="description"></span></h4>
					</div>					
				</div>
			)
		})
		return (
			<div className="select-menu-modal-holder js-menu-content js-navigation-container js-active-navigation-container" aria-hidden="false">
				<div className="select-menu-list">

					<div className="select-menu-clear-item select-menu-item js-navigation-item js-clear-assignee js-no-current-assignee" role="button" aria-label="Clear assignee">
						<input type="radio" name="issue[assignee]" value="" />
						<span className="select-menu-item-icon octicon octicon-remove-close"></span>

						<div className="select-menu-item-text">Clear assignee</div>
					</div>

					<div data-filterable-for="assignee-filter-field" data-filterable-type="fuzzy" role="menu">
						
						{assigeeNodes}

						<div className="select-menu-no-results">Nothing to show</div>

					</div>


				</div>

			</div>

		)
	}
})


var AssigneeSelector = React.createClass({
	getInitialState: function(){
		return {
			assignees: []
		};

	},
	componentDidMount: function() {
		$.get("tests/data/user.json", (result) => {
      if (this.isMounted())
        this.setState({
          assignees: result
        })

    })
	},
	render: function(){
		return (
			<div className="assignee infobar-widget">
				<span className="css-truncate text js-assignee-infobar-item-wrapper">{this.props.assignee}</span>
				<div className="select-menu js-menu-container js-select-menu js-composer-assignee-picker active">
					<span className="minibutton select-menu-button icon-only js-menu-target selected" role="button" aria-label="Assign someone to this issue">
						<span className="octicon octicon-gear"></span>
					</span>
					<AssigneeList assignees={this.state.assignees} />
				</div>
			</div>
			)
		}

})

var IssueDetail = React.createClass({
	getInitialState: function(){
		return {
			issue: {}
		};

	},
	componentDidMount: function() {
		$.get("tests/data/sample-issue.json", (result) => {
      if (this.isMounted())
        this.setState({
          issue: result
        })

    })
	},
	
	render: function(){
		return (
			<div>
				<form data-issue-id="" accept-charset="UTF-8" onsubmit="return gira.createIssue()()" className="js-new-issue-form" id="new_issue" method="post">
					<div className="columns discussion-timeline-cols">
						<div className="column main">
							<div className="discussion-bubble composer">
								<a href="https://github.com/"><img height="48" width="48" alt="" className="discussion-bubble-avatar" src=""/></a>

								<div className="discussion-bubble-content bubble">
									<div className="discussion-bubble-inner">

										<div className="discussion-topic">


											<div className="discussion-topic-header">
												<dl className="form">
													<div className="fieldWithErrors"><label className="discussion-title-label" for="issue_title">Title</label></div>
													<dd>
														<div className="fieldWithErrors"><input type="text" value={this.state.issue.title} autofocus="autofocus" className="required title js-auto-save" id="issue_title" name="issue[title]" placeholder="Title" required="required" size="30" tabindex="1"/></div>
													</dd>
												</dl>
											</div>


											<div className="composer-infobar js-infobar">
												<AssigneeSelector />
												<div className="assignee infobar-widget">
													<span className="css-truncate text js-assignee-infobar-item-wrapper">No one will be assigned</span>


													<div className="select-menu js-menu-container js-select-menu js-composer-assignee-picker">
														<span className="minibutton select-menu-button icon-only js-menu-target" role="button" aria-label="Assign someone to this issue">
															<span className="octicon octicon-gear"></span>
														</span>

														<div className="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">

															<div className="select-menu-modal">
																<div className="select-menu-header">
																	<span className="select-menu-title">Assign someone to this issue</span>
																	<span className="octicon octicon-remove-close js-menu-close"></span>
																</div>


																<div className="select-menu-error-shell"><span className="select-menu-error js-select-menu-error">Sorry, an error occurred</span>
																</div>

																<div className="select-menu-filters">
																	<div className="select-menu-text-filter">
																		<input type="text" id="assignee-filter-field" className="js-filterable-field js-navigation-enable" placeholder="Filter people" aria-label="Type or choose a name"/>
																	</div>
																</div>
																<div className="select-menu-list">

																	<div className="select-menu-clear-item select-menu-item js-navigation-item js-clear-assignee js-no-current-assignee selected" role="button" aria-label="Clear assignee">
																		<input type="radio" name="issue[assignee]" value=""/>
																		<span className="select-menu-item-icon octicon octicon-remove-close"></span>

																		<div className="select-menu-item-text">Clear assignee</div>
																	</div>
																	<div className="select-menu-no-results">Nothing to show</div>

																</div>
															</div>
														</div>
													</div>

												</div>

											</div>


											<div className="comment-content">

												<dl className="form body">
													<dd>


														<div className="js-previewable-comment-form previewable-comment-form preview-selected" data-preview-url="#">
															<div className="comment-form-head tabnav">
																<ul className="tabnav-tabs">
																	<li><a href="#write_bucket_" className="tabnav-tab write-tab js-write-tab">Write</a></li>
																	<li><a href="#preview_bucket_" className="tabnav-tab preview-tab js-preview-tab selected" id="jk-preview">Preview</a>
																	</li>
																</ul>
																<span className="tabnav-right">
																	<span className="tabnav-widget text">Comments are parsed with <a href="https://help.github.com/articles/github-flavored-markdown" className="gfm-help" target="_blank">GitHub
																		Flavored Markdown</a></span>
																</span>
															</div>

															<div id="write_bucket_" className="write-content upload-enabled is-default" data-model="assets">

																<a original-title="Zen Mode" href="#fullscreen_issue_body" className="enable-fullscreen js-enable-fullscreen tooltipped
																	 leftwards ">
																	<span className="octicon octicon-screen-full"></span>
																</a>

																<textarea name="issue[body]" tabindex="1" id="issue_body" placeholder="Leave a comment" className="comment-form-textarea js-comment-field js-size-to-fit js-quote-selection-target  input-with-fullscreen-icon" data-suggester="_new_preview_suggester" value={this.state.issue.body}></textarea>


																<p className="drag-and-drop">
																	<span className="default">
																		Attach images by 
																		<input type="file" multiple="multiple" className="manual-file-chooser js-manual-file-chooser"/>
																		<a className="manual-file-chooser-text" href="#">selecting them</a>.
																	</span>
																	<span className="loading">
																		<img height="16" width="16" alt="Octocat-spinner-32" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif"/> Uploading your images…
																	</span>
																	<span className="error bad-file">
																		Unfortunately we don't support that file type yet. Please use PNG, GIF, or JPG.
																	</span>
																	<span className="error too-big">
																		Yowza, that's a big file. Please submit an image file smaller than 5MB.
																	</span>
																	<span className="error bad-browser">
																		This browser doesn't support image attachments.
																	</span>
																	<span className="error failed-request">
																		Something went really wrong and we can't process that image.
																	</span>
																</p>

															</div>
															<div id="preview_bucket_" className="preview-content js-preview-bucket">


																<div id="openstruct-70192145241500" className="comment js-comment js-task-list-container" data-body-version="">

																	<div className="comment-content">

																		<div className="edit-comment-hide">
																			<div className="comment-body markdown-body  js-comment-body"><p></p></div>
																		</div>

																	</div>
																</div>


															</div>


															<div className="suggester-container">
																<div className="suggester js-navigation-container" id="_new_preview_suggester" data-url="/jcouyang/gira/suggestions/issue">
																</div>
															</div>
														</div>

													</dd>
												</dl>

											</div>
										</div>

									</div>
								</div>

								<div className="form-actions">

									<button type="submit" className="button primary" tabindex="1" data-disable-invalid="" data-disable-with="">
										
										Edit issues
										
									</button>
								</div>

							</div>

						</div>

					</div>
				</form>				
			</div> 

		)
	}
})


module.exports = IssueDetail;

