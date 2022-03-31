const path = require('path');
const WebpackRTLPlugin = require('webpack-rtl-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const webpack = require('webpack');
const portFinderSync = require('portfinder-sync');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { compilePug } = require('./pugCompiler');
const { pugBased } = require('./webpack-utils');

const devServerPort = portFinderSync.getPort(3100);
const browserSyncPort = portFinderSync.getPort(3000);

module.exports = (pugFiles, jsFiles) => ({
  mode: 'development',
  watch: true,
  entry: {
    ...jsFiles,
    phoenix: ['./src/scripts/phoenix.js', './src/scss/theme.scss'],
    user: ['./src/scss/user.scss']
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, '../public')
  },
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: browserSyncPort,
        proxy: `http://localhost:${devServerPort}/`,
        ...(pugBased
          ? {
              middleware: compilePug
            }
          : {})
      },
      {
        reload: true
      }
    ),
    new RemoveEmptyScriptsPlugin(),
    new WebpackRTLPlugin({
      filename: 'assets/css/[name]-rtl.min.css',
      minify: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },

      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src/scripts'), 'node_modules'],
    extensions: ['.js', '.json']
  },
  devtool: 'inline-source-map',
  devServer: {
    watchFiles: {
      paths: ['src/pug/**/*.pug'],
      options: {
        usePolling: true
      }
    },
    static: {
      directory: path.join(__dirname, '../public')
    },
    port: devServerPort,
    open: true
  }
});
