const { resolve } = require('path');

module.exports = {
  entry: {
    helloworld: './lib/index.js',
  },
  resolve: {
    alias: {
      react: resolve(__dirname, 'node_modules/isomorphic-react/dist/react.js'),
      'react-dom': resolve(__dirname, 'node_modules/isomorphic-react-dom/dist/react-dom.js')
    }
  },
  mode: 'development',
  // mode: 'production',
  output: {
    filename: '[name].js',
    library: 'HelloWorld',
    libraryTarget: 'umd',
    path: resolve(__dirname, 'dist')
  }
};
