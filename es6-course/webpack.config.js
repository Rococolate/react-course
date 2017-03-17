var path = require('path');
var webpack = require('webpack');

var config = {
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: 'Animal',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: [ '.js','.css','.json'],
    alias: {
      Src: path.resolve(__dirname, './src'),
    }
  },
  'devtool':'cheap-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config;