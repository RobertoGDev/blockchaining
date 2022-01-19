const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const basePath = __dirname;
const distPath = 'dist';
 
const indexInput = './index.html';
const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        app: ['@babel/polyfill', './src/App.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: '[chunkhash][name].js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: indexInput,
        })
    ],
    devServer: {
        open: true,
      },
};
module.exports = webpackInitConfig;