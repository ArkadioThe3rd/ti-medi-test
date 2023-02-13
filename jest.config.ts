const { defaults } = require("jest-config");

export default {
  setupFilesAfterEnv: ["./jest-setup.ts"],
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
