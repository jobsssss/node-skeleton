
import { process_init } from '../common/utils/process_init';
process_init();

import _ from 'lodash';
import cron from 'node-cron';
import { logger } from '@common/utils';
import { Exception } from '@common/exceptions';
import { Code } from '@common/enums';

const timezone = 'Asia/Shanghai';

const { env } = process;

// tslint:disable-next-line:no-empty
async function run() {}

if (require.main === module) {
  run()
  .then(() => {
    console.log('cron done.');
  })
  .catch(e => {
    logger.error(`cron: ${e.toString()}`);
  })
}
