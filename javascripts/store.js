(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** @jsx React.DOM */
var store = function(){
};

store.get = function(key){
	console.log('store get')
	if (typeof GM_getValue != "undefined"){
		console.log('get from gm',GM_getValue(key),key)
		return GM_getValue(key);
	}else {
		console.log('get from ls')
		return localStorage.getItem(key);
	}
};

store.set = function(key, val){
		console.log('store get')
	if (typeof GM_setValue != "undefined"){
		console.log('set to gm', val)
		GM_setValue(key,val);
	}else {
		console.log('set to ls')
		localStorage.setItem(key,val);
	}
}

module.exports = store

},{}]},{},[1])