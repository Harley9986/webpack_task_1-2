const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
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
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'index.html')
})],
};