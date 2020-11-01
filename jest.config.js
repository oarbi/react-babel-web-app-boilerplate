module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['./tests.config.js'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'babel-jest',
    '^#(.*)$': '<rootDir>/src$1',
  },
};
