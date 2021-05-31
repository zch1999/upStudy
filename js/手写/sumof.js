/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-03-07 21:11:01
 * @LastEditors: zch1999
 * @LastEditTime: 2021-03-07 21:42:45
 */
function add(...args) {
	add.value || (add.value = 0);
	add.value = args.reduce((acc, cur) => acc + cur, add.value);
	add.sumOf = () => add.value;
	return add;
}

// function add(...param) {
// 	if (add.value === undefined) {
// 		add.value = 0;
// 	}
// 	add.sumOf = () => add.value;
// 	add.value = param.reduce((all, item) => all + item, add.value);
// 	return add;
// }

console.log(add(2)(3, 4).sumOf());
