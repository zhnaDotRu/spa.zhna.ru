const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: {
    main: './app/entry.js',
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/dist/',
    filename: '[name].bundle.js' 
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist/'),
    publicPath: '/dist/',
    stats: 'errors-only',
    host: '192.168.0.100',
    disableHostCheck: true,
    hot: true,
    port: 8085,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|png|svg|jpg|gif)$/, 
        loader: 'file-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'vue-style-loader',
          {
            loader: 'css-loader',
            //options: { modules: true }
          },
          'postcss-loader', 
          'sass-loader'
        ]
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
      }
    ]
  },
  resolve: { 
    alias: { 
      vue: 'vue/dist/vue.esm.js' 
    } 
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: true,
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
    new StyleLintPlugin({
      extends: 'stylelint-config-standard'
    })
  ]
};