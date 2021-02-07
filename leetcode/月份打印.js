/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-06 09:52:30
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-06 10:08:49
 */

function printMonth(year, month, day) {
	let res = [];
	let two = year % 4 == 0 ? 29 : 28;
	let tmp = {
		1: 31,
		2: two,
		3: 31,
		4: 30,
		5: 31,
		6: 30,
		7: 31,
		8: 31,
		9: 30,
		10: 31,
		11: 30,
		12: 31,
	};
	let array1 = new Array(7).fill(" ");
	let tmpDay = 1;
	for (let i = day; i < 7; i++) {
		array1[i] = tmpDay++;
	}
	res.push(array1);
	while (tmpDay <= tmp[month]) {
		let tmpWeek = [];
		for (let i = 0; i < 7; i++) {
			if (tmpDay > tmp[month]) break;
			tmpWeek[i] = tmpDay++;
		}
		res.push(tmpWeek);
	}
	for (let j = 0; j < 7 - res[res.length - 1].length; j++) {
		res[res.length - 1].push(" ");
	}
	console.log(res);
}

printMonth(2020, 2, 5);
