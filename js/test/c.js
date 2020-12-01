/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-23 15:23:22
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-23 16:02:12
 */
// 原来的数据
let res = {
	// label: ["2017", "2018", "2019"],
	// value: [
	// 	{
	// 		name: "蔬菜种子",
	// 		data: [22.5, 30, 37.5],
	// 	},
	// 	{
	// 		name: "杀虫剂",
	// 		data: [30, 110, 20],
	// 	},
	// 	{ name: "化肥", data: [1] },
	// ],
	label: [],
	value: [],
};
// 传入的数据
let tmp = [
	{
		vol: 403.0, //vol表示data
		takind: "农药", // takind表示name
		salesyears: 2020, //表示年份
	},
	{
		vol: 1283.04,
		takind: "化肥",
		salesyears: 2020,
	},
	{
		vol: 140.0,
		takind: "种子",
		salesyears: 2020,
	},
	// ... //继续添加
];

// 怎么进行数据处理？？？

tmp.map((item) => {
	!res.label.includes(item.salesyears.toString()) &&
		res.label.push(item.salesyears.toString());
	let flag = res.value.find((items) => items.name == item.takind);
	if (flag) {
		flag.data.push(item.vol);
	} else {
		res.value.push({
			name: item.takind,
			data: [item.vol],
		});
	}
});
console.log(res);
