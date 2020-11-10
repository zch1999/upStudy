/**
 * @desc 访问规则批量删除
 */

import * as defs from '../../baseClass';
import { pontCore } from '../../pontCore';

export class Params {}

export const init = new defs.Result();

export function request(params = {}, bodyParams = null) {
  return pontCore.fetch(
    pontCore.getUrl('/api/v1/manage/rules/apps/batch', params, 'DELETE'),
    {
      method: 'DELETE',
      body: bodyParams,
    },
  );
}
