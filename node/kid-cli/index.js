#!/usr/bin/env node

// const pkg = require("./package.json");
const program = require("commander");
const inquirer = require("inquirer");
const shell = require("shelljs");
const axios = require("axios");

// const command = process.argv[2];

const initAction = async () => {
	let group;
	await axios
		.request({
			method: "GET",
			url: "http://127.0.0.1:80/effe-server/api/gitmove/groups",
		})
		.then((res) => {
			group = [...res.data.result];
		});
	// console.log(group);
	inquirer
		.prompt([
			{
				type: "input ",
				message: "请输入创建的项目名",
				name: "name",
			},
			{
				// 第二个询问
				type: "list",
				name: "gitPath", // 第二个answer的key
				message: "What git do you need?",
				choices: group,
				filter: function(val) {
					// filter处理answer，这里将用户的选择全部转成小写字母
					return val.toLowerCase();
				},
			},
			// {
			// 	type: "input",
			// 	message: "请输入要迁入的分支",
			// 	name: "branch",
			// },
		])
		.then(async (answers) => {
			console.log("项目名为：", answers.gitPath);
			console.log("正在拷贝项目，请稍等...");
			const { name, gitPath, branch } = answers;
			let CheckGit = group.filter((item) => gitPath == item.name);
			let project;
			// console.log(CheckGit);
			await axios
				.request({
					method: "GET",
					url: "http://127.0.0.1:80/effe-server/api/gitmove/projects",
					params: {
						groupId: CheckGit[0].id,
					},
				})
				.then((res) => {
					console.log(res.data.result);
					project = [...res.data.result];
				});
			inquirer
				.prompt([
					{
						type: "input ",
						message: "请输入创建的分支名",
						name: "branch",
					},
				])
				.then((answers) => {
					shell.exec(
						`
            git clone -b ${answers.branch} ${project.web_url}
            mv -i ${gitPath
							.split("/")
							.pop()
							.slice(0, -4)} ${name} 
          `,
						(error, stdout, stderr) => {
							if (error) {
								console.log(error);
								return;
							}
						}
					);
				});
		});
};

program.version(require("./package.json").version);

program
	.command("morein")
	.description("迁入项目")
	.action(initAction);

program.parse(process.argv);

// switch (command) {
// 	case "-v":
// 		console.log(pkg.version);
// 		break;
// 	default:
// 		break;
// }

// const http = require('http'); // const fs = require('fs'); // function downloadFileAsync(uri, dest){ //   return new Promise((resolve, reject)=>{ //       // 确保dest路径存在 //     const file = fs.createWriteStream(dest); //     http.get(uri, (res)=>{ //       if(res.statusCode !== 200){ //         reject(response.statusCode); //         return; //       } //       res.on('end', ()=>{ //         console.log('download end'); //       }); //       // 进度、超时等 //       file.on('finish', ()=>{ //         console.log('finish write file') //         file.close(resolve); //       }).on('error', (err)=>{ //         fs.unlink(dest); //         reject(err.message); //       }) //       res.pipe(file); //     }); //   }); // }
