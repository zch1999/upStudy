/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-03 05:19:58
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-03 05:30:46
 */
import React, { useState } from "react";

/** 类组件 */
// export default class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			message: "hello 打工人",
// 		};
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<span>app组件</span>
// 				<h2>{this.state.message}</h2>
// 			</div>
// 		);
// 	}
// }

/**
 * 函数式组件的特点：
 * 1.没有this对象
 * 2.没有内部状态
 */
export default function App() {
	const [message, setMessage] = useState("hello");

	return (
		<div>
			<span>app组件</span>
			<h2>{message}</h2>
		</div>
	);
}
