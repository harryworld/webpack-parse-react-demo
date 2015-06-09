var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('./lib/merge');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: [path.join(ROOT_PATH, 'app/main')],
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        // define an include so we check just the files we need
        include: path.join(ROOT_PATH, 'app'),
        loader: 'jshint'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },
};

var mergeConfig = merge.bind(null, common);

if(TARGET === 'build') {
  module.exports = mergeConfig({
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack ParseReact Demo',
        template: path.join(ROOT_PATH, 'app/index.html')
      }),
    ],
  });
}

if(TARGET === 'dev') {
  var IP = '0.0.0.0';
  var PORT = 8080;

  module.exports = mergeConfig({
    ip: IP,
    port: PORT,
    entry: [
      'webpack-dev-server/client?http://' + IP + ':' + PORT,
      'webpack/hot/dev-server',
    ],
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          // we are using `eslint-loader` explicitly since
          // we have eslint module installed. This way we
          // can be certain that it uses the right loader
          loader: 'eslint-loader',
          include: path.join(ROOT_PATH, 'app'),
        }
      ],
    },
    output: {
      path: __dirname,
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin(),
    ]
  });
}