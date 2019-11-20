const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['react-hot-loader/patch', path.join(__dirname, 'src', 'index.js')],
  mode: process.env.NODE_ENV || 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  cache: true,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './public',
    hot: true,
    port: 3000,
    proxy: {
      "/api": "http://localhost:3001"
    }
  }
}
