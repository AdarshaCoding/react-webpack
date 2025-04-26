const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js", // or index.jsx if you renamed it
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      exposes: {
        "./appStoreInHost": "./src/store/appStore.js",
        "./actions": "./src/store/counterSlice.js",
      },
      remotes: {
        AboutInHost: "mfe1@http://localhost:3001/remoteEntry.js",
      },
      // shared: ["react", "react-dom"],
      shared: {
        react: { singleton: true, requiredVersion: "^19.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
        "react-redux": { singleton: true, requiredVersion: "^8.0.0" },
        "@reduxjs/toolkit": { singleton: true },
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  mode: "development",
};
