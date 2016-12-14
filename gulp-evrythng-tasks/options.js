const path = require('path')
const pkg = require(path.resolve('package.json'))
const config = require(path.resolve('evrythng.config.js'))

module.exports = Object.assign({}, config, pkg)
