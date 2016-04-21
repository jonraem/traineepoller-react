var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Returns true if the webpack command has the -p flag
var minify = process.argv.indexOf('-p') !== -1;

module.exports = {
  entry: './src/index',
  output: {
    path: minify ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, 'src'),
    filename: minify ? 'bundle.min.js' : 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        exlude: /node_modules/,
        loaders: ['style', 'raw', 'sass']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TraineePoller',
      filename: 'index.html',
      inject: 'body',
      template: 'src/templates/index.html'
    })
  ]
};
