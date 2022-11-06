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
      static: {
        directory: path.join(__dirname, "./dist"),
      },
    },
  };

  return config;
};
