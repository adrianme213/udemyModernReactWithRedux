const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

const webpackConfig = {
  entry: `${SRC_DIR}/index.tsx`,
  devtool: 'inline-source-map',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      include: SRC_DIR,
      loader: 'ts-loader',
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', 'js'],
  },
  mode: 'development',
};

module.exports = webpackConfig;