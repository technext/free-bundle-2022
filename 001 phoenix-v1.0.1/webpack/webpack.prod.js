const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');
const {
  getPugFiles,
  getJsFiles,
  pugBased,
  flatSitemap
} = require('./webpack-utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackRTLPlugin = require('webpack-rtl-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const webpack = require('webpack');
const { name, version } = require('../package.json');
const { v4: uuid } = require('uuid');
const pretty = require('pretty');
const CopyPlugin = require('copy-webpack-plugin');

const pugFiles = getPugFiles();
const jsFiles = getJsFiles();

const isProduction = process.env.NODE_ENV === 'production';
console.log({ isProduction });

module.exports = {
  mode: 'production',
  entry: {
    ...jsFiles,
    phoenix: ['./src/scripts/phoenix.js', './src/scss/theme.scss'],
    user: ['./src/scss/user.scss']
  },
  output: {
    filename: './assets/js/[name].js',
    path: path.resolve(__dirname, isProduction ? '../build' : '../public'),
    clean: isProduction
      ? true
      : {
          keep: /assets\/img\/|\.html$/
        }
  },
  plugins: [
    ...(pugBased
      ? Object.keys(pugFiles).map(
          file =>
            new HtmlWebpackPlugin({
              template: file,
              inject: false,
              filename: file
                .replace('.pug', '.html')
                .split('/')
                .slice(3)
                .join('/'),
              data: {
                pathName: file.replace('./src/pug/', ''),
                name,
                version,
                uuid,
                pretty,
                flatSitemap
              }
            })
        )
      : []),
    ...(pugBased
      ? [
          new BeautifyHtmlWebpackPlugin({
            indent_size: 2,
            indent_char: ' ',
            indent_with_tabs: false,
            editorconfig: false,
            eol: '\n',
            end_with_newline: false,
            indent_level: 0,
            preserve_newlines: true,
            max_preserve_newlines: 2,
            space_in_paren: false,
            space_in_empty_paren: false,
            jslint_happy: false,
            space_after_anon_function: false,
            space_after_named_function: false,
            brace_style: 'collapse',
            unindent_chained_methods: false,
            break_chained_methods: false,
            keep_array_indentation: false,
            unescape_strings: false,
            wrap_line_length: 0,
            e4x: false,
            comma_first: false,
            operator_position: 'before-newline',
            indent_empty_lines: false,
            templating: ['auto']
          })
        ]
      : []),
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].min.css'
    }),
    new WebpackRTLPlugin({
      filename: 'assets/css/[name]-rtl.min.css',
      minify: true
    }),
    ...(isProduction
      ? [
          new CopyPlugin({
            patterns: [{ from: 'public/assets/img', to: 'assets/img' }]
          })
        ]
      : []),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
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
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'expanded'
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src/scripts'), 'node_modules'],
    extensions: ['.js', '.json']
  },
  devtool: 'source-map'
};
