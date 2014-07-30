var React = require('react');
var $ = require('jquery');
var IssueBoard = require('./issue-board')

var [,owner,repo,] = window.location.pathname.split("/");
console.log('loading issue board for ',owner,repo )

React.renderComponent(
  <IssueBoard owner={owner} repo={repo}/>,
  document.querySelector('#js-repo-pjax-container')
)
