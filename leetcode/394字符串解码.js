/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-05 16:00:42
* @LastEditors: zhongconghai
* @LastEditTime: 2020-11-05 16:06:01
 */
var decodeString = function(s) {
	if (!s.includes("[") && !s.includes("]")) {
		return s;
	}
	let res = "";
	let tag;
	for (let i = 0; i < s.length; i++) {
		if (!isNaN(s[i])) {
			let tmp = i;
			while (!isNaN(s[tmp])) {
				tmp++;
			}
			let num = s.slice(i, tmp);
			tag = tmp;
			while (s[tag] !== "]") {
				tag++;
			}
			let flag = s.slice(tmp + 1, tag);
			let tmpRes = "";
			for (let j = 0; j < Number(num); j++) {
				tmpRes += flag;
			}
			res += tmpRes;
		} else {
			console.log(s[i]);
			res += s[i];
		}
		i = tag;
  }
  console.log(res)
	return decodeString(res);
};

console.log(decodeString("3[a2[c]]")

