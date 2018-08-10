/* global __dirname, require, module*/

const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');
const HTMLWebpackPlugin = require('html-webpack-plugin')

let extension, mode;

if (env === 'build') {
  mode = 'production';
  extension = '.min.js';
} else {
  mode = 'development';
  extension = '.js';
}

const config = {
  mode: mode,
  entry: {
    'sandbox': __dirname + '/src/sandbox.js',
    'aframe-seeclarke': __dirname + '/src/index.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'lib'),
    port: 8080
  },
  output: {
    path: __dirname + '/lib',
    filename: `[name]${extension}`,
    library: pkg.name,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/sandbox.html',
      inject: 'head'
    })
  ],
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  }
};

module.exports = config;
