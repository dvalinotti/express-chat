module.exports = {
  rootDir: './',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/dist/$1',
    '^~~$': '<rootDir>',
    '^@@$': '<rootDir>',
    '^@/(.*)$': '<rootDir>/dist/$1'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testRegex: '/tests/(.*).test.js',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    'node_modules',
    'dist',
    '.*(?<=.d.ts)$',
    'src/bin/www.js' // HTTP Server Module
  ],
  collectCoverageFrom: ['**/*.js']
}
