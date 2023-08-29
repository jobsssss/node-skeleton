import { process_init } from '../common/utils/process_init';
process_init();

import { sleep } from '@common/utils';

async function stop () {
  while (true) {}
}

async function task1() {
    stop()
    console.log('1111')
}

async function task2() {
    await sleep(2000)
    console.log('2222')
}

task1().then(() => {
  console.log('task1 finished')
})

task2().then(() => {
  console.log('task2 finished')
})