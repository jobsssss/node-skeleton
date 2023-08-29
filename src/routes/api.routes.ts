import Joi from 'joi';
import { Route } from '@common/interfaces';
import { RequestMethod } from '@common/enums';
import fieldReg from '@common/field_reg';
import { api } from '@controller/api';

const prefix = '/api';

const routes: Route[] = [
  {
    name: 'timestamp',
    path: '/timestamp',
    method: RequestMethod.GET,
    action: api.apiController.timestamp,
    isAttachment: true,
  },
];

export default routes.map((item) => ({ ...item, path: `${prefix}${item.path}` }));
