// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
// const {
// //   CleanWebpackPlugin
// // } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  plugins: [
    // new CleanWebpackPlugin({
    //   cleanStaleWebpackAssets: false
    // }),
    // new HtmlWebpackPlugin({
    //   title: "Webpack Output",
    // }),
  ],
  module: {
    rules: [{
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env',
            {
              'plugins': ['@babel/plugin-proposal-class-properties']
            }
          ]
        }
      },
    ],
  },
};