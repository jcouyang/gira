var store = function(){
};

store.get = function(key, callback){
	console.log('store get')
	if (typeof GM_getValue != "undefined"){
		console.log('get from gm',GM_getValue(key),key)
		callback(GM_getValue(key));
	}else {
		console.log('get from ls')
		callback(localStorage.getItem(key));
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
