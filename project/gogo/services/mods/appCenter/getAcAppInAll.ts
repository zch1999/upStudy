/**
 * @desc 模糊查找应用中心应用
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
    pontCore.getUrl('/api/v1/ac/apps/{appName}', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
