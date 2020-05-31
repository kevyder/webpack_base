const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');


const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  // watch: true,
  // devServer: {
  //   host: '0.0.0.0',
  //   port: 8080,
  //   inline: true,
  //   hot: false,
  // },
});

module.exports = prodWebpackConfig;
