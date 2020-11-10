/**
 * @desc 修改访问控制开关
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 应用ID */
  appId?: number;
  /** 是否开启 */
  enabled?: boolean;
}

export const init = new defs.Result();

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/api/v1/apps/{appId}/switch/{enabled}', params, 'PUT'),
    {
      method: 'PUT',
      body: null,
    },
  );
}
