/**
 * @desc 添加规则：应用详情页添加与当前应用相关的规则
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 当前应用ID */
  appId?: number;
}

export const init = new defs.Result();

export function request(params = {}, bodyParams = null) {
  return pontCore.fetch(
    pontCore.getUrl('/api/v1/rules/apps/rule/relate/{appId}', params, 'POST'),
    {
      method: 'POST',
      body: bodyParams,
    },
  );
}
