const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {

    index: './src/index.js',

  },
  devtool: 'inline-source-map',
  devServer: {

    static: './docs',

  },

  plugins: [

    new HtmlWebpackPlugin({

      title: 'Output Management',
      template: './src/index.html',

    }),

  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],

  },
};
