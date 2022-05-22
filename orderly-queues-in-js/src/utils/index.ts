const delay = async (ms: number) => {
  await new Promise(resolve => setTimeout(resolve, ms))

  if (process.env.NODE_ENV === "test") {
    console.log("The delay is finished");
  }
}

const logProcessedEvent = (eventNumber: number) => console.log(`Event ${eventNumber} is processed at ${new Date().toISOString()}`)

export { delay, logProcessedEvent }
