/**
 * @desc 可用规则项
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = new defs.Result();

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/api/v1/rules/apps/available/terms', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
