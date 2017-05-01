// webpack.config.js
var webpack = require('webpack');

module.exports = {
  entry: [
	'./src/index.js'
  ],
  output: {
  	path: './docs/js/',
    filename: 'index.js'       
  },
  module: {
    loaders: [
      { test: /.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets:['react', 'es2015'] } }
    ]
  }
};
