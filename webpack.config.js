var path = require('path')


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    app: './lib/main.js'
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
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('lib')]
    }]
  }
}