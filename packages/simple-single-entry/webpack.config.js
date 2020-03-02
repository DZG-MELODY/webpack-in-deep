const Config = require('webpack-chain');
const path = require('path')

const config = new Config();

config
  .entry('index')
  .add('./index.js')
  .end()
  .output
  .path(path.resolve(__dirname, 'dist'))
  .filename('index.js')
  .end()
  .context(__dirname)
  .mode("development");

module.exports = config.toConfig();
