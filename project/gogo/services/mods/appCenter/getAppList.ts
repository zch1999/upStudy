/**
 * @desc 应用列表
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = new defs.Result();

export function request(params = {}) {
  return pontCore.fetch(
    pontCore.getUrl('/api/v1/ac/apps/list', params, 'GET'),
    {
      method: 'GET',
      body: null,
    },
  );
}
