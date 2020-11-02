/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-10-29 15:25:54
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-10-30 14:30:56
 */
import logo from "./logo.svg";
// import {
// 	SchemaForm,
// 	SchemaMarkupField as Field,
// 	FormButtonGroup,
// 	Submit,
// 	Reset,
// } from "@formily/antd";
import { Input, Form, Radio, Button, DatePicker } from "antd";
import "antd/dist/antd.css";
import "./App.css";

function App() {
	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	};

	const submitForm = (value) => {
		console.log(value);
	};

	return (
		<div className="App">
			<header className="App-header">
				{/* <SchemaForm
					schema={{
						type: "object",
						"x-component-props": {
							labelCol: 7,
							wrapperCol: 12,
						},
						properties: {
							string: {
								type: "string",
								title: "String",
								"x-component": "Input",
							},
						},
					}}
				/> */}
			</header>
			<Form onFinish={submitForm}>
				<div
					style={{
						height: "300px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<div>
						<Form.Item label="archetypeArtifactId" name="archetypeArtifactId">
							<Input />
						</Form.Item>
						<Form.Item
							label="archetypeGroupId"
							name="archetypeGroupId"
							rules={[{ required: true, message: "截止时间不能为空" }]}
						>
							<DatePicker format="YYYY-MM-DD HH:mm:ss" />
						</Form.Item>
						<Form.Item name="archetypeVersion" label="archetypeVersion">
							<Radio.Group defaultValue="part"></Radio.Group>
						</Form.Item>
					</div>
					<div style={{ margin: "auto" }}>
						<div>
							<Form.Item>
								<Button type="primary" htmlType="submit">
									确认
								</Button>
							</Form.Item>
						</div>
					</div>
				</div>
			</Form>
		</div>
	);
}

export default App;
