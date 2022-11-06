const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const config = {
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      contentBase: "./dist",
      hot: true,
    },
    plugins: [],
  };

  if (argv.mode === "development") {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return config;
};
