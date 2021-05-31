/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-24 17:26:33
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-24 18:04:03
 */
function findStr(arr, str) {
	const obj = {};
	for (let i = 0; i < arr.length; i++) {
		let temp = arr[i];
		setTree(temp, obj);
	}
	function setTree(tempStr, obj) {
		if (tempStr.length == 0) return;
		obj[tempStr[0]] || (obj[tempStr[0]] = {});
		setTree(tempStr.slice(1), obj[tempStr[0]]);
	}
	console.log(obj);
}
let arr = [
	"google",
	"gucci 官网",
	"g18",
	"g小调进行曲",
	"great",
	"girl",
	"go",
	"g2",
	"gai",
	"go的过去式英文",
	"google play下载",
	"go on",
	"got",
	"google翻译",
	"go out",
	"god",
	"goal",
	"good night",
	"good morning",
	"good luck!什么意思",
	"goodafternoon怎么读英语",
	"百度",
];

findStr(arr, "good");
