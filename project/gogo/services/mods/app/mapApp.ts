/**
 * @desc 应用映射：注册的应用名称与应用中心的应用名称映射
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 应用中心应用ID */
  acAppId?: number;
  /** 注册应用ID */
  registerAppId?: number;
}

export const init = new defs.Result();

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl(
      '/api/v1/apps/map/{registerAppId}/to/{acAppId}',
      params,
      'PUT',
    ),
    {
      method: 'PUT',
      body: null,
    },
  );
}
