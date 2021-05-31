/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-26 17:40:27
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-26 17:58:56
 */
function jsonp(url, data = {}, callback) {
	let dataStr = "";
	for (key in data) {
		dataStr += `${key}=${data[key]}&`;
	}
	let cb_name = "jsonpCallback";
	dataStr += "callback=" + cb_name;
	let scriptBody = document.createElement("script");
	scriptBody.src = url + "?" + dataStr;
	window[cb_name] = function (data) {
		callback(data);
		document.removeChild(scriptBody);
	};
	document.body.appendChild(scriptBody);
}
