/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-10-25 10:51:57
 * @LastEditors: zch1999
 * @LastEditTime: 2021-03-02 15:52:45
 */
// var obj1 = (function () {
// 	var inner = "1-1";
// 	return {
// 		inner: "1-2",
// 		say: function () {
// 			console.log(inner);
// 			console.log(this.inner);
// 		},
// 	};
// })();
// var obj2 = { inner: "2-1" };
// obj1.say();
// obj2.say = obj1.say;
// obj2.say();

function fn(nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			return nums[i];
		}
	}
}
console.log(fn([1, 2]));
