const node = require('rollup-plugin-node-resolve')
const options = require('../options')

/**
 * ES2015 + ES2015 module export
 */

module.exports = {
  entry: `src/${options.name}.js`,
  dest: `dist/${options.name}.es6.js`,
  plugins: [
    node({ jsnext: true })
  ],
  external: options.external
}
