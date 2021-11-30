/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-06-10 11:30:09
 * @LastEditors: zch1999
 * @LastEditTime: 2021-06-10 16:40:50
 */
export default {
	data: {
		title: "周子寒牛逼",
	},
	onReady() {
		this.setData({
			title: "傅闯牛逼!",
		});
	},
	handleOnClick() {
		console.log("****");
		this.setData({
			title: "张瑜伽牛逼",
		});
	},
};
