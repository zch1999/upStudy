/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-05 17:50:19
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-05 18:21:45
 */
const axios = require("axios");
const fs = require("fs");

async function gitDown() {
	return new Promise((resolve, ruject) => {
		const res = axios.request({
			url: "https://github.com/zch1999/blog/archive/master.zip",
			responseType: "stream",
		});
		resolve(res);
	}).then((res) => {
		const file = fs.createWriteStream("./master.zip");
		res.data.pipe(file);
		file.on("finish", () => console.log("下载完成"));
		console.log(res.status);
	});
}

gitDown();
