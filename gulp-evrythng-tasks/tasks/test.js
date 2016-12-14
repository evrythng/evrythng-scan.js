/**
 * Use Karma runner for the browser and raw Jasmine for Node.js.
 * So we can reuse same Jasmine tests across environments:
 *
 * - Karma + ES6 + Rollup + Jasmine + JUnit + Istanbul (Unit)
 * - Karma + Browser Globals + Jasmine (Integration)
 * - Karma + RequireJS + Jasmine (Integration)
 * - Karma + CommonJS + Rollup + Jasmine (Integration)
 * - Karma + ES6 + Rollup + Jasmine (Integration)
 * - Node.js + Jasmine (Integration)
 */

const path = require('path')
const Karma = require('karma').Server
const Jasmine = require('jasmine')

/**
 * Multiplexer method that abstracts test runner.
 * @param config - Karma or Jasmine configuration file
 * @returns {Promise}
 */
function test (config) {
  return (config.includes('karma') ? karmaTest : jasmineTest)(config)
}

/**
 * Start a new Karma server with the specified configuration file.
 * @param config - regular Karma configuration file
 * @returns {Promise}
 */
function karmaTest (config) {
  return new Promise(resolve => {
    const karma = new Karma({
      configFile: path.resolve(config)
    }, resolve)
    karma.start()
  })
}

/**
 * Runs a test suite with Jasmine in Node.js.
 * @param config - regular Jasmine configuration file
 * @returns {Promise}
 */
function jasmineTest (config) {
  return new Promise(resolve => {
    const jasmine = new Jasmine()
    jasmine.loadConfigFile(config)
    jasmine.onComplete(resolve)
    jasmine.execute()
  })
}

module.exports = test
