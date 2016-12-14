const options = require('../options')
const browserDeps = require('../browserDeps')

// Load UMD integration test file.
const TESTS = 'test/integration/umd.spec.js'

// Load compiled library (UMD).
const LIB = options.main

// Load RequireJs configuration file.
const ENTRY = 'test/require-main.js'

// Pre-load any required external browser dependency in Karma.
const EXT = browserDeps

module.exports = function (config) {
  config.set({
    basePath: process.cwd(),
    frameworks: ['jasmine', 'requirejs'],
    files: [
      ENTRY,
      ...EXT.map(dep => ({ pattern: dep, included: false })),
      { pattern: LIB, included: false },
      { pattern: TESTS, included: false }
    ],
    reporters: ['dots'],
    browsers: ['Chrome'],
    singleRun: true
  })
}
