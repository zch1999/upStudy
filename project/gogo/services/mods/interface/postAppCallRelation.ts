/**
 * @desc 应用间调用关系
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = new defs.Result();

export function request(params = {}, bodyParams = null) {
  return pontCore.fetch(
    pontCore.getUrl('/api/v1/external/apps/call/relation', params, 'POST'),
    {
      method: 'POST',
      body: bodyParams,
    },
  );
}
