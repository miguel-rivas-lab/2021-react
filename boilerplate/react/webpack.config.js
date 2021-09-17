const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pug = {
  test: /\.(pug|jade)$/,
  exclude: /node_modules/,
  use: [
    "html-loader",
    {
      loader: "pug-html-loader",
      options: {}
    }
  ]
};

const babel = {
  test: /\.(ts|js)x?$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader"
  }
};

const sass = {
  test: /\.s[ac]ss$/i,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    "sass-loader",
  ],
};

const imgs = {
  test: /\.(glb|png|jpe?g)$/,
  type: "asset/resource",
};

module.exports = {
  mode: "development",
  module: {
    rules: [
      babel,
      pug,
      sass,
      imgs,
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.pug'),
      inject: true,
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },
  stats: 'errors-only',
}