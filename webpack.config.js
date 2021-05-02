var webpack = require("webpack");
var path = require("path");
const packageJson = require("./package.json");

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const VENDOR_LIBS = Object.keys(packageJson.dependencies);

module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
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
  // plugins: [new MiniCssExtractPlugin()],
};
