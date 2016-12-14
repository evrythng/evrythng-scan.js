const babel = require('rollup-plugin-babel')
const node = require('rollup-plugin-node-resolve')
const options = require('../options')

/**
 * ES5 + UMD module export
 */

module.exports = {
  entry: `src/${options.name}.js`,
  dest: `dist/${options.name}.js`,
  format: 'umd',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    node()
  ],
  moduleName: options.moduleName,
  external: options.external,
  globals: options.globals
}
