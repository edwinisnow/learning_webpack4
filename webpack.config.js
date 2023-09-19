const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const WebpackDevServer = require('webpack-dev-server');
const UglifyJsPlugin = require('uglify-js-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    devServer: {
        static: './dist'
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    { loader: 'url-loader' }
                ]
            }
        ]
    }
}