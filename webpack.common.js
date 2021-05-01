const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

 module.exports = {
   entry: {
      app: './src/app.js',
   },
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
   },
   module: {
      rules: [{
        use: ['babel-loader'],
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }]
    },
    plugins: [new MiniCssExtractPlugin()],
 };