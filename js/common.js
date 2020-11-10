/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-03 19:57:17
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-03 20:04:38
 */
const program = require("commander");
// 定义指令
program
	.version("0.0.1")
	.version(require("./package").version)
	.usage("<command> [options]")
	.command("add", "add a new template")
	.command("delete", "delete a template")
	.command("list", "list all the templates")
	.command("init", "generate a new project from a template");

// // 解析命令行参数
// program.parse(process.argv);

let question = [
	{
		name: "name",
		type: "input",
		message: "请输入模板名称",
		validate(val) {
			if (val === "") {
				return "Name is required!";
			} else {
				return true;
			}
		},
	},
	{
		name: "url",
		type: "input",
		message: "请输入模板地址",
		validate(val) {
			if (val === "") return "The url is required!";
			return true;
		},
	},
];

// const ora = require("ora");
// let spinner = ora("downloading template ...");
// spinner.start();

// const chalk = require("chalk");
// console.log(chalk.green("success"));
// console.log(chalk.red("error"));

const inquirer = require("inquirer");
inquirer.prompt(question).then((answers) => {
	console.log(answers);

	// 回调函数，answers 就是用户输入的内容，是个对象
});
