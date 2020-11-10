/**
 * @desc 应用实例删除
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** instanceId */
  instanceId: number;
}

export const init = new defs.Result();

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl(
      '/api/v1/manage/apps/instances/{instanceId}',
      params,
      'DELETE',
    ),
    {
      method: 'DELETE',
      body: null,
    },
  );
}
