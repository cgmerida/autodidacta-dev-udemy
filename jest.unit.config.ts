import config from './jest.config';

config.testMatch = ['<rootDir>/src/**/*.spec.[tj]s?(x)'];
config.testPathIgnorePatterns = ['<rootDir>/src/integration/.*'];

export default config;
