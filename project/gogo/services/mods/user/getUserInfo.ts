/**
 * @desc 添加人员信息
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {
  /** keyword */
  keyword?: string;
}

export const init = new defs.Result();

export function request(params = {}) {
  return pontCore.fetch(pontCore.getUrl('/api/v1/user/search', params, 'GET'), {
    method: 'GET',
    body: null,
  });
}
