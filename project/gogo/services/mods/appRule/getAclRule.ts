/**
 * @desc 查看规则
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** ruleId */
  ruleId: number;
}

export const init = new defs.Result();

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/api/v1/rules/apps/{ruleId}', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
