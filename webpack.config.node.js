const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// http://jlongster.com/Backend-Apps-with-Webpack--Part-I
let nodeModules = {};
fs
  .readdirSync('node_modules')
  .filter(function(f) {
    return f.charAt(0) !== '.';
  })
  .forEach(function(f) {
    nodeModules[f] = 'commonjs ' + f;
  });

module.exports = {
  target: 'node',
  entry: './server.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'css-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    //new UglifyJSPlugin(),
  ],
  externals: nodeModules,
};
