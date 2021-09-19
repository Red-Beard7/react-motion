'use strict';

process.env.NODE_ENV = 'development';

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config');
let port = process.env.PORT || 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    chunkModules: false,
    colors: true,
  },
}).listen(port, '0.0.0.0', function(err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at 0.0.0.0:' + port);
});
