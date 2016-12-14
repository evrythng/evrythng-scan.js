const path = require('path')
const node = require('rollup-plugin-node-resolve')
const istanbul = require('rollup-plugin-istanbul')
const cjs = require('rollup-plugin-commonjs')

// Load Unit tests and compile through Rollup, which will require src files.
const TESTS = 'test/unit/**/*.spec.js'

// Don't include test files and node_modules in coverage report.
const EXTERNAL = ['test/**/*', 'node_modules/**/*']

const REPORT_DIR = path.resolve('report')

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
        istanbul({ exclude: EXTERNAL }),
        node({ jsnext: true, browser: true }),
        cjs()
      ],
      context: 'window',
      format: 'iife',
      sourceMap: 'inline'
    },
    reporters: ['dots', 'junit', 'coverage'],
    junitReporter: {
      outputDir: REPORT_DIR,
      outputFile: 'test-result.xml',
      useBrowserName: false
    },
    coverageReporter: {
      dir: REPORT_DIR,
      reporters: [
        { type: 'html', subdir: 'html-coverage' },
        { type: 'cobertura', subdir: '.' }
      ]
    },
    browsers: ['Chrome'],
    singleRun: true
  })
}
