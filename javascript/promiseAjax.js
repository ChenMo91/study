/**
 * promise实现Ajax
 * @param  {[string]} url [请求地址]
 * @return {[object]}     [promise对象]
 */
function getJSON (url) {
	var promise = new Promise(function(resolve, reject){
		var xmlObj = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
		xmlObj.open("GET", url, true);
		xmlObj.onreadystatechange = handler;
		xmlObj.responseType = "json";
		xmlObj.setRequestHeader("Accept", "application/json");
		xmlObj.send();

		function handler() {
			if(this.readyState !== 4){
				return;
			}
			if(this.status === 200){
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		}
	});
	return promise;
}

getJSON('/post.json').then(function(json){
	console.log('Contents:' + json);
},function(error){
	console.error('出错了', error);
});