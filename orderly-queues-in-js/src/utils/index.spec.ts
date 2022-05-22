import { delay, logProcessedEvent } from "."

console.log = jest.fn();
jest.useFakeTimers();

const DELAY_MS = 1000
const EVENT_NUMBER = 5

describe('utils', () => {
  describe('delay', () => {
    it('should delay according to the passed arguements', async () => {
      const timeoutSpy = jest.spyOn(global, "setTimeout");

      const delayFn = delay(DELAY_MS);
      jest.runAllTimers();

      // Await the promise resolving 
      await delayFn;

      expect(timeoutSpy).toHaveBeenCalledWith(
        expect.any(Function),
        DELAY_MS
      );

      expect(console.log).toHaveBeenCalledWith("The delay is finished");
    })
  })

  describe('logProcessedEvent', () => {
    it('should log the correct event', async () => {
      logProcessedEvent(EVENT_NUMBER)
      expect(console.log).toHaveBeenCalledWith(expect.stringContaining(`Event ${EVENT_NUMBER} is processed at`));
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})