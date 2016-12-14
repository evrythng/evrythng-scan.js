const path = require('path')

const REQUIRE_CONFIG = 'test/require-main.js'

/**
 * For each dependency in the RequireJs configuration,
 * it returns the relative filepath in the host project.
 * @param requireConfig - RequireJS paths configuration for dependencies
 * @returns {string[]}
 */
function getFilepaths (requireConfig) {
  const dependencies = require(path.resolve(requireConfig))
  return Object.keys(dependencies).map(name => {
    const filepath = dependencies[name]
    if (filepath.startsWith('../')){
      return filepath.substring(3) + '.js'
    }
  })
}

module.exports = getFilepaths(REQUIRE_CONFIG)
