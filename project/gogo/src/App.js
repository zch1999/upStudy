/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-03 18:29:35
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-11 21:27:41
 */
import logo from "./logo.svg";
import "./App.css";
import { Checkbox, Row, Col, Table, Button } from "antd";
import "antd/dist/antd.css";

function App() {
	const columns = [
		{
			title: "Full Name",
			width: 200,
			dataIndex: "name",
			key: "name",
			fixed: "left",
		},
		{
			title: "Age",
			dataIndex: "age",
			key: "age",
		},
		{
			title: "Column 1",
			dataIndex: "address",
			key: "1",
		},
		{
			title: "Column 2",
			dataIndex: "address",
			key: "2",
		},
		{
			title: "Column 3",
			dataIndex: "address",
			key: "3",
		},
		{
			title: "Column 4",
			dataIndex: "address",
			key: "4",
		},
		{
			title: "Column 5",
			dataIndex: "address",
			key: "5",
		},
		{
			title: "Column 6",
			dataIndex: "address",
			key: "6",
		},
		{
			title: "Column 7",
			dataIndex: "address",
			key: "7",
		},
		{ title: "Column 8", dataIndex: "address", key: "8" },
		{
			title: "Action",
			key: "operation",
			fixed: "right",
			render: () => <a>action</a>,
		},
	];

	const setCheckList = () => {
		const tmp = [];
		columns.map((item) => {
			tmp.push(item.title);
		});
		return tmp;
	};

	const checkList = [...setCheckList(columns)];
	const res = [];
	const filterColumns = (col, checked) => {
		col.forEach((item) => {
			checked.includes(item.name) && res.push(item);
		});
		// console.log(res);
		// return res;
	};

	const data = [];
	for (let i = 0; i < 100; i++) {
		data.push({
			key: i,
			name: `Edrward ${i}`,
			age: 32,
			address: `London Park no. ${i}`,
		});
	}

	const onChange = (value) => {
		console.log(value);
	};
	return (
		<div className="App">
			<header className="App-header"></header>
			<Table
				columns={filterColumns(columns, checkList)}
				dataSource={data}
				bordered
				title={() => {
					return (
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<div>
								<Button>导入</Button>
							</div>
							<div style={{ position: "relative" }}>
								<div>
									<Button onClick={}>筛选</Button>
									<Button>全屏</Button>
								</div>
								<div
									style={{
										position: "absolute",
										zIndex: "100",
										border: "1px solid #f0f0f0",
										background: "#f0f0f0",
										display: "none",
									}}
								>
									<Checkbox.Group
										style={{ width: "100%", margin: "4px" }}
										defaultValue={checkList}
										onChange={onChange}
									>
										<Row>
											{checkList.map((item) => (
												<Col span={24}>
													<Checkbox key={item} value={item}>
														{item}
													</Checkbox>
												</Col>
											))}
										</Row>
									</Checkbox.Group>
								</div>
							</div>
						</div>
					);
				}}
				scroll={{ x: 2000 }}
				sticky
			/>
			,
		</div>
	);
}

export default App;
