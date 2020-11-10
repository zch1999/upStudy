/**
 * @desc 分页查看规则列表
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 搜索应用名 */
  keyword?: string;
  /** 页号 */
  pageNum?: number;
  /** 页面大小 */
  pageSize?: number;
}

export const init = new defs.Result();

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/api/v1/manage/rules/apps/list/page', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
