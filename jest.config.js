// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/storybook.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}