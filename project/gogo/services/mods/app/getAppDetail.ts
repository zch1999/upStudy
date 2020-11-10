/**
 * @desc 应用详情
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** appId */
  appId: number;
}

export const init = new defs.Result();

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/api/v1/apps/detail/{appId}', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
