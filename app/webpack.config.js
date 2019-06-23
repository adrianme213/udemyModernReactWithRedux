const path = require('path');
const SRC_DIRECTORY = path.resolve(__dirname, 'src');
const DIST_DIRECTORY = path.resolve(__dirname, 'dist');

const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  }
];

module.exports = {
  target: 'web',
  mode: 'development',
  entry: path.resolve(SRC_DIRECTORY, 'index.tsx'),
  output: {
    path: DIST_DIRECTORY,
    filename: 'bundle.js',
  },
  module: { rules },
  resolve: {extensions: ['.ts', '.tsx', '.js', '.jsx']},
  devServer: {
    contentBase: DIST_DIRECTORY,
    port: 5000,
    inline: false
  }
};
