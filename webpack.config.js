const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
   entry: ['./src/index.js', './src/script.js'],
   output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [{
      test:/\.(s*)css$/,
      use: [
        MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
      ]
    }]
   },
   plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
      new HtmlWebpackPlugin({
        minify: false,
        template: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html',
        favicon: './src/assets/favicon.ico',
        inject: 'body',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {from: 'src/assets', to: 'assets'},
          {from: 'src/tours', to: 'tours'}
        ],
      }),
      new CleanWebpackPlugin()
   ]
};