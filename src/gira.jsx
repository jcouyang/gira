var React = require('react');
var $ = require('jquery');
var RepoSelector = require('./repo-selector');
var IssueBoard = require('./issue-board')

console.log('asdf')
React.renderComponent(
  <RepoSelector/>,
  document.querySelector('.entry-title')
);
//   <IssueBoard />,
//   document.querySelector('#issue-board')
// )
