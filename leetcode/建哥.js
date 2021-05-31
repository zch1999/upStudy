/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-03-08 23:16:16
 * @LastEditors: zch1999
 * @LastEditTime: 2021-03-09 16:27:41
 */
function continuityArr(arr) {
	arr.sort((a, b) => a - b);
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		let j = i + 1;
		if (arr[i] == arr[j] - 1) {
			let temp = 1;
			while (arr[j] - temp == arr[i]) {
				j++;
				temp++;
			}
			res.push(`${arr[i]}->${arr[j - 1]}`);
			i = j - 1;
		} else if (arr[i] !== arr[i - 1]) {
			res.push(`${arr[i]}`);
		}
	}
	return res;
}

console.log(continuityArr([7, 2, 11, 2, 1, 0, 2, 4, 5, 10, 13, 14, 15, 19]));
