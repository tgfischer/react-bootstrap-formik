module.exports = {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  transform: {
    "^.+\\.(tsx|ts)?$": "ts-jest"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy"
  }
};
