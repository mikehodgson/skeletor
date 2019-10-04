const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
  entry: {
    app: ['./src/js/app.js']
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'js/bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'static' }
    ]),
    new WebpackPwaManifest({
      inject: false,
      fingerprints: false,
      filename: 'manifest.webmanifest',
      name: 'App Name',
      short_name: 'App',
      description: 'App Description',
      background_color: '#3d9dae',
      crossorigin: 'use-credentials'
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader', options: { importLoaders: 1 } },
        { loader: 'postcss-loader' }
      ]
    }, {
      test: /\.less$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'less-loader' }
      ]
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}
