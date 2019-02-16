const path = require("path");
const webpack = require("webpack");
var DashboardPlugin = require("webpack-dashboard/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          // webpack loader 的执行顺序是从右到左，从下到上
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    host: "localhost",
    port: "3000",
    open: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new StyleLintPlugin({
      configFile: path.resolve(__dirname, "stylelint.config.js"),
      context: path.resolve(__dirname, "./src/style"),
      files: "**/*.(le|sa|scc|c)ss",
      failOnError: false,
      quiet: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin({ port: 3000 })
  ]
};
