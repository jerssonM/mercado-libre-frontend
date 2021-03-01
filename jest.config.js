module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^__mocks__/(.*)$': '<rootDir>/src/__mocks__/$1',
    '^__test__/(.*)$': '<rootDir>/src/__test__/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^config/(.*)$': '<rootDir>/src/config/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1'
  }
};
