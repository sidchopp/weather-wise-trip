/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const customJestConfig: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Configure the testing environment setup file
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // Map '@/' to your root directory for easier imports
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Use babel-jest for JavaScript and TypeScript files
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)", // Match test files in __tests__ directories
    "**/?(*.)+(spec|test).[tj]s?(x)", // Match files with .spec.js/.spec.ts or .test.js/.test.ts extension
  ],
};

// Export createJestConfig to ensure next/jest can load the Next.js config asynchronously
export default createJestConfig(customJestConfig);
