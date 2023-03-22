export default {
  verbose: true,
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['<rootDir>/node_modules'],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,
    '^.+\\.svg$': 'jest-svg-transformer',

    // Handle module aliases
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/jest.setup.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['<rootDir>/node_modules/babel-jest'],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}
