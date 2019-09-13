const { resolve } = require('path');

module.exports = {
  entry: {
    react: './lib/React.js'
  },
  mode: 'development',
  // mode: 'production',
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: resolve(__dirname, 'dist')
  }
};
