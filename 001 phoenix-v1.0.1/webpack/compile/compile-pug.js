const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');
const { getPugFiles, flatSitemap } = require('../webpack-utils');
const { name, version } = require('../../package.json');
const { v4: uuid } = require('uuid');
const pretty = require('pretty');

const pugFiles = getPugFiles();

module.exports = {
  mode: 'production',
  entry: {
    phoenix: './src/scripts/phoenix.js'
  },
  output: {
    filename: './assets/js/[name].js',
    path: path.resolve(__dirname, '../../public')
  },
  plugins: [
    ...Object.keys(pugFiles).map(
      file =>
        new HtmlWebpackPlugin({
          template: file,
          inject: false,
          filename: file.replace('.pug', '.html').split('/').slice(3).join('/'),
          data: {
            pathName: file.replace('./src/pug/', ''),
            name,
            version,
            uuid,
            pretty,
            flatSitemap
          }
        })
    ),
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
