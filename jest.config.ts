// jest.config.ts

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)', // Matches any file that ends with .test.js, .test.jsx, .test.ts, .test.tsx in __tests__ directories
    '**/?(*.)+(spec|test).[tj]s?(x)', // Matches any file that ends with .spec.js, .spec.jsx, .test.js, .test.jsx in any directory
  ],

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transform .ts and .tsx files using ts-jest
  },

  // Indicates whether Jest should automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // Collect coverage from all files in src directory with .js, .jsx, .ts, .tsx extensions
    '!**/*.d.ts', // Exclude .d.ts files from coverage
  ],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['text', 'lcov'],

  // A map from regular expressions to paths to module names or to functions that transform matches into module names
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS and other style imports during tests
  },
};

export default config;
