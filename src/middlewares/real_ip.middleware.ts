import { Context, Next } from 'koa';
import _ from 'lodash';

interface Opts { }

export function realIp(opts?: Opts) {
  return async (ctx: Context, next: Next) => {
    const forwarded = ctx.headers['x-forwarded-for'] || '';
    ctx.realIp = ((forwarded && (forwarded as string).split(',').shift()) || ctx.ip || '').trim();
    await next();
  };
}
