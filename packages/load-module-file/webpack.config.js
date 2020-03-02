const Config = require('webpack-chain');
const path = require('path');

const config = new Config();

config
  .entry('index-cjs')
  .add('./index.cjs.js')
  .end()
  .entry('index-esm')
  .add('./index.es.js')
  .end()
  .output
  .path(path.resolve(__dirname, 'dist'))
  .filename('[name].js')
  .end()
  .context(__dirname)
  .mode('development');

module.exports = config.toConfig();