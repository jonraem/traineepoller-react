var path = require('path');

// Returns true if the webpack command has the -p flag
var minify = process.argv.indexOf('-p') !== -1;

module.exports = {
  entry: './src/entry',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: minify ? 'bundle.min.js' : 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6', '.jsx']
  }
};
