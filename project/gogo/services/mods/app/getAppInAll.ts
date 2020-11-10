/**
 * @desc 应用搜索：按应用名称模糊查找注册应用
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** appName */
  appName: string;
}

export const init = new defs.Result();

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/api/v1/apps/search/{appName}', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
