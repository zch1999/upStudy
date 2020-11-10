/**
 * @desc 单一应用实例列表
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
    pontCore.getUrl('/api/v1/instances/{appId}', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
