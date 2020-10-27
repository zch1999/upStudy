/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-10-26 16:29:21
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-10-26 16:29:21
 */
import Vue from "vue";
import $ from "../libs/fetch";
interface Headers {
	"Api-Type": string;
}
interface Apis {
	name: string;
	url: string;
	headers: Headers;
	methods: "get" | "post" | "put" | "delete";
}

interface ApiOptions {
	//错误返回函数
	error?: <T extends object>(object: object) => T;
	//成功返回函数
	success?: <T extends object>(object: object) => T;
	//错误提示,默认调用msg属性>服务器错误，传“” 不生效  > === 优先
	errorMsg?: string;
	//成功提示，默认调用msg属性>获取数据成功，传“” 不生效  > === 优先
	successMsg?: string;
	//返回数据空数组提示，默认调用msg属性>返回结果为空，传“” 不生效
	nullMsg?: string;
	//是否显示loading =>v-loading 键值
	loading?: string;
	//接口参数
	params?: object;
	//接口返回的数据所在参数名。默认data或者list，data > list
	responseProp?: string;
	//成功状态码 默认200 或者 0 ,200 > 0
	code?: number;
}

interface Response {
	data: {
		data?: [];
		list?: [];
		code?: number;
		msg?: string;
	};
}

type GetNameValue<T> = T extends {
	name: infer M;
	url: string;
	headers: Headers;
	methods: "get" | "post" | "put" | "delete";
}[]
	? M
	: unknown;

type $Api<T extends Apis[]> = {
	[key in GetNameValue<T>]: (ApiOptions: ApiOptions) => void;
};

class Api<T extends Apis[]> {
	"$api": $Api<T>;
	constructor(private api: T) {
		// @ts-ignore： $Api<T>  是一个有属性的对象
		this.$api = {};
		this.init();
	}
	private init() {
		this.api.forEach((api) => {
			// @ts-ignore： api.name 是$api的属性
			this.$api[api.name] = async function (options: ApiOptions) {
				let res: Response = {
					data: {},
				};
				//是否有loading
				let flag = options.loading && this instanceof Vue;
				try {
					// @ts-ignore：
					flag && (this[options.loading] = true);
					//对get和post分别处理
					const { url, methods, headers } = api;
					if (api.methods === "get" || api.methods === "delete") {
						res = await $.fetch({
							url,
							method: methods,
							headers,
							params: options.params,
						});
					} else {
						res = await $.fetch({
							url,
							method: methods,
							headers,
							data: options.params,
						});
					}
					// @ts-ignore：
					flag && (this[options.loading] = false);
				} catch ({ response: { data } }) {
					// @ts-ignore：
					flag && (this[options.loading] = false);
					processMsg(options, data);
					return;
				}
				if (successCode(res, options)) {
					//请求成功
					//成功数据
					let result: [] =
						res.data[options.responseProp] || res.data.data || res.data.list;
					if (!result) {
						throw new Error("请检查网络请求返回参数");
					} else {
						let msg = "";
						if (result.length === 0 && options.nullMsg !== "") {
							//处理空提示
							msg = options.nullMsg || res.data.msg || "返回结果为空";
							Vue.prototype.$message(msg);
						} else {
							//处理成功提示
							if (options.successMsg !== "") {
								msg = options.successMsg || res.data.msg || "获取数据成功";
								Vue.prototype.$message(msg);
							}

							options.success && options.success.call(this, res.data);
						}
					}
				} else {
					//错误状态码
					flag && (this[options.loading] = false);
					processMsg(options, res.data);
				}
			};
		});
	}
}

function successCode(res: Response, options: ApiOptions) {
	return (
		res.data.code === options.code ||
		res.data.code == 200 ||
		res.data.code === 0
	);
}

function processMsg(options: ApiOptions, data: Response["data"]) {
	let msg = "";
	if (options.errorMsg !== "") {
		msg = options.errorMsg || data.msg || "服务端错误";
		Vue.prototype.$message.error(msg);
	}
	options.error && options.error.call(this, data);
}
export default Api;
