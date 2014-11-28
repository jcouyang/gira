(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** @jsx React.DOM */
var store = function(){
};

store.get = function(key, callback){
	console.log('store get')
	if (typeof GM_getValue != "undefined"){
		console.log('get from gm',GM_getValue(key),key)
		callback({access_token:GM_getValue(key)});
	}else {
		console.log('get from ls')
		callback({access_token:localStorage.getItem(key)});
	}
};

store.set = function(keyval, callback){
		console.log('store get')
	if (typeof GM_setValue != "undefined"){
		callback(GM_setValue(keyval.key, keyval.vals));
	}else {
		console.log('set to ls')
		callback(localStorage.setItem(keyval.key,keyval.val));
	}
}

module.exports = store

},{}]},{},[1])