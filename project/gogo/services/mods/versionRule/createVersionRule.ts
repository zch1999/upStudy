/**
 * @desc 添加规则
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 应用详情页添加规则时的应用ID */
  appId?: number;
}

export const init = new defs.Result();

export function request(params = {}, bodyParams = null) {
  return pontCore.fetch(
    pontCore.getUrl('/api/v1/rules/versions/rule', params, 'POST'),
    {
      method: 'POST',
      body: bodyParams,
    },
  );
}
