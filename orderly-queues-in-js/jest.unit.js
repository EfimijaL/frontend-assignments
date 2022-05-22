module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/*.integration.spec.{js,ts}',
  ],
  coverageReporters: ['text', 'json', 'html'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '.',
        outputName: 'test-report.unit.xml',
      },
    ],
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['integration.spec.ts$', 'build'],
}