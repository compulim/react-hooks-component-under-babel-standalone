const { resolve } = require('path');

module.exports = {
  entry: {
    helloworld: './lib/index.js',
  },
  // externals: {
  //   react: {
  //     commonjs: 'react',
  //     commonjs2: 'react',
  //     root: 'React'
  //   },
  //   'react-dom': {
  //     commonjs: 'react-dom',
  //     commonjs2: 'react-dom',
  //     root: 'ReactDOM'
  //   }
  // },
  resolve: {
    alias: {
      react: resolve(__dirname, 'node_modules/isomorphic-react/dist/react.js'),
      'react-dom': resolve(__dirname, 'node_modules/isomorphic-react-dom/dist/react-dom.js'),
      // 'react-dom': resolve(__dirname, 'node_modules/isomorphic-react-dom/lib/ReactDOM.js'),
    }
    // alias: {
    //   react: resolve(__dirname, 'src/isomorphic/React.js'),
    //   'react-dom': resolve(__dirname, 'src/isomorphic/ReactDOM.js')
    // }
  },
  // externals: {
  //   react: 'node_modules/isomorphic-react/dist/react.js',
  //   'react-dom': 'node_modules/isomorphic-react-dom/dist/react-dom.js'
  // },
  // externals: [
  //   function (context, request, callback) {
  //     console.log(`${ request }: ${ context }`);

  //     if (/node_modules/u.test(context)) {
  //       return callback();
  //     } else if (/lib[\/\\]npmPackages/u.test(context)) {
  //       if (request === 'react') {
  //         // return callback(null, 'commonjs react');
  //         return callback();
  //       } else if (request === 'react-dom') {
  //         // return callback(null, 'commonjs reactdom');
  //         return callback();
  //       }
  //     } else if (/lib[\/\\]window/u.test(context)) {
  //       if (request === 'react') {
  //         return callback(null, 'root React');
  //       } else if (request === 'react-dom') {
  //         return callback(null, 'root ReactDOM');
  //       }
  //     }

  //     callback();
  //   }
  // ],
  mode: 'development',
  // mode: 'production',
  output: {
    filename: '[name].js',
    library: 'HelloWorld',
    libraryTarget: 'umd',
    path: resolve(__dirname, 'dist')
  }
};
