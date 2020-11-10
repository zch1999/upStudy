/**
 * @desc 删除规则
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** 规则ID */
  ruleId?: number;
}

export const init = new defs.Result();

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/api/v1/rules/versions/{ruleId}', params, 'DELETE'),
    {
      method: 'DELETE',
      body: null,
    },
  );
}
