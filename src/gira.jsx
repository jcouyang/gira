var React = require('react');
var $ = require('jquery');
var RepoSelector = require('./repo-selector');
var IssueBoard = require('./issue-board')


React.renderComponent(
  <RepoSelector/>,
  document.querySelector('.repo-select-box')
);


React.renderComponent(
  <IssueBoard />,
  document.querySelector('#issue-board')
)
