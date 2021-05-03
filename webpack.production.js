const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config");

const config = {
  mode: "production",
};

module.exports = merge(baseConfig, config);
