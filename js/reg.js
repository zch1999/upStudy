/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-10-26 10:34:13
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-10-26 17:23:48
 */
let a = /\/\*\*(.*)\*\/\n(.*?):(.*);/g;
// let a = /(.*?):(.*);/g;

let x = `
/** 生成代码法法名安全配置 */
export interface GuardConfig {
  /** OperationId到url映射 */
  methodUrl2OperationIdMap?: String2StringMap;
  /** 生成唯一 operationId 时， method 前边的前置，默认是 Using，例如: 'Using' + 'Get' */
  methodPrefix?: string;
  /** 模式: safe strict */
  mode?: SwaggerGuardMode;
  /** 采用url生成方法名时，需要移除的前缀正则，默认值：/^(\/)?api\//g */
  prefixReg?: RegExp;
  /** 参数格式不符合规范的正则，默认值：/[^a-z0-9_.[]$]/gi */
  badParamsReg?: RegExp;
  /** 不符合规范Tag正则，默认值：/^[a-z-0-9_$A-Z]+-controller$/g */
  unstableTagsReg?: RegExp;
  /** 检测Tag是否全英文，默认值：/^[a-z-0-9_$]+$/gi */
  validTagsReg?: RegExp;
  /** DTO命名是否符合规范正则，默认值：/^[a-z-0-9_$«»,]+$/gi */
  validDefinitionReg?: RegExp;
  /** 校验 url 规则，默认值： /api/g，自 3.1.6 新增 */
  validUrlReg?: RegExp;
}
`;

console.log(x.replace(a, `| $2 | $1 | $3 |`));
// console.log(x.replace(a, `| $1 |  | $2 |`));
