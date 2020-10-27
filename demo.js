/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-10-23 15:18:46
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-10-23 15:19:22
 */

let a = /\/\*\*(.*)\*\//g;

let x = `/** CLI配置 */
export interface Json2Service {
  /** Swagger或者Mock JSON文档地址，自 3.1.* 起，请配置成本地文件 */
  url: string;
  /** 远程 url，配置成远程地址，用于增量更新使用；自 @3.1.* 支持 */
  remoteUrl?: string;
  /** 类型 yapi 或默认 swagger */
  type?: 'yapi' | 'swagger';
  /** 如果是 yapi，配置 */
  yapiConfig?: YAPIConfig;
  /** Swagger生成TS代码相关配置 */
  swaggerParser?: SwaggerParser;
  /** Swagger 配置 */
  swaggerConfig?: {
    /** 排除指定的 path，当 exclude 和 include 冲突时，include 生效 */
    exclude?: RegExp[];
    /** 仅包含指定的 path，当 exclude 和 include 冲突时，include 生效 */
    include?: RegExp[];
    /** 变更swagger */
    modifier?: <S extends SwaggerJson>(swagger: S, config: Json2Service) => S;
  };
  /** 生成自动校验逻辑 */
  validateResponse?: boolean;
  /** 方法名安全相关设置 */
  guardConfig?: GuardConfig;
  /** 拉取JSON文档请求相关设置 */
  requestConfig?: { url?: string } & CoreOptions;
}`;

console.log(x.replace(a, "#$1"));
