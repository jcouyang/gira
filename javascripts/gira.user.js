// ==UserScript==
// @name gira
// @namespace oyanglul.us
// @description gira test
// @include https://github.com/*/*/issues
// @include https://github.com/*/*/issues#*
// @include https://github.com/*/*/issues/
// @include http://getgira.github.io/?code*
// @version 1
// @grant GM_xmlhttpRequest
// @grant GM_addStyle
// @grant GM_getResourceText
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_deleteValue
// @resource css https://rawgit.com/jcouyang/gira/master/stylesheets/gira.css
// ==/UserScript==
var css = GM_getResourceText('css');
GM_addStyle(css);
console.log('resource loaded');
