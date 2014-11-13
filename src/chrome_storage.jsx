var store = function(){
};

store.get = function(key, callback){
	chrome.storage.local.get(key, callback)
};

store.set = function(keyval, callback){
  chrome.storage.local.set(keyval,callback)
}

module.exports = store
