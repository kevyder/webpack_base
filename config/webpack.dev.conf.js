const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: 'cheap-module-eval-source-map',
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, '..', '/'),
    publicPath: '/assets/',
    compress: true,
    hot: true,
    port: 8080,
    open: true,
    watchOptions: {
      poll: true,
      ignored: path.join(__dirname, '..', '/node_modules/'),
    },
  },
});

module.exports = devWebpackConfig;
