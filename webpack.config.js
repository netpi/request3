var path = require('path')


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    app: './lib/request.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'request.js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {}
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: ['es2015', 'stage-0']
      }
    }]
  }
}