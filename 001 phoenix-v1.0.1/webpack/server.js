const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');
const sane = require('sane');
const { getPugFiles, getJsFiles, publicFiles } = require('./webpack-utils');

const config = webpackConfig(getPugFiles(), getJsFiles());
const fs = require('fs');

const compiler = Webpack(config);
const devServerOptions = {
  ...config.devServer,
  open: false
};

let server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('Starting server...');

  publicFiles.forEach(file => {
    try {
      fs.unlinkSync(file);
    } catch (err) {
      console.error(err);
    }
  });
  await server.start();
};

const startNewServer = async () => {
  const compiler = Webpack(config);
  const devServerOptions = { ...config.devServer, open: false };
  server = new WebpackDevServer(devServerOptions, compiler);
  await server.start();
};

const stopServer = async () => {
  await server.stop();
};

const restartServer = async () => {
  await stopServer();
  await startNewServer();
};

runServer();

const watcher = sane('./src', {
  glob: ['scripts/**/*.js', 'pug/**/*.pug'],
  ignored: ['pug/mixins/**/*.pug', 'pug/layouts/**/*.pug']
});

watcher.on('add', async function (filepath, root, stat) {
  restartServer();
});
watcher.on('delete', async function (filepath, root) {
  restartServer();
});
