const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './src'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src')
  }
};