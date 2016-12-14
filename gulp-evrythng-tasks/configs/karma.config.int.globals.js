const options = require('../options')
const browserDeps = require('../browserDeps')

// Load UMD integration test file.
const TESTS = 'test/integration/umd.spec.js'

// Load compiled library (UMD).
const LIB = options.main

// Load any required external browser dependency
const EXT = browserDeps

module.exports = function (config) {
  config.set({
    basePath: process.cwd(),
    frameworks: ['jasmine'],
    files: [...EXT, LIB, TESTS],
    reporters: ['dots'],
    browsers: ['Chrome'],
    singleRun: true
  })
}
