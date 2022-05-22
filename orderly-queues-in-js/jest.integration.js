module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '.',
        outputName: 'test-report.integration.xml',
      },
    ],
  ],
  testEnvironment: 'node',
  testMatch: ['*/.integration.spec.ts'],
}