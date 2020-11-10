/**
 * @desc 应用列表
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 搜索应用名 */
  keyword?: string;
}

export const init = new defs.Result();

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/api/v1/apps/list', params, 'GET'), {
    method: 'GET',
    body: null,
  });
}
