const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackRTLPlugin = require('webpack-rtl-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
  mode: 'production',
  entry: {
    phoenix: './src/scss/theme.scss',
    user: './src/scss/user.scss'
  },
  output: {
    path: path.resolve(__dirname, '../../public')
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].min.css'
    }),
    new WebpackRTLPlugin({
      filename: 'assets/css/[name]-rtl.min.css',
      minify: true
    })
  ],
  module: {
    rules: [
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
  devtool: 'source-map'
};
