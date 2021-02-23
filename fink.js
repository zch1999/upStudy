/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-23 15:09:16
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-23 15:15:12
 */
function findK(nums, k) {
	let obj = {};
	nums.forEach((item) => {
		if (obj[item]) {
			obj[item] += 1;
		} else {
			obj[item] = 1;
		}
	});
	console.log(
		Object.keys(obj)
			.sort((a, b) => obj[b] - obj[a])
			.splice(0, k)
	);
}

findK([3, 3, 3, 4, 4, 5], 2);
