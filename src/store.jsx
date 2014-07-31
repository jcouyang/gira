var store = function(){
};

store.get = function(key){
	if (typeof GM_getValue != "undefined"){
		console.log('get from gm',GM_getValue(key),key)
		return GM_getValue(key);
	}else {
		console.log('get from ls')
		return localStorage.getItem(key);
	}
};

store.set = function(key, val){
	if (typeof GM_setValue != "undefined"){
		console.log('get to gm')
		return GM_setValue(key,val);
	}else {
		console.log('set to ls')
		return localStorage.setItem(key,val);
	}
}

module.exports = store
