const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    app: './src/app.ts'
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.less$/i,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'less-loader' }
      ],
    }, {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'static' }
      ]
    }),
    new CleanWebpackPlugin({ verbose: true }),
    new LodashModuleReplacementPlugin()
  ],
  devtool: 'source-map'
}
