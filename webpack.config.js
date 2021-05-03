var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    bundle: "./src/index.js",
  },
  devServer: {
    port: 8000,
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          name: "vendor",
          test: /node_modules/,
          chunks: "all",
          priority: 1,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "src/index.html", inject: "body" }),
  ],
};
