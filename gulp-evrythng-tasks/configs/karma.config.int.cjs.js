const node = require('rollup-plugin-node-resolve')
const cjs = require('rollup-plugin-commonjs')
const options = require('../options')

// Load UMD integration test file, which will require the src files.
const TESTS = 'test/integration/umd.spec.js'

module.exports = function (config) {
  config.set({
    basePath: process.cwd(),
    frameworks: ['jasmine'],
    files: [TESTS],
    preprocessors: {
      [TESTS]: ['rollup']
    },
    rollupPreprocessor: {
      plugins: [
        node({ browser: true }),
        cjs()
      ],
      context: 'window',
      format: 'iife',
      moduleName: `${options.moduleName}Integration`
    },
    reporters: ['dots'],
    browsers: ['Chrome'],
    singleRun: true
  })
}
