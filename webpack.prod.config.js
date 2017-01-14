const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [ 'babel-polyfill', path.join(__dirname, 'src/index') ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'keras.js',
    library: 'KerasJS',
    libraryTarget: 'umd'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      { test: /\.js$/, use: [ 'babel-loader' ], exclude: /node_modules/ },
      {
        test: /\.(glsl|frag|vert)$/,
        use: [ 'raw-loader', 'glslify-loader' ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { screw_ie8: true, warnings: false },
      mangle: { screw_ie8: true },
      output: { comments: false, screw_ie8: true }
    })
  ]
};
