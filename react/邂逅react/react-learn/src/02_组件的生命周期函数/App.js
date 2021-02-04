/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2021-02-03 19:16:51
 * @LastEditors: zch1999
 * @LastEditTime: 2021-02-04 19:00:56
 */
import React, { Component } from "react";

class Cpn extends Component {
	constructor() {
		super();
	}
	render() {
		return <div>我是cpn</div>;
	}

	componentWillUnmount() {
		console.log("cpn componentWillUnmount");
	}
}

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
			isShow: true,
		};
		console.log("run constructor");
	}

	render() {
		console.log("run render");
		return (
			<div>
				app组件
				<h2>当前计数:{this.state.count}</h2>
				<button onClick={(e) => this.increment()}>+1</button>
				<hr />
				<button
					onClick={() => {
						this.setState({ isShow: !this.state.isShow });
					}}
				>
					切换
				</button>
				{this.state.isShow ? <Cpn /> : null}
			</div>
		);
	}

	increment() {
		this.setState({
			count: this.state.count + 1,
		});
	}

	componentDidMount() {
		console.log("run componentDidMount");
	}

	componentDidUpdate() {
		console.log("run componentDidUpdate");
	}
}
