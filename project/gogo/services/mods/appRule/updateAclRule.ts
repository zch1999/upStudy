/**
 * @desc 修改规则
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** ruleId */
  ruleId: number;
}

export const init = new defs.Result();

export function request(params = {}, bodyParams = null) {
  return pontCore.fetch(
    pontCore.getUrl('/api/v1/rules/apps/{ruleId}', params, 'PUT'),
    {
      method: 'PUT',
      body: bodyParams,
    },
  );
}
