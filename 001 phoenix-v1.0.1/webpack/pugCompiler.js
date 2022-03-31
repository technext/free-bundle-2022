const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { name, version } = require('../package.json');
const { v4: uuid } = require('uuid');
const pretty = require('pretty');
const { flatSitemap } = require('./webpack-utils');
const url = require('url');

const compile = (pugFile, next) => {
  const compiler = Webpack({
    mode: 'development',
    output: {
      path: path.resolve(__dirname, '../public')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: pugFile,
        inject: false,
        filename: pugFile
          .replace('.pug', '.html')
          .split('/')
          .slice(3)
          .join('/'),
        data: {
          pathName: pugFile.replace('./src/pug/', ''),
          name,
          version,
          uuid,
          pretty,
          flatSitemap
        }
      })
    ],
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: ['pug-loader']
        }
      ]
    }
  });

  compiler.run(() => {});

  compiler.close(() => {});

  compiler.hooks.done.tap('My', () => {
    next();
  });
};

const compilePug = async (req, res, next) => {
  const parsed = url.parse(req.url);
  if (parsed.pathname.match(/\.html$/) || parsed.pathname === '/') {
    let pugFile = './src/pug/index.pug';
    if (parsed.pathname !== '/') {
      pugFile = `./src/pug${parsed.pathname.replace('.html', '.pug')}`;
    }
    compile(pugFile, next);
  } else {
    next();
  }
};

module.exports = { compilePug, compile };
