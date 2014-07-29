var React = require('react');
var $ = require('jquery');
var RepoSelector = require('./repo-selector');
var IssueBoard = require('./issue-board')
var IssueDetail = require('./issue-detail')

React.renderComponent(
  <RepoSelector/>,
  document.querySelector('.repo-select-box')
);


React.renderComponent(
  <IssueBoard />,
  document.querySelector('#issue-board')
)


React.renderComponent(
  <IssueDetail />,
  document.querySelector("#facebox1")
)
