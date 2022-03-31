const path = require('path');
const webpack = require('webpack');
const { getJsFiles } = require('../webpack-utils');

const jsFiles = getJsFiles();

module.exports = {
  mode: 'production',
  entry: {
    ...jsFiles,
    phoenix: './src/scripts/phoenix.js'
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, '../../public')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, '../../src/scripts'), 'node_modules'],
    extensions: ['.js', '.json']
  }
};
