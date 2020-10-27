/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-10-25 10:51:57
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-10-25 10:53:26
 */
var obj1 = (function () {
	var inner = "1-1";
	return {
		inner: "1-2",
		say: function () {
			console.log(inner);
			console.log(this.inner);
		},
	};
})();
var obj2 = { inner: "2-1" };
obj1.say();
obj2.say = obj1.say;
obj2.say();
