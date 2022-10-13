const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src//index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[contenthash].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.ts/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  resolve: {
    extensions: [".ts"],
  },
};
