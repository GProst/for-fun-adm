const webpack = require('webpack')
const path = require('path')

function _isVendor (module) {
  return module.context && module.context.indexOf('node_modules') !== -1 // TODO: indexOf & check what is module & context objs
}

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common',
    //   minChunks: function (module, count) {
    //     return (_isCSS(module) || !_isVendor(module)) && count >= 2 // TODO: check what is count and delete then
    //   }
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app'],
      minChunks: function (module) {
        return _isVendor(module)
      }
    }),
    process.env.NODE_ENV === 'production'
      ? new webpack.HashedModuleIdsPlugin()
      : new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
}
