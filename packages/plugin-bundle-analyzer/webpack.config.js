const Config = require('webpack-chain');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = new Config();


config.
  entry('index')
  .add('./index.js')
  .end()
  .output
  .path(path.resolve(__dirname, 'dist'))
  .filename('index.dist.js')
  .end()
  .plugin('bundleAnalyzer')
  .use(BundleAnalyzerPlugin, [{
    analyzerMode: 'server',
    logLevel: 'info'
  }])
  .end()
  .context(__dirname)
  .mode('development')


module.exports = config.toConfig();