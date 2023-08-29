import { Context } from 'koa';
import BaseController from '../base.controller';
import { apiService } from '@service/index';

class ApiController extends BaseController {

  public timestamp(ctx: Context) {
    ctx.body = Date.now();
  }
}

export const apiController = new ApiController();
