module.exports = {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};
