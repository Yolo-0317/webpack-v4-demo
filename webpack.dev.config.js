const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
		path: path.join(__dirname, './dist'), //打包位置 
		filename: 'bundle.js', //打包后文件名称
	},
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      title: 'webpack_v4_demo',
      template: `${__dirname}/src/index.html`,
    }),
  ],
  devServer: {
    compress: true,
    port: 9000,
  },
};