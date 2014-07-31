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
