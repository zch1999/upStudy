/**
 * @desc 应用删除
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
    pontCore.getUrl('/api/v1/manage/apps/{appId}', params, 'DELETE'),
    {
      method: 'DELETE',
      body: null,
    },
  );
}
