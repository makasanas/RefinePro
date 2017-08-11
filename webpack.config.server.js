let path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.scss$/,
      loader: "style-loader!css-loader!sass-loader"
      // loader : ExtractTextPlugin.extract('style', 'css!sass'),
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    host:'0.0.0.0',
    historyApiFallback: true,
    contentBase: './',
    inline:true,
    port: process.env.PORT,
    compress: true,
    disableHostCheck: true,
  }
};