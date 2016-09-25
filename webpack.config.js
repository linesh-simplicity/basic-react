const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
   template: __dirname + '/app/index.html',
   filename: 'index.html',
   inject: 'head'
});

module.exports = {
   entry: [
      './app/index.js'
   ],
   module: {
      loaders: [

      ]
   },
   output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
   },
   plugins: [
      HTMLWebpackPluginConfig
   ]
}