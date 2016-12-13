const pkg = require('../package.json')

const TESTS = 'test/integration/umd.spec.js'
const LIB = pkg.main
const EXT = 'node_modules/evrythng/dist/evrythng.polyfill.js'

module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    files: [EXT, LIB, TESTS],
    reporters: ['dots'],
    browsers: ['Chrome'],
    singleRun: true
  })
}
