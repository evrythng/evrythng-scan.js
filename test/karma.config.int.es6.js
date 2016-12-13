const node = require('rollup-plugin-node-resolve')
const cjs = require('rollup-plugin-commonjs')

const TESTS = 'test/integration/es6.spec.js'

module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    files: [TESTS],
    preprocessors: {
      [TESTS]: ['rollup']
    },
    rollupPreprocessor: {
      plugins: [
        node({ jsnext: true, browser: true }),
        cjs()
      ],
      context: 'window',
      format: 'iife',
      moduleName: 'EVTScanIntegration'
    },
    reporters: ['dots'],
    browsers: ['Chrome'],
    singleRun: true
  })
}
