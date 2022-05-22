
/**
* Please provide your implementation in this file. 
The queue object will start emitting values as soon as it is
instantiated.
*/
import { Queue } from './queue';
import { DELAY_MS } from './constants';
import { delay, logProcessedEvent } from './utils';

const q = new Queue();
let timeLastProcessedEvent = 0

/**
 * q.emitter will emit events at a random interval
 */
q.emitter.addListener('package', async (x: number) => {
  const timeNow = +new Date()

  // check if the time for the last processed event has exceeded the break
  if (timeNow - timeLastProcessedEvent >= 500) {
    logProcessedEvent(x)
    timeLastProcessedEvent = timeNow
    return
  }

  // calculate the delay based on the time of the last processed event
  const difference = DELAY_MS - (timeNow - timeLastProcessedEvent)
  timeLastProcessedEvent = timeNow + difference
  await delay(difference)
  logProcessedEvent(x)
});
