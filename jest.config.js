/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/tests/**/*.test.[jt]s?(x)'],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
};

module.exports = config;
