const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/app/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
  moduleNameMapper: {
    '\\.(css|less|s[ac]ss)$': 'identity-obj-proxy',
    '^@public(.*)$': '<rootDir>/public$1',
  },
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
};

module.exports = config;
