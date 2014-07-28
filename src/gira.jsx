var React = require('react');
var $ = require('jquery');
var RepoSelector = require('./repo-selector');
React.renderComponent(
  <RepoSelector owner="jcouyang" />,
  document.querySelector('.repo-select-box')
);
