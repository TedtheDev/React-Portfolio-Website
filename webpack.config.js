const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'

  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {limit: 20 * 1024},
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.HOST": process.env.NODE_ENV === 'production' ? JSON.stringify(process.env.HOST) : '"http://localhost:8000"'
    })
  ]
}